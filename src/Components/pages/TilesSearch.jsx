'use client'
import AllTilesCard from '@/Components/pages/AllTilesCard';
import { Button } from '@heroui/react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
const TilesSearch = ({ tiles }) => {
    // console.log(tiles)
    const [search, setsearch] = useState('')
    const filterTiles = tiles.filter(tile => tile.title.toLowerCase().includes(search.toLowerCase()));
    return (
        <div>
            <div className='container mx-auto mt-5 border  w-72 flex items-center justify-between p-1 rounded'>
                <FaSearch />
                <input type='text'
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                    placeholder='Search your Tiles'
                    className='p-1 outline-none ' />
                <Button className=' rounded'>Search</Button>
            </div>
            <h2 className='container mx-auto text-2xl mt-6 font-bold'>All Tiles</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                {filterTiles.length > 0 ? (
                    filterTiles.map(tile => (
                        <AllTilesCard key={tile.id} tiles={tile} />
                    ))
                ) : (
                    <p className="text-center col-span-4 text-xl text-red-500">
                        No tiles found 
                    </p>
                )}
            </div>
        </div>
    )
}

export default TilesSearch
