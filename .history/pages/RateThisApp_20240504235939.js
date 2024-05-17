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
            controls.update();
            renderer.render(scene, camera);
        };

        renderer.setAnimationLoop(animate); // Set the animation loop

        // Handling window resizing
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
            canvasRef.current.appendChild(renderer.domElement); // Append renderer's canvas to the DOM
        }

        return () => {
            // Cleanup
            window.removeEventListener('resize', onWindowResize);
            renderer.setAnimationLoop(null); // Stop the animation loop
        };
    }, []); // Run once when component mounts

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
