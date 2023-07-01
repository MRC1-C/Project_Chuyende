import PublicLayout from "@/layout/PublicLayout"
import NotFoundPage from "@/page/404"
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PrivateLayout from "./layout/PrivateLayout"
import Login from "./page/Login"
import { adminroutes, routes } from "./router"


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<PublicLayout />}>
            {routes}
          </Route>
          <Route path="/admin" element={<PrivateLayout />}>
            {adminroutes}
          </Route>
          <Route path='login' element={<Login />}></Route>
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
