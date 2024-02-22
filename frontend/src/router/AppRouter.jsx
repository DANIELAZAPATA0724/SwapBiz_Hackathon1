import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailsPage } from "../details/DetailsPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
