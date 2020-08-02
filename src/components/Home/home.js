import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstSlide from '../../assests/image/carousal/img1.jpg';
import secondSlide from '../../assests/image/carousal/img3.webp';
import thirdSlide from '../../assests/image/carousal/img3.jpg';
import fourthSlide from '../../assests/image/carousal/img4.webp';
import "../Home/home.css";

class Home extends Component {
    render(){ 
        return(
            <div id="home">
                <Carousel controls={false} indicators={false} interval={2500} pause={false}>
                    <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img" 
                        src={secondSlide}
                        alt="First slide"
                    />
                    </Carousel.Item>

                    <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={thirdSlide}
                        alt="Third slide"
                    />
                    </Carousel.Item>

                    <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={fourthSlide}
                        alt="Second slide"
                    />
                    </Carousel.Item>

                    <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={firstSlide}
                        alt="Fourth slide"
                    />
                    </Carousel.Item>

                </Carousel>
            </div>
        );
    }

}


export default Home;