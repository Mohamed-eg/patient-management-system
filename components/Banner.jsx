import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <div>
        <div>
            <Image
            alt='img'
            height={1000}
            width={1000}
            src='/assets/contact/medicalBG.png'
            className='w-full h-[50vh]'/>
        </div>

    </div>
  )
}

export default Banner