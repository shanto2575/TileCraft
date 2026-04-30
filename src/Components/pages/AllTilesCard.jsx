import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const AllTilesCard = ({ tiles }) => {
    // console.log(tiles,'title')
    const {id, title, image } = tiles;
    return (
        <div  className='shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:shadow-pink-200 p-5 rounded-2xl bg-slate-100'>
            <div className='relative w-full aspect-square'>
                <Image
                    src={image}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    alt={title}
                    className=' object-cover rounded-2xl'
                />
            </div>
            <h2 className='text-xl font-bold my-3 text-center'>{title}</h2>
            <Link href={`/tile/${id}`}><Button variant='outline' className={'w-full my-3 hover:text-pink-800'}>View Details</Button></Link>
        </div>
    )
}

export default AllTilesCard
