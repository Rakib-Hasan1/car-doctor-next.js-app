import Image from 'next/image'
import React from 'react'
import LoginForm from './components/LoginForm'

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white overflow-hidden w-full max-w-5xl">

                
                <div className="p-6 flex items-center justify-center">
                    <Image src={"/assets/images/login/login.svg"} width={400} height={400} alt='authentication-image'></Image>
                </div>

                {/* Register Form */}
                <div className="min-h-[60vh] p-8 border border-gray-300 rounded-lg">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center pb-4">Login</h2>
                    {/* form */}
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}
