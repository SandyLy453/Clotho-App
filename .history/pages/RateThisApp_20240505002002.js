import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import SplineLoader from '@splinetool/loader';
import Head from 'next/head';
import BottomNavigation from '@/components/BottomNavigation';
import styles from '@/styles/RateThisApp.module.css';

export default function ThreeJSComponent() {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();

        // Camera setup
        const camera = new THREE.OrthographicCamera(
            window.innerWidth / -2,
            window.innerWidth / 2,
            window.innerHeight / 2,
            window.innerHeight / -2,
            -50000,
            10000
        );
        camera.position.set(0, 0, 0);
        camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Orbit controls setup
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.125;

        const animate = () => {
            controls.update();
            renderer.render(scene, camera);
        };

        renderer.setAnimationLoop(animate);

        // Handle window resizing
        const onWindowResize = () => {
            camera.left = window.innerWidth / -2;
            camera.right = window.innerWidth / 2;
            camera.top = window.innerHeight / 2;
            camera.bottom = window.innerHeight / -2;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', onWindowResize);

        // Load Spline scene
        const loader = new SplineLoader();
        loader.load(
            'https://prod.spline.design/Dgcmid8if7EA-5WM/scene.splinecode',
            (splineScene) => {
                scene.add(splineScene); // Add the loaded Spline scene to the Three.js scene
            },
            undefined,
            (error) => {
                console.error('Error loading Spline scene:', error); // Error handling for SplineLoader
            }
        );

        if (canvasRef.current) {
            canvasRef.current.appendChild(renderer.domElement); // Ensure the canvas is appended
        }

        return () => {
            // Cleanup on unmount
            window.removeEventListener('resize', onWindowResize);
            renderer.setAnimationLoop(null); // Stop the animation loop
        };
    }, []); // Run once on component mount

    return (
        <>
            <Head>
                <title>Three.js Component</title>
                <meta name="description" content="Three.js with OrbitControls and Spline." />
            </Head>

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
