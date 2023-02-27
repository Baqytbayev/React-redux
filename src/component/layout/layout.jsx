import React from 'react';
import './layout.css'
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header className={'header'}>
                <ul className={'navstyle'}>
                    <li className={'linkStyle'}><NavLink to={'/contacts'} end>Contacts< / NavLink ></li>
                    <li className={'linkStyle'}><NavLink to={'/add'} end>Add< / NavLink ></li>
                </ul>
                <main>
                    <Outlet/>
                </main>
            </header>
        </>
    )
}
export default Layout;