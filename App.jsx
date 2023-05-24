import React from "react"
import Header from "./component/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"

export default function App() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Photos />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    )
  }