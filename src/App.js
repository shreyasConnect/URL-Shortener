import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer/footer";


function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Container />
      <Footer />


    </div>
  );
}

export default App;
