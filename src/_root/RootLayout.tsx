import { Bottombar, LeftSidebar, Topbar } from "@/components/shared";
import { Outlet } from "react-router-dom";



const RootLayout = () => {
    return (
        <div className="w-full md:flex">
            <Topbar />
            <LeftSidebar />

            <section className="flex flex-1 h-full">
                <Outlet />
            </section>

            <Bottombar />
        </div>
    );
};

export default RootLayout;
