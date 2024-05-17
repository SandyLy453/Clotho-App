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
        
        // Controls setup
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.125;

        // Spline scene loading
        const loader = new SplineLoader();
        loader.load(
            'https://prod.spline.design/Dgcmid8if7EA-5WM/scene.splinecode',
            (splineScene) => {
                scene.add(splineScene);
            }
        );

        // Animation loop
        const animate = () => {
            controls.update(); // Update controls
            renderer.render(scene, camera); // Render scene
        };
        renderer.setAnimationLoop(animate); // Start animation loop

        // Handle window resizing
        const onWindowResize = () => {
            camera.left = window.innerWidth / -2;
            camera.right = window.innerWidth / 2;
            camera.top = window.innerHeight / 2;
            camera.bottom = window.innerHeight / -2;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', onWindowResize); // Add event listener for resizing
        
        if (canvasRef.current) {
            canvasRef.current.appendChild(renderer.domElement); // Append renderer's canvas
        }

        return () => {
            // Cleanup
            window.removeEventListener('resize', onWindowResize);
            renderer.setAnimationLoop(null); // Stop animation loop
        };
    }, []); // Run once when component mounts

    return (
        <div>
            <Head>
                <title>Three.js Component</title>
                <meta name="description" content="Three.js integration with Spline and OrbitControls." />
            </Head>

            <div className={styles.nav}>
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
