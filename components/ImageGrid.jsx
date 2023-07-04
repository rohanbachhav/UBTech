import Image from 'next/image'
import oneimage from '../images/1_image.jpg'
import twoimage from '../images/2_image.png'
import threeimage from '../images/3_image.png'
import fourimage from '../images/4_image.png'
import fiveimage from '../images/5_image.png'
import siximage from '../images/6_image.png'
import sevenimage from '../images/7_image.png'
import eightimage from '../images/8_image.png'
import nineimage from '../images/9_image.png'
import tenimage from '../images/10_image.png'
import elevenimage from '../images/11_image.png'
import twelveimage from '../images/12_image.png'
import thirteenimage from '../images/13_image.png'
import fourteenimage from '../images/14_image.png'
import fifteenimage from '../images/15_image.png'


export default function ImageGrid() {
    return(
        <div align="center">
            <div className='grid'> 
                <div className='card'> <Image src={ oneimage } alt="product" /> <p className='grid-text'> Plastic Chair and Baskets </p> </div>
                <div className='card'> <Image src={ twoimage } alt="product" /> <p className='grid-text'>Plastic Food Storage Containers </p> </div>  
                <div className='card'> <Image src={ threeimage } alt="product" /> <p className='grid-text'>20 Litre-Water Bottle Cap</p> </div>

                <div className='card'> <Image src={ fourimage } alt="product" /> <p className='grid-text'>Auto Mobile-Parts</p> </div>
                <div className='card'> <Image src={ fiveimage } alt="product" /> <p className='grid-text'>Auto Mobile-Parts 2</p> </div>
                <div className='card'> <Image src={ siximage } alt="product" /> <p className='grid-text'>Auto Mobile-Parts 3</p> </div>

                <div className='card'> <Image src={ sevenimage } alt="product" /> <p className='grid-text'>Caps and Closures</p> </div>
                <div className='card'> <Image src={ eightimage } alt="product" /> <p className='grid-text'> Caps </p> </div>
                <div className='card'> <Image src={ nineimage } alt="product" /> <p className='grid-text'> Cap-Closures </p> </div>

                <div className='card'> <Image src={ tenimage } alt="product" /> <p className='grid-text'>Diffusers</p> </div>
                <div className='card'> <Image src={ elevenimage } alt="product" /> <p className='grid-text'>Electrical-Modular Gag Box 1</p> </div>
                <div className='card'> <Image src={ twelveimage } alt="product" /> <p className='grid-text'> Electrical-Modular Gag Box 2</p> </div>

                <div className='card'> <Image src={ thirteenimage } alt="product" /> <p className='grid-text'>Electrical Products</p> </div>
                <div className='card'> <Image src={ fourteenimage } alt="product" /> <p className='grid-text'> Food Container </p> </div>
                <div className='card'> <Image src={ fifteenimage } alt="product" /> <p className='grid-text'> Food Container 2 </p> </div>

            </div>

            {/* <Image src={ twoimage } alt="product" />
            <Image src={ threeimage } alt="product" /> */}

            {/* <div>
                <Image align="left-justify" src={ fourimage } alt="product" />
                <Image align="center-justify" src={ fiveimage } alt="product" />
                <Image align="right-justify" src={ siximage } alt="product" />
            </div>

            <div>
                <Image align="left-justify" src={ sevenimage } alt="product" />
                <Image align="center-justify" src={ eightimage } alt="product" />
                <Image align="right-justify" src={ nineimage } alt="product" />
            </div>

            <div>
                <Image align="left-justify" src={ tenimage } alt="product" />
                <Image align="center-justify" src={ elevenimage } alt="product" />
                <Image align="right-justify" src={ twelveimage } alt="product" />
            </div>

            <div>
                <Image align="left-justify" src={ thirteenimage } alt="product" />
                <Image align="center-justify" src={ fourteenimage } alt="product" />
                <Image align="right-justify" src={ fifteenimage } alt="product" />
            </div> */}
        </div>
    )
}
