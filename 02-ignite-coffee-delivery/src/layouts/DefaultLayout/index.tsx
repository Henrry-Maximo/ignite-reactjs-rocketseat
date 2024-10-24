import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";

export function DefaultLayout() {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <Outlet />
    </div>  
  )
}