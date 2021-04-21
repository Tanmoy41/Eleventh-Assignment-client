import React from 'react';
import './Header.css';
import HeaderTop from '../HeaderTop/HeaderTop';
import MainHeader from '../MainHeader/MainHeader';

const Header = () => {
    return (
        <div className="header-container">
            <HeaderTop />
            <MainHeader />
        </div>
    );
};

export default Header;