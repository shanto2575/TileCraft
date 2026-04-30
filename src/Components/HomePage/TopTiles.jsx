import { getTiles } from '@/lib/api/data'
import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const TopTiles = async () => {
    const tiles = await getTiles()
    // console.log(tiles,'tiles')
    return (
        <div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12  '>
                {
                    tiles.slice(0, 4).map(tiles => {
                        return <div key={tiles.id} className='shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:shadow-pink-200 p-5 rounded-2xl bg-slate-100'>
                            <div className='relative w-full aspect-square'>
                                <Image
                                    src={tiles.image}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    alt={tiles.title}
                                    className=' object-cover rounded-2xl'
                                />
                            </div>
                            <h2 className='text-xl font-bold my-3 text-center'>{tiles.title}</h2>
                            <Link href={`/tile/${tiles.id}`}><Button variant='outline' className={'w-full my-3 hover:text-pink-800'}>View Details</Button></Link>
                        </div>
                    })
                }
            </div>
            <div className='text-center mt-9'>
                <Link href={'/all-tiles'}><Button className={'rounded'}>More Tiles <FaArrowRight/></Button></Link>
            </div>
        </div>
    )
}

export default TopTiles