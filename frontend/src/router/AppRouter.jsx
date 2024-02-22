import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailsPage } from "../details/DetailsPage";
import { LoginPage } from "../login/LoginPage"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
