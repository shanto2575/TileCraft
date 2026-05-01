import Link from 'next/link';
import { getTiles } from '../../../lib/api/data';
import Image from 'next/image';
import { Button } from '@heroui/react';
import { FaArrowRight } from 'react-icons/fa';

export async function generateMetadata({ params }) {
    const {id}=await params;
    // console.log(params,'metadata')
    const tiles = await getTiles()
    const tile = tiles.find(t => t.id === id)
    return {
        title: tile?.title || 'tiles Details',
        description: tile?.description || 'tiles description',
    };
}

const TilesDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id,'params')
    const tiles = await getTiles();
    // console.log(tiles,'details tiles')
    const tilesDetails = tiles.find(n => n.id === id)
    // console.log(tilesDetails)
    if (!tilesDetails) {
        return (
            <div className="flex justify-center items-center h-[500px] text-2xl font-bold">
                Tile not found
            </div>
        );
    }
    const { title, description, image, category, price, dimensions, material, currency, inStock } = tilesDetails;
    return (
        <div>
            <div className='border shadow-[0_0_25px_rgba(0,0,0,0.15)] rounded-2xl m-4 lg:m-12'>
                <div className='flex flex-col lg:flex-row gap-10 p-5 border'>
                    <div className='relative  lg:w-[700px] lg:h-[700px] aspect-square'>
                        <Image
                            src={image}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            alt={title}
                            className=' object-cover rounded-2xl'
                        />
                    </div>
                    <div className='space-y-5'>
                        <h2 className='text-2xl lg:text-4xl font-bold'>Title : <span className='font-semibold text-green-600'>{title}</span></h2>
                        <p className='text-xl font-bold'>Description : <span className='font-semibold'>{description}</span></p>
                        <p className='text-xl font-bold'>Category : <span className='font-semibold'>{category}</span></p>
                        <p className='text-xl font-bold'>Dimensions : <span className='font-semibold'>{dimensions}</span></p>
                        <p className='text-xl font-bold'>Material : <span className='font-semibold'>{material}</span></p>
                        <p className='text-xl font-bold'>Price : <span className='font-semibold'>{price} {currency}</span></p>
                        <p className='text-xl font-bold'>isStack : <span className='font-semibold'>{`${inStock === true ? 'Available' : 'Not Avilable'}`}</span></p>
                        <div className=' flex items-center  gap-5'>
                            <Link href={''}><Button className={'rounded'}>ADD To Cart</Button></Link>
                            <Link href={'/all-tiles'}><Button className={'rounded'}>Back<FaArrowRight/></Button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TilesDetailsPage