import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CheckOut } from "./pages/checkout";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
}
