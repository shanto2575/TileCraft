import AllTilesCard from '@/Components/pages/AllTilesCard';
import { getTiles } from '@/lib/api/data'
import React from 'react'


const AllTilesPage =async () => {
    const tiles=await getTiles();
    // console.log(tiles,'all tiles')
    return (
        <div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12  '>
                {
                    tiles.map(tiles=><AllTilesCard key={tiles.id} tiles={tiles}></AllTilesCard>)
                }
            </div>
        </div>
    )
}

export default AllTilesPage