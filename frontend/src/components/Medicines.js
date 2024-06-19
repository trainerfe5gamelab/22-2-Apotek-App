import React, { useState, useEffect } from "react";
import axios from "axios";

const Medicines = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [obat, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // State untuk mengendalikan visibilitas popup
  const [showAlert, setShowAlert] = useState(false); // State untuk menampilkan alert
  const [alertMessage, setAlertMessage] = useState(""); // Pesan yang ditampilkan dalam alert

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get("http://localhost:5000/obat");
        setMedicines(response.data);
      } catch (error) {
        console.error("Error fetching obat:", error);
      }
    };

    fetchMedicines();
  }, []);

  const filteredMedicines = obat.filter((obat) => {
    const regex = new RegExp(searchTerm, "i");
    return regex.test(obat.namaObat);
  });

  if (obat.length === 0) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = (obat) => {
    const existingItem = cart.find(item => item.namaObat === obat.namaObat);
    if (existingItem) {
      setCart(cart.map(item => 
        item.namaObat === obat.namaObat 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...obat, quantity: 1 }]);
    }

    // Tampilkan alert
    setAlertMessage(`${obat.namaObat} ditambahkan ke keranjang.`);
    setShowAlert(true);

    // Atur agar alert tertutup setelah 3 detik
    setTimeout(() => {
      setShowAlert(false);
      setAlertMessage("");
    }, 3000);
  };

  const handleRemoveFromCart = (obat) => {
    setCart(cart.filter(item => item.namaObat !== obat.namaObat));
  };

  const handleQuantityChange = (obat, quantity) => {
    setCart(cart.map(item =>
      item.namaObat === obat.namaObat
        ? { ...item, quantity: quantity }
        : item
    ));
  };

  const generateOrderMessage = () => {
    let message = "Order: ";
    let totalPrice = 0;
    cart.forEach(item => {
      message += `${item.quantity} unit(s) of ${item.namaObat}, `;
      totalPrice += item.quantity * item.hargaObat;
    });
    message += `Total Harga: Rp ${totalPrice.toLocaleString("id-ID")}`;
    return encodeURIComponent(message);
  };

  const handleOrderClick = () => {
    const orderMessage = generateOrderMessage();
    const whatsappURL = `https://wa.me/6281390937612?text=${orderMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="obat" className="obat-section">
      <div>
        <h2 style={{ paddingTop: "5%" }}>PRODUK OBAT</h2>
        <input
          type="text"
          placeholder="Search medicine"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div
          className="medicine-list"
          style={{ paddingTop: "5%", marginLeft: "1px" }}
        >
          {filteredMedicines.map((obat, index) => (
            <div key={index} className="medicine-item">
              <h3>{obat.namaObat}</h3>
              <img src={obat.gambarObat} alt={obat.namaObat} />            
              <p>{obat.deskripsiObat}</p>
              <p>Price: Rp {obat.hargaObat.toLocaleString("id-ID")}</p>
              <button onClick={() => handleAddToCart(obat)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <button onClick={() => setIsCartOpen(true)} className="open-cart-button">
          Cek Keranjang
        </button>
        {isCartOpen && (
          <Cart 
            cart={cart} 
            onRemove={handleRemoveFromCart} 
            onQuantityChange={handleQuantityChange}
            onOrderClick={handleOrderClick}
            onClose={() => setIsCartOpen(false)}
          />
        )}
        {showAlert && (
          <div className="alert-container">
            <div className="alert">
              {alertMessage}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Cart = ({ cart, onRemove, onQuantityChange, onOrderClick, onClose }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.hargaObat, 0);

  return (
    <div className="cart-overlay">
      <div className="cart-popup">
        <button onClick={onClose} className="close-cart-button">X</button>
        <h2>Keranjang</h2>
        {cart.length === 0 ? (
          <p>Keranjang Masih Kosong Yuk Di Order.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h3>{item.namaObat}</h3>
              <p>Price: Rp {item.hargaObat.toLocaleString("id-ID")}</p>
              <p>Quantity: 
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    onQuantityChange(item, parseInt(e.target.value))
                  }
                />
              </p>
              <button onClick={() => onRemove(item)}>Remove</button>
            </div>
          ))
        )}
        {cart.length > 0 && (
          <>
            <p>Total Harga: Rp {totalPrice.toLocaleString("id-ID")}</p>
            <button onClick={onOrderClick}>Order</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Medicines;
