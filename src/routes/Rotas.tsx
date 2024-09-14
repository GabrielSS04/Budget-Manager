import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../page/home/Home";
import "../App.css";
import { Header } from "../components/header/Header";
import About from "../page/about/About";
import Login from "../page/login/Login";
import Dashboard from "../page/dashboard/Dashboard";

export default function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logger" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
