import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import Head from 'next/head';
import BottomNavigation from '../components/BottomNavigation'; // Ensure correct import

export default function SplineComponent() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const app = new Application(canvasRef.current);
            app.load('https://prod.spline.design/Dgcmid8if7EA-5WM/scene.splinecode');
        }
    }, []);

    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Homepage of Clotho." />
            </Head>

            <canvas
                id="canvas3d"
                ref={canvasRef}
                style={{ width: '100%', height: '700px', border: 'none' }}
            />

            <BottomNavigation
                bgColorHome="var(--button-highlight-light)"
                pathColorHome="var(--white)"
                borderStyle="60%"
                iconWidth={36}
                iconHeight={36}
            />
        </>
    );
}
