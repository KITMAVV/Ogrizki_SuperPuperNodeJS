import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Banner from './Banner';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>

            <Header />
            <Nav />
            <Banner />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};
export default Layout;
