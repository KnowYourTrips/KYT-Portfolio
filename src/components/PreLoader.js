import React, { useEffect } from 'react';
import '../preloader.css';
import { preLoaderAnim } from '../animations';

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim();
    }, []);

    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Plan.</span>
                <span>Travel.</span>
                <span>Relax.</span>
            </div>
        </div>
    );
}

export default PreLoader;