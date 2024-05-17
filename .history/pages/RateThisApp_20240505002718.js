import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import SplineLoader from '@splinetool/loader';
import Head from 'next/head';
import styles from '@/styles/RateThisApp.module.css';

export default function ThreeJSComponent() {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Now it's safe to use 'window' and other browser-specific objects
        const scene = new THREE.Scene();

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

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.125;

        const animate = () => {
            controls.update();
            renderer.render(scene, camera);
        };

        renderer.setAnimationLoop(animate);

        const onWindowResize = () => {
            camera.left = window.innerWidth / -2;
            camera.right (window.innerWidth / 2;
            camera.top = window.innerHeight / 2;
            camera.bottom (window.innerHeight / -2;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', onWindowResize);

        if (canvasRef.current) {
            canvasRef.current.appendChild(renderer.domElement); // Ensure the canvas is appended to the DOM
        }

        return () => {
            window.removeEventListener('resize', onWindowResize);
            renderer.setAnimationLoop(null); // Cleanup animation loop
        };
    }, []); // Use 'window' safely within 'useEffect'

    return (
        <>
            <Head>
                <title>Three.js Component</title>
                <meta name="description" content="Three.js with OrbitControls and Spline." />
            </Head>

            <div ref={canvasRef} style={{ width: '100%', height: '700px' }}>
                {/* The Three.js canvas is appended here */}
            </div>
        </>
    );
}
