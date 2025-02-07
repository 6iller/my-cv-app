import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';


export default function Layout ({children}) {
return (
    <> <Header/>
    <main>{children}</main><Footer/></>
)
}
Layout.propTypes = {
    children: PropTypes.node.isRequired
};
