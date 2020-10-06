import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function ImageCarousel() {
  return(
    <div className='carousel-section'>
      <h1 className='carousel-title'>So Many Plants!</h1>
      <Carousel className='carousel-container' controls={false}>
        <Carousel.Item>
          <Image className='carousel-img' alt='Beautiful Plants' src='https://www.gardeningknowhow.com/wp-content/uploads/2009/08/fuchsia-1.jpg' />
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carousel-img' alt='So Many Plants' src='https://www.gilmour.com/wp-content/uploads/2018/03/hydrangea-care.jpg' />
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carousel-img' alt='' src='https://gardenerspath.com/wp-content/uploads/2020/01/Purple-Hellebores-in-the-Garden.jpg' />
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carousel-img' src='https://okanaganxeriscape.org/static/images/plant/resized/P1190264_700x700.jpg' />
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carousel-img' src='https://cdn.britannica.com/31/137431-050-6470C3A9/spirea-flower-Japanese-plant-shrub-much-Canada.jpg' />
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carousel-img' src='https://www.gardeningknowhow.com/wp-content/uploads/2013/07/sedum.jpg' />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default ImageCarousel;