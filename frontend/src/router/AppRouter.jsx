import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailsPage } from "../details/DetailsPage";
import { LoginPage } from "../login/LoginPage";
import { HomePage } from "../home/HomePage";
import { AddService } from "../AddService/AddService"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail" element={<DetailsPage />} />
        <Route path="/add" element={<AddService />} />
      </Routes>
    </BrowserRouter>
  );
};
