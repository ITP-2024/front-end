import React from 'react';
import '../styles/App.css';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <div className="container">
            <img src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js.png" alt="Next.js logo" />
            {/* ...rest of your code... */}
        </div>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;