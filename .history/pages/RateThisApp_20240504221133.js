import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import SplineLoader from '@splinetool/loader';

export default function ThreeJSComponent() {
    const canvasRef = useRef(null); // Ref for the canvas
    const controlsRef = useRef(null); // Ref for OrbitControls
    const rendererRef = useRef(null); // Ref for the renderer

    useEffect(() => {
        // Create the scene, camera, and renderer
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
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFShadowMap;
        renderer.setAnimationLoop(animate);

        rendererRef.current = renderer;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.125;

        controlsRef.current = controls;

        scene.background = new THREE.Color('#2a1145');

        // Load the Spline scene and add it to the Three.js scene
        const loader = new SplineLoader();
        loader.load(
            'https://prod.spline.design/Dgcmid8if7EA-5WM/scene.splinecode',
            (splineScene) => {
                scene.add(splineScene);
            }
        );

        function animate() {
            controls.update();
            renderer.render(scene, camera);
        }

        const onWindowResize = () => {
            camera.left = window.innerWidth / -2;
            camera.right = window.innerWidth / 2;
            camera.top = window.innerHeight / 2;
            camera.bottom = window.innerHeight / -2;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', onWindowResize);

        // Append the renderer's canvas to the DOM
        if (canvasRef.current) {
            canvasRef.current.appendChild(renderer.domElement);
        }

        return () => {
            // Clean up the event listener and animation loop on component unmount
            window.removeEventListener('resize', onWindowResize);
            renderer.setAnimationLoop(null); // Stop the animation loop
        };
    }, []); // Run this effect once when the component mounts

    return (
<>
            <Head>
                <title>Home</title>
                <meta name="description" content="Homepage of Clotho." />
            </Head>

            <div className={styles.bottomNavContainer}>
                <BottomNavigation/>
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




