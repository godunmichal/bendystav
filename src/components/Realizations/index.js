import React from 'react'
import ImageGallery from 'react-image-gallery';
import { GalleryContainer, RealizationsContainer, RealizationsTitle} from './RealizationsElements'
import "react-image-gallery/styles/css/image-gallery.css";
import bathroom_small from '../../images/bathroom-small.jpg'
import bathroom from '../../images/bathroom.jpg'
import toilet_small from '../../images/toilet-small.jpg'
import toilet from '../../images/toilet.jpg'
import shower_small from '../../images/shower-small.jpg'
import shower from '../../images/shower.jpg'

function Realizations() {
    const images = [
        {
          original: `${bathroom}`,
          thumbnail: `${bathroom_small}`,
        },
        {
          original: `${toilet}`,
          thumbnail: `${toilet_small}`,
        },
        {
          original:`${shower}`,
          thumbnail: `${shower_small}`,
        }
      ]
    return (
        <RealizationsContainer id='realizations'>
            <RealizationsTitle>Realizace</RealizationsTitle>
            <GalleryContainer>
            <ImageGallery items={images} showIndex={true}/>
           </GalleryContainer>
        </RealizationsContainer>
    )
}

export default Realizations
