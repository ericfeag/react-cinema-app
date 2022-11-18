import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Slideshow = (props) => {
    const { images, auto } = props;
    const [states, setState] = useState({
        slideshow: images[0],
        slideIndex: 0
    });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sliderInterval, setSliderInterval] = useState(0);
 
    const { slideShow, slideIndex} = state;
    const currentSlideIndex = 0;

    useEffect(() =>{
        setState({
            ...state,
            slideIndex: 0,
            slideShow: images[0]
        })
        if(auto) {
        const timeInterval = setInterval(() =>{
            autoMoveSlide();
        }, 5000);
        setSliderInterval(timeInterval);
        return () => {
            clearInterval(timeInterval);
            clearInterval(sliderInterval);
        };
        };
    }, [images]);

    const autoMoveSlide = ()  => {
        let lastIndex = 0;
        lastIndex = currentSlideIndex + 1;
        currentSlideIndex = lastIndex  >= images.length ? 0 : lastIndex;
        setState((prev) =>({
            ...prev,
            slideIndex: currentSlideIndex,
            slideShow: images[currentSlideIndex]
        }));
    };

    const moveSlideWithArrows = (type) => {
        let index = currentSlideIndex;
        if(type === 'prev') {
            if (currentSlideIndex <=0) {
                index = images.length -1;
            } else {
                index -=1;
            }
        }
        setCurrentIndex(index);
        setState((prev) =>({
            ...prev,
            slideShow: images [index],
            slideIndex: index
        }));
    };

    const RenderArrows =  () =>{
        return(
            <div className='slider-arrows'>
                <div className='slider-arrow slider-arrow--left' onClick={() => moveSlideWithArrows('prep')} />
                <div className='slider-arrow slider-arrow--right' onClick={() => moveSlideWithArrows('next')} />
            </div>
            
        )
    }

    const Indicators = (props) =>{
        const { currentSlide } = props;
        const listIndicators = images.map((slide, i) =>{
            const butnClasses = i === currentSlide ? 'slider-navButton slider-navButton-active' : 'slider-navButton'
            return <button className={butnClasses} key={i} />;
        });
        return <div className='slider-nav'>{listIndicators}</div>
    }
        return (
            <div className='slider-nav'>
                <button className='slider-navButton' />
            </div>
        )
    }


  return (
    <>
    <div className='slider'>
        <div className='slider-slides'>
            <div className='slider-image'
                style={{backgroundImage:`url()`}}
            ></div>
        </div>
        <Indicators currentSlide={4} />
        {!auto ? <RenderArrows />: null}
    </div>
    </>
  );
Slideshow.PropTypes = {
    images: PropTypes.array.isRequired,
    auto: PropTypes.bool.isRequired,
    showArrows: PropTypes.bool.isRequired,
    currentSlide: PropTypes.number
}

export default Slideshow