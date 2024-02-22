import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../login/LoginPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
