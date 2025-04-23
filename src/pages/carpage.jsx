import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, MeshReflectorMaterial, Stage } from "@react-three/drei";
import About from "./about";
import { useEffect, useState } from "react";
import Configurator from "./configarator";
import Contact from "./contact";
import { useNavigate, useLocation } from "react-router-dom";
import { Sian } from "../models/lamborghini_sian";
import { Model } from "../models/lamboghiniHarucan";
import { PeganiHaurya } from "../models/peganihaurya";



function CarPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [activePage, setActivePage] = useState("configurator");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const { carmodel, name, position, about, seatcolor, rimcolorokay } = location.state || {};


    
    // Handle window resize for responsive design
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const renderCarModel = () => {
        switch (carmodel) {
            case "huracan":
                return <Model />;
            case "sian":
                return <Sian />;
            case "huarya":
                return <PeganiHaurya />;
            default:
                return null;
        }
    };

    const renderPage = () => {
        switch (activePage) {
            case "about":
                return <About about={about} />;
            case "configurator":
                return <Configurator seatcolor={seatcolor} rimcolorokay={rimcolorokay} />;
            case "contact":
                return <Contact />;
            default:
                return <Configurator seatcolor={seatcolor} rimcolorokay={rimcolorokay} />;
        }
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">

            {/* Navigation Bar */}
            <nav className="flex items-center justify-between fixed top-0 w-full z-40 p-4 bg-gradient-to-b from-black via-transparent">
                <button
                    onClick={() => navigate(-1)}
                    className="text-amber-50 border-2 border-double px-4 py-2 rounded-md italic font-bold hover:bg-amber-50 hover:text-black transition"
                >
                    👈 Back
                </button>

                <h1 className="text-2xl md:text-3xl font-bold italic text-amber-300">{name}</h1>

                <div className="flex gap-3">
                    <button className="border-2 px-4 py-2 text-amber-50 border-double rounded-md hover:bg-amber-50 hover:text-black transition">Watch</button>
                    <button onClick={() => setActivePage("configurator")} className="border-2 px-4 py-2 text-amber-50 border-double rounded-md hover:bg-amber-50 hover:text-black transition">Configurator</button>
                    <button onClick={() => setActivePage("about")} className="border-2 px-4 py-2 text-amber-50 border-double rounded-md hover:bg-amber-50 hover:text-black transition">About</button>
                    <button onClick={() => setActivePage("contact")} className="border-2 px-4 py-2 text-amber-50 border-double rounded-md hover:bg-amber-50 hover:text-black transition">Contact</button>
                </div>
            </nav>

            {/* 3D Canvas */}
            <Canvas className="w-full h-full">
                <ambientLight intensity={0.004} />
                <directionalLight position={[5, 5, 5]} intensity={0.02} />
                <Stage environment="city" intensity={0.05} castShadow={false}>
                    {renderCarModel()}
                </Stage>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={position}>
                    {isMobile ? <planeGeometry args={[50, 50]} /> : <planeGeometry args={[1000, 1000]} />}
                    <MeshReflectorMaterial
                        blur={[300, 100]}
                        resolution={3000}
                        mixBlur={1}
                        mixStrength={40}
                        roughness={1}
                        depthScale={1.2}
                        minDepthThreshold={0.4}
                        maxDepthThreshold={1.4}
                        color="#101010"
                        metalness={0.5}
                    />
                </mesh>
                <OrbitControls />
            </Canvas>

            {/* Sidebar Panel */}
            <div className="absolute  right-0 top-1/3 z-40 m-2 rounded-3xl border-4 border-double bg-transparent text-amber-50 flex justify-end">
                {renderPage()}
            </div>
        </div>
    );
}

export default CarPage;