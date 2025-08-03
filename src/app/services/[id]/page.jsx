import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

export default async function ServiceDetails({ params }) {
    const p = await params;
    console.log(p.id);
    const serviceCollection = dbConnect(collectionNameObj.servicesCollection);
    const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) });
    return (
        <div className='w-10/12 mx-auto'>
            <section className='flex justify-center'>
                <figure className='relative w-full'>
                    <Image src={"/assets/images/checkout/checkout.png"} width={1200} height={600} alt={"banner"} className='w-full brightness-75'></Image>
                    <div className='transparent-layer absolute w-full h-full border border-red-400 top-0'>
                        <div className='w-full h-full flex items-center'>
                            <h1 className='font-bold text-3xl text-white pl-3 md:pl-7 lg:pl-10'>
                                Service details
                            </h1>
                        </div>
                    </div>
                </figure>
            </section>
            <section>
                <Image src={data.img} width={500} height={500} alt={data.title}></Image>
            </section>
            
        </div>
    )
}
