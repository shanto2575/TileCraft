import React from 'react'
import Marquee from 'react-fast-marquee'
const TopTiles = [
    {
        "id": 1, "text": "New Arrivals: Marble Luxe White Tiles"
    },
    {
        "id": 2, "text": "New Arrivals: Ceramic Ocean Blue Collection"
    },
    {
        "id": 3, "text": "Weekly Feature: Modern Geometric Patterns"
    },
    {
        "id": 4, "text": "Weekly Feature: Premium Matte Finish Tiles"
    },
    {
        "id": 5,"text": "Trending: Luxury Bathroom Spa Tiles"
    },
    {
        "id": 6, "text": "Hot Deal: Kitchen Anti-Slip Floor Tiles"
    },
    {
        "id": 7,"text": "Join the Community of TileCraft Designers"
    },
    {
        "id": 8, "text": "Explore Minimalist Interior Tile Designs"
    }
]
const NewArrivals = () => {
    return (
        <div className='flex gap-5 bg-stone-900 text-white my-6 p-2 rounded-2xl'>
            <h2 className='whitespace-nowrap bg-red-500 text-white font-semibold p-2 rounded-xl'>New Arrivals</h2>
            <Marquee>
                {
                    TopTiles.map(tiles=>{
                        return<div key={tiles.id} className='mx-7'>
                            {tiles.text}
                        </div>
                    })
                }
            </Marquee>
        </div>
    )
}

export default NewArrivals