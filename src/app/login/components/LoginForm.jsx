"use client"
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {

    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            <label className='label font-semibold text-black'>Email</label>
            <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label className='label font-semibold text-black'>Password</label>
            <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="submit"
                className="w-full font-semibold bg-[#FF3811] text-white py-2 rounded-md hover:bg-[#ff3911da] transition"
            >
                Sign In
            </button>
            <div className='space-y-8'>
                <p className='text-center'>Or Login with</p>
                <div className='flex justify-center gap-4'>
                    <button className='rounded-full bg-gray-200 p-3 text-blue-900'><FaFacebookF /></button>
                    <button className='rounded-full bg-gray-200 p-3 text-blue-900'><FaLinkedinIn /></button>
                    <button className='rounded-full bg-gray-200 p-3'><FcGoogle /></button>
                </div>
                <p className='text-center'>Don't have an account? <Link href={"/register"} className='text-[#FF3811]'>Register</Link></p>
            </div>

        </form>
    )
}
