import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SkipHire } from "./containers";
import { NotFound } from "./components";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SkipHire />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
