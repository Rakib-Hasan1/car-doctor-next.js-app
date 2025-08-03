import dbConnect, { collectionNameObj } from '@/lib/dbConnect'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default async function ServicesSection() {

    const serviceCollection = dbConnect(collectionNameObj.servicesCollection);
    const data = await serviceCollection.find({}).toArray();

    return (
        <div className='w-10/12 mx-auto'>
            <div className=' grid grid-cols-12 gap-8' >
                {
                    data.map(item => {
                        return <div key={item._id} className='col-span-12 md:col-span-6 lg:col-span-4 border border-gray-300 rounded-md p-5 space-y-3 hover:shadow'>
                            <Image src={item.img} className='rounded-md w-full object-cover' width={314} height={200} alt={item.title} />
                            <h3 className='font-bold text-2xl'>{item.title}</h3>
                            <div className='flex justify-between'>
                                <p className='font-semibold text-xl text-warning'>Price: ${item.price}</p>
                                <Link href={`/services/${item._id}`} className='text-warning'><FaArrowRightLong /></Link>
                            </div>

                        </div>
                    })
                }
            </div>
        </div>
    )
}
