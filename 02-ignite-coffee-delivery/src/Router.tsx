import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CheckOut } from "./pages/Checkout";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { NotFound } from "./pages/Notfound";
import { Success } from "./pages/Success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/success" element={<Success />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
