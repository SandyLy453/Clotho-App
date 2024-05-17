import { useEffect, useRef } from 'react'; // React imports
import * as THREE from 'three'; // Three.js core imports
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Other Three.js components
import { mergeBufferGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'; // Your desired import

import Head from 'next/head'; // Next.js imports
import BottomNavigation from '@/components/BottomNavigation'; // Local imports
import styles from '@/styles/RateThisApp.module.css'; // Local style imports

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

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.125;

        // Animation loop
        const animate = () => {
            controls.update(); // Update controls
            renderer.render(scene, camera); // Render the scene
        };

        renderer.setAnimationLoop(animate); // Start animation loop

        // Window resizing
        const onWindowResize = () => {
            camera.left = window.innerWidth / -2;
            camera.right = window.innerWidth / 2;
            camera.top = window.innerHeight / 2;
            camera.bottom = window.innerHeight / -2;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', onWindowResize); // Add resize event listener

        if (canvasRef.current) {
            canvasRef.current.appendChild(renderer.domElement); // Append the renderer's canvas to the DOM
        }

        return () => {
            // Cleanup on unmount
            window.removeEventListener('resize', onWindowResize);
            renderer.setAnimationLoop(null); // Stop animation loop
        };
    }, []);

    return (
        <>
            <Head>
                <title>Three.js Component</title>
                <meta name="description" content="Three.js with Spline and OrbitControls." />
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
