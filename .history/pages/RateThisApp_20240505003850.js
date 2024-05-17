import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import SplineLoader from '@splinetool/loader';
import Head from 'next/head';
import BottomNavigation from '@/components/BottomNavigation';
import styles from '@/styles/RateThisApp.module.css';

export default function ThreeJSComponent() {
    
useEffect(() => {
        // Now it's safe to use 'window' and other browser-specific objects
        

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

// scene
const scene = new THREE.Scene();

// spline scene
const loader = new SplineLoader();
loader.load(
  'https://prod.spline.design/Dgcmid8if7EA-5WM/scene.splinecode',
  (splineScene) => {
    scene.add(splineScene);
  }
);
};


// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// scene settings
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

scene.background = new THREE.Color('#2a1145');
renderer.setClearAlpha(1);

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.125;

window.addEventListener('resize', onWindowResize);
function onWindowResize() {
  camera.left = window.innerWidth / - 2;
  camera.right = window.innerWidth / 2;
  camera.top = window.innerHeight / 2;
  camera.bottom = window.innerHeight / - 2;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate(time) {
  controls.update();
  renderer.render(scene, camera);
}


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
                    style={{ width: '10%', height: '700px', border: 'none' }}
                />
            </main>
        </>
    );
}
