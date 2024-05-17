import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

export default function RateThisApp() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const app = new Application(canvasRef.current);
            app.load('https://prod.spline.design/Dgcmid8if7EA-5WM/scene.splinecode');
        }
    }, []); 

    return (
        <>
            <Head title="Home" description="Homepage of Clotho." />

            <div>
                
                <canvas id="canvas3d" ref={canvasRef} style={{ width: '100%', height: '500px' }} />
            </div>
        </>
    );
}
