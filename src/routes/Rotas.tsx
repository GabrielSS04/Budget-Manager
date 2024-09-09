import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../page/home/Home";
import "../App.css";
import { Header } from "../components/header/Header";
import About from "../page/about/About";

export default function Rotas() {
  return (
    <>

        <Header/>

        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About/>} />

                <Route path="*" element={<Navigate to="/home"/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}
