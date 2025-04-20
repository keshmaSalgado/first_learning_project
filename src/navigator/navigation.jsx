import { useState } from "react";
import Cars from "../pages/cars";
import Homepage from "../pages/homepage";

function Navigation() {

    const [activePage, ] = useState("home");

    const renderPage = () => {
        switch (activePage) {
            case "home":
                return <Homepage />;
            case "cars":
                return <Cars />;
            // Add more cases if needed
            default:
                return <Homepage />;
        }
    };

    return (
        <>
            <nav className="flex bg-transparent  z-40 gap-2.5 fixed text-orange-600 w-full justify-between items-center p-4">
                <div>
                    <h1 className="p-6 font-bold italic text-6xl font-sans">Vehical.com</h1>
                </div>
                {/* <div className="p-4 flex gap-3 justify-end">
                    <button onClick={() => setActivePage("home")} className="border-3 p-3 text-amber-50 border-double rounded-md hover:bg-amber-50 hover:text-black">Home</button>
                    <button onClick={() => setActivePage("cars")} className="border-3 p-3 text-amber-50 border-double rounded-md hover:bg-amber-50 hover:text-black">Cars</button>
                    <button className="border-3 p-3 text-amber-50 border-double rounded-md hover:bg-amber-50 hover:text-black">About</button>
                    <button className="border-3 p-3 text-amber-50 border-double rounded-md hover:bg-amber-50 hover:text-black">Contact</button>
                </div> */}
            </nav>
            <div>
                {renderPage()}
            </div>
        </>
    );
}

export default Navigation;