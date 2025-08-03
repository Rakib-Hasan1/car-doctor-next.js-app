import Link from 'next/link'
import React from 'react'

export default function Navbar() {

    const navMenu = <>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/about'}>About</Link></li>
        <li><Link href={'/services'}>Services</Link></li>
        <li><Link href={'/blog'}>Blog</Link></li>
        <li><Link href={'/contact'}>Contact</Link></li>
    </>

    return (
        <div className="w-10/12 py-3 mx-auto navbar bg-base-100 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navMenu}
                    </ul>
                </div>
                <Link href={"/"}>
                    <img src={'/assets/logo.svg'} width={107} height={70} alt={"logo"} />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <Link href={'/register'}>Register</Link>
                <Link href={'/login'}>Login</Link>
                <a className="btn btn-error btn-outline rounded">Appointment</a>
            </div>
        </div>
    )
}
