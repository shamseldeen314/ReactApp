import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../Images/111.png'
import Image2 from '../Images/2.jpg'
import Image3 from '../Images/3.jpg'
import './Carousel.css'
function CarouselImage() {

    return (
        <Carousel >
            <Carousel.Item className='row'>

                <Carousel.Caption className='col-lg-4'>
                    <div className="titel_header d-none d-lg-block animated fadeInLeft faster ">
                        <div className="row">
                            <div
                                className="col-lg-12 vv d-none d-sm-block">
                            </div>
                            <div className="col-lg-12">
                                <h5
                                    className=" animated fadeInLeft fast delay-1s">
                                    THE NEW STANDARD</h5>
                                <h1
                                    className=" animated fadeInLeft slow delay-1s">
                                    SMARTWATCHES...</h1>
                                <h2
                                    className=" animated fadeInLeft slower delay-1s ">
                                    40% OFF
                                </h2>
                                <input className=" animated fadeInLeft slower  delay-2s"
                                    type="button"
                                    value="shop now" />

                            </div>

                        </div>
                    </div>
                </Carousel.Caption>

                <img src={Image1} className="animated fadeInLeft slow delay-1s col-lg-8" alt="..." />


            </Carousel.Item>
            <Carousel.Item>
                <div>
                    <img
                        className="d-block w-100 carousal_images"
                        src={Image2}
                        alt="Second slide"
                    />
                </div>



            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousal_images"
                    src={Image3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselImage;