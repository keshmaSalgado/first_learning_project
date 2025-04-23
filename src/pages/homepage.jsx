import { Canvas, useThree } from "@react-three/fiber";
import { Model } from "./lamb2016model";
import { Environment, OrbitControls, MeshReflectorMaterial, Stage, Html } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";


function CameraLogger() {
    const { camera } = useThree();


    useEffect(() => {
        console.log("Camera Position:", camera.position);
        camera.position.set(293.7973660512041, 137.9060641050322, -287.4210371754323);
        camera.rotation.set(-6.123233995736766e-17, 0, 0, 'XYZ');
    }, [camera]);

    return null;
}

function Homepage() {

    useEffect(() => {
        isMobile && alert('Use Desktop for better experience')
    }, []);

    return (
        <div className="relative w-full h-screen">
            <div>
                <div className="absolute top-2/6 left-0 transform   text-amber-50 p-10  z-40">
                    <p className="md:text-5xl font-serif italic font-bold  text-left">Welcome <br />to our page</p>
                    <Link to={"/cars"}>
                        <button className="md:text-2xl border-3 italic p-3 mt-5 font-bold text-amber-50 border-double rounded-md hover:bg-amber-50 hover:text-black" onClick={null}>Go to Car Sales🛒</button>
                    </Link>
                </div>
                <div className="absolute top-0  transform end-0  text-amber-50 p-5  z-40 italic">
                    <p>@Copyright for Keshma</p>
                </div>
            </div>

            <Canvas>
                <ambientLight intensity={0.004} />
                <directionalLight position={[5, 5, 5]} intensity={0.02} />
                <Suspense fallback={
                    <Html center>
                        <p className="text-white text-xl italic animate-pulse">Loading car model...</p>
                    </Html>
                }>
                    <Stage environment="city" intensity={0.05} castShadow={false}>
                        <Model />
                    </Stage></Suspense>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-12}>
                    {isMobile ? <planeGeometry args={[100, 100]} /> : <planeGeometry args={[1000, 1000]} />}
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
                    /></mesh>
                <CameraLogger />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableDamping={false}
                    enableRotate={false}
                />
            </Canvas>
        </div>
    );
}

export default Homepage;
