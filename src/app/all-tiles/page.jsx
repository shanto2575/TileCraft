import AllTilesCard from '@/Components/pages/AllTilesCard';
import { getTiles } from '@/lib/api/data'
import { Button } from '@heroui/react';
import React from 'react'
import { FaSearch } from 'react-icons/fa';


const AllTilesPage = async () => {
    const tiles = await getTiles();
    // console.log(tiles,'all tiles')
    return (
        <div>
            <div className='container mx-auto mt-5 border  w-72 flex items-center justify-between p-1 rounded'>
                <FaSearch/>
                <input type='text' placeholder='Search your Tiles' className='p-1 outline-none ' />
                <Button className=' rounded'>Search</Button>
            </div>
            <h2 className='container mx-auto text-2xl mt-6 font-bold'>All Tiles</h2>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12'>
                {
                    tiles.map(tiles => <AllTilesCard key={tiles.id} tiles={tiles}></AllTilesCard>)
                }
            </div>
        </div>
    )
}

export default AllTilesPage