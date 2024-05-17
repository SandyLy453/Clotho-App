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
        // camera
const camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2,  -50000, 10000);
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
