import React from "react"
import Header from "./component/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Photos from "./pages/Photos"
import Chart from "./pages/Chart"

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="photos" element={<Photos />} />
            <Route path="chart" element={<Chart />} />
            {/* <Route path="contact" element={<ContactPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }