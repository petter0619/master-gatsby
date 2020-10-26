import React from 'react';
// Import components
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    );
}