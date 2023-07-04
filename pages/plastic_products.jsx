import React from 'react'
import Image from 'next/image'
import ImageGrid from '@/components/ImageGrid'

const plastic_products = () => {
  return (<div>
    <div>
      <p> <b>
        UBTech`&apos` Temperature controller systems useful for house hold products,
         engineering plastic, pharma industry, auto mobile & electrical
          plastic industry product injection moulds.
      </b> </p>
      <br/>
    </div>

    <div>
      <ImageGrid />
      {/* <Image src={ oneimage } alt="Product" /> */}
      
    </div>
  </div>
  )
}

export default plastic_products