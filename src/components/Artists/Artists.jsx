import React from 'react'
import Heading from '../Shared/Heading'
import ArtistCard from './ArtistCard'

const ArtistsData =[
    {
        id:1,
        img: Img1,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0",
    }
]

const Artists = () => {
  return (
    <div>
        <div className='container'>
            {/* Header Section */}
            <Heading title="Top Rated" subtitle={"Explore The Art"}/>

            {/* Body Section */}
            <ArtistCard ArtistsData={ArtistsData} />
        </div>
    </div>
  )
}

export default Artists