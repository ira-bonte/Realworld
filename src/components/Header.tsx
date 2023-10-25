import React from 'react'
import logo1 from '../assets/img/png/logo-no-background.png'
const Header = () => {

    return(
        <section>
        <header className=' p-2 flex'>
            <div className=" flex ">
                <img src={logo1} alt="logo" className=' h-20' />
                
            </div>
            <nav>
                <ul className=' flex gap-4 '>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/single-post">single post</a></li>
                    <li><a href="/categories">categories</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">contact</a></li>
x
                </ul>
            </nav>

        </header>
        </section>
    );
}

export default Header;






