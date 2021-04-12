import React from "react";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import styles from "./app.module.css";
import Login from "./components/login/login";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
