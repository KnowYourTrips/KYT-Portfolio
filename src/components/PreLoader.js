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
                <span>Stress.</span>
                <span>Free.</span>
                <span>Travel.</span>
            </div>
        </div>
    );
}

export default PreLoader;