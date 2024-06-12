import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Nabvar from "../components/Navbar";
import Medicines from "../components/Medicines";
import FAQ from "../components/FAQ";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Apotek.css';

const Apotek = () => {
    return (
        <div>
            <Nabvar />
            <Home />
            <About />
            <Medicines />
            <FAQ />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default Apotek;