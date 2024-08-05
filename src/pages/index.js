import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import HomeInfo from "../components/HomeInfo";
import Loader from "../components/Loader";
import Dragon from "../models/Dragon";
import Sky from "../models/Sky";
import Island from "../models/Island";
import Ship from "../models/Ship";
import { Stack } from "@mui/material";
import Image from "next/image";
const Home = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            audioRef.current = new Audio("/sakura.mp3");
            audioRef.current.volume = 0.4;
            audioRef.current.loop = true;
        }
    }, []);
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);

    const [islandConfig, setIslandConfig] = useState({
        scale: [],
        position: [],
        rotation: [],
    });

    const [shipConfig, setShipConfig] = useState({
        scale: [],
        position: [],
    });

    const updateConfigs = () => {
        let newIslandConfig = {
            scale: [0.83, 0.83, 0.83],
            position: [0, -9, -43],
            rotation: [0.1, 4.7, 0],
        };
        let newShipConfig = {
            scale: [0.058, 0.058, 0.058],
            position: [-0.1, -1.8, 0.5],
        };

        if (window.innerWidth < 1200) {
            newIslandConfig.scale = [0.75, 0.75, 0.75];
            newShipConfig.scale = [0.055, 0.055, 0.055];
            newShipConfig.position = [0, -1.8, 0];
        }

        if (window.innerWidth < 900) {
            newIslandConfig.scale = [0.7, 0.7, 0.7];
            newIslandConfig.position = [0.5, -10, -43];
            newShipConfig.scale = [0.035, 0.035, 0.035];
            newShipConfig.position = [0.05, -1.2, 2];
        }

        if (window.innerWidth < 600) {
            newIslandConfig.scale = 0.55;
            newIslandConfig.position = [0, -10, -43];
            newShipConfig.scale = [0.017, 0.017, 0.017];
            newShipConfig.position = [0, -0.8, 2.5];
        }
        if (window.innerWidth < 400) {
            newIslandConfig.scale = 0.48;
            newIslandConfig.position = [0, -10, -43];
            newShipConfig.scale = [0.016, 0.016, 0.016];
            newShipConfig.position = [0, -0.8, 2.5];
        }

        setIslandConfig(newIslandConfig);
        setShipConfig(newShipConfig);
    };

    useEffect(() => {
        updateConfigs();
        window.addEventListener("resize", updateConfigs);
        return () => window.removeEventListener("resize", updateConfigs);
    }, []);
    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play();
        }
        return () => {
            audioRef.current.pause();
        };
    }, [isPlayingMusic]);
    return (
        <section className='w-full h-screen relative'>
            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            <Canvas
                className={`w-full h-screen bg-transparent ${
                    isRotating ? `cursor-grabbing` : `cursor-grab`
                }`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight
                        color='#b1e1ff'
                        groundColor='black'
                        intensity={1}
                    />
                    <Dragon rotation={[0, 15, 0]} />
                    <Sky isRotating={isRotating} />
                    <Island
                        position={islandConfig.position}
                        scale={islandConfig.scale}
                        rotation={islandConfig.rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Ship
                        scale={shipConfig.scale}
                        position={shipConfig.position}
                        isRotating={isRotating}
                        rotation={[0, 4.5, 0]}
                    />
                </Suspense>
            </Canvas>
            <Stack className='absolute bottom-2 left-2'>
                <Image
                    width={40}
                    height={40}
                    src={
                        !isPlayingMusic
                            ? "/images/soundoff.png"
                            : "/images/soundon.png"
                    }
                    alt='sound'
                    className='cursor-pointer object-contain'
                    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                />
            </Stack>
        </section>
    );
};

export default Home;
