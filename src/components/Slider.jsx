import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import "../styles/Slider.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faDisplay } from '@fortawesome/free-solid-svg-icons';

const Slider = ({ color, vid, className, children, autoSlideInterval = 1000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = React.Children.count(children) + (vid ? 1 : 0);
    const sliderRef = useRef(null);

    const handleSwipe = (direction) => {
        setCurrentIndex((prevIndex) => {
            if (direction === "LEFT") {
                return (prevIndex + 1) % totalItems;
            }
            if (direction === "RIGHT") {
                return (prevIndex - 1 + totalItems) % totalItems;
            }
            return prevIndex;
        });
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("LEFT"),
        onSwipedRight: () => handleSwipe("RIGHT"),
    });

    const toggleFullscreen = () => {

    };


    const renderItems = React.useMemo(() => {
        return React.Children.map(children, (child, index) => (
            <div className="slider-item" key={index}>
                <img src={child} alt="" loading="lazy" />
            </div>
        ));
    }, [children]);

    return (
        <div className="container-slider">
            <div
                ref={sliderRef}
                {...swipeHandlers}
                className={className}
            >
                <div
                    className="slider-track"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {renderItems}
                    {vid && (
                        <video muted src={vid} controls />
                    )}
                </div>
                {/* <button onClick={toggleFullscreen} className="fullscreen-button">
                <FontAwesomeIcon icon={faDisplay} />
            </button> */}


            </div>
            <div className={className == "slider-mobile" ? "controls" : "lap-controls"}>
                <button style={{ color: color }} onClick={() => handleSwipe("RIGHT")}>
                    <FontAwesomeIcon className="icon" icon={faArrowLeft} />
                </button>
                <button style={{ color: color }} onClick={() => handleSwipe("LEFT")}>
                    <FontAwesomeIcon className="icon" icon={faArrowRight} />
                </button>
            </div>
            <div className="dots">
                {Array.from({ length: totalItems }).map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    >
                        {index === currentIndex && <div style={{ backgroundColor: color }} className="progress"></div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
