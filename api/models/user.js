import db from "../config/db.js";
class User {
  static createUser(newUser, callback) {
    const query = "INSERT INTO users SET ?";
    db.query(query, newUser, callback);
  }
  static findUserByEmail(email, callback) {
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], callback);
  }
}
export default User;
