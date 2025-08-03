

import React from 'react'
import RegisterForm from './components/RegisterForm';
import Image from 'next/image';


export default function RegisterPage() {

    return (
        <div>
            <div className="flex items-center justify-center p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white overflow-hidden w-full max-w-5xl">

                    
                    <div className="p-6 flex items-center justify-center">
                        <Image src={"/assets/images/login/login.svg"} width={400} height={400} alt='authentication-image'></Image>
                    </div>

                    {/* Register Form */}
                    <div className="min-h-[80vh] p-8 border border-gray-300 rounded-lg">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center pb-4">Sign Up</h2>
                        {/* form */}
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
