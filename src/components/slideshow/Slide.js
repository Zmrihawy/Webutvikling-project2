import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from '../../media/img/img1.jpg'
import img2 from '../../media/img/img2.jpg'
import img3 from '../../media/img/img3.jpg'
import img4 from '../../media/img/img4.jpg'
import '../../stylesheets/Slide.css'


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    autoplay: false,
    indicators: true,
    arrows: true
}

const text = ['Verdens beste bilde 1',
              'Verdens beste bilde 2',
              'Verdens beste bilde 3',
              'Verdens beste bilde 4']

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={img1} alt="img1" />
                    </div>
                    <div className='each-text'>
                         <h1>{text[0]}</h1>
                    </div>
                </div>
                
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                    </div>
                    <div className='each-text'>
                         <h1>{text[1]}</h1>
                    </div>
                </div>

                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                    </div>
                    <div className='each-text'>
                         <h1>{text[2]}</h1>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img4} alt="img4" />
                    </div>
                    <div className='each-text'>
                         <h1>{text[3]}</h1>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;