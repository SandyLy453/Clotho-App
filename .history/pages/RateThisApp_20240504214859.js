import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import Head from 'next/head';

export default function SplineComponent() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const app = new Application(canvasRef.current);
            app.load('https://prod.spline.design/Dgcmid8if7EA-5WM/scene.splinecode');
        }
    }, []); // Run only once after component mounts

    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Homepage of Clotho." />
            </Head>

            <div className={styles.bottomNavContainer}>
                <BottomNavigation
                    bgColorCommunity="var(--button-highlight-light)"
                    pathColorCommunity="var(--white)"
                    borderStyle="60%"
                    iconWidth={36}
                    iconHeight={36}
                />
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
