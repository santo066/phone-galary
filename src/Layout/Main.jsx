import { Outlet } from "react-router-dom";
import Header from "../Pages/Home/Header/Header";

export default function Main() {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}