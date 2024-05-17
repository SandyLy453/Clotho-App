import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CarouselSlider() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 430 },
          items: 6
        },
        mobile: {
          breakpoint: { max: 430, min: 0 },
          items: 4
        }
      }

      return(
        <>
            <div>
                <Carousel responsive={responsive}>
                        <div>Item 1</div>
                </Carousel>
            </div>
        </>
      )
}