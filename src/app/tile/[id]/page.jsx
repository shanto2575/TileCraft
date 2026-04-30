import { getTiles } from '@/lib/api/data';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react'

const TilesDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id,'params')
    const tiles = await getTiles();
    // console.log(tiles,'details tiles')
    const tilesDetails = tiles.find(n => n.id === id)
    // console.log(tilesDetails)
    const { title, description, image, category, price, dimensions, material, currency, inStock } = tilesDetails;
    return (
        <div>
            <div className='border shadow-[0_0_25px_rgba(0,0,0,0.15)] rounded-2xl m-12'>
                <div className='flex gap-10 p-5 border'>
                    <div className='relative w-[700px] h-[700px] aspect-square'>
                        <Image
                            src={image}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            alt={title}
                            className=' object-cover rounded-2xl'
                        />
                    </div>
                    <div className='space-y-5'>
                        <h2 className='text-4xl font-bold'>Title : <span className='font-semibold text-green-600'>{title}</span></h2>
                        <p className='text-xl font-bold'>Description : <span className='font-semibold'>{description}</span></p>
                        <p className='text-xl font-bold'>Category : <span className='font-semibold'>{category}</span></p>
                        <p className='text-xl font-bold'>Dimensions : <span className='font-semibold'>{dimensions}</span></p>
                        <p className='text-xl font-bold'>Material : <span className='font-semibold'>{material}</span></p>
                        <p className='text-xl font-bold'>Price : <span className='font-semibold'>{price} {currency}</span></p>
                        <p className='text-xl font-bold'>isStack : <span className='font-semibold'>{`${inStock === true ? 'Available' : 'Not Avilable'}`}</span></p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TilesDetailsPage