import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Head from 'next/head';
import BottomNavigation from '@/components/BottomNavigation';
import styles from '@/styles/RateThisApp.module.css';

export default function ThreeJSComponent() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();

        const camera = new THREE.OrthographicCamera(
            window.innerWidth / -2,
            window.innerWidth / 2,
            window.innerHeight / 2,
            window.innerHeight / -2,
            -50000,
            10000
        );

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.125;

        const animate = () => {
            controls.update(); // Ensure controls are updated
            renderer.render(scene, camera); // Render the scene
        };

        renderer.setAnimationLoop(animate); // Set the animation loop

        const onWindowResize = () => {
            camera.left = window.innerWidth / -2;
            camera.right = window.innerWidth / 2;
            camera.top = window.innerHeight / 2;
            camera.bottom = window.innerHeight / -2;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', onWindowResize);

        if (canvasRef.current) {
            canvasRef.current.appendChild(renderer.domElement);
        }

        return () => {
            window.removeEventListener('resize', onWindowResize);
            renderer.setAnimationLoop(null); // Clean up animation loop on unmount
        };
    }, []); // Run this effect once when the component mounts

    return (
        <>
            <Head title="Home" description="Homepage of Clotho." />

            <div className={styles.bottomNavContainer}>
                <BottomNavigation />
            </div>

            <main className={styles.main}>
                <canvas
                    id="canvas3d"
                    ref={canvasRef}
                    style={{ width: '100%', height: '700px', border: 'none' }}
                />
            </main>
        </>
    );
}
