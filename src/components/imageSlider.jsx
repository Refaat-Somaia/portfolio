import React, { useState, useEffect, useRef } from 'react';
import '../styles/imageSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faDisplay, faVideo } from '@fortawesome/free-solid-svg-icons';

const ImageSlider = ({ images = [], fit = "cover", height, video }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState("fade-in");
    const [classContainer, setClassContainer] = useState("image-container");
    const sliderRef = useRef(null);
    const [isLaptop, setIsLaptop] = useState(fit === "contain");
    const totalImages = images.length;
    const phoneCount = 3;

    const [loadedSrc, setLoadedSrc] = useState(images[0] || "");
    useEffect(() => {
        // Listen for fullscreen changes
        const handleFullscreenChange = () => {
            if (!document.fullscreenElement) {
                // Automatically exit fullscreen mode
                setClassContainer("image-container");
                for (let i = 0; i < phoneCount; i++) {
                    document.getElementsByClassName('arrow left')[i].style.left = "-15%"
                    document.getElementsByClassName('arrow right')[i].style.right = "-15%"
                }
            }

        };

        // Listen for keydown events
        const handleKeyDown = (event) => {
            if (event.key === "Escape" && document.fullscreenElement) {
                document.exitFullscreen().catch((err) => {
                    console.error(`Error exiting fullscreen mode: ${err.message} (${err.name})`);
                });
                setClassContainer("image-container");
                for (let i = 0; i < phoneCount; i++) {
                    document.getElementsByClassName('arrow left')[i].style.left = "-15%"
                    document.getElementsByClassName('arrow right')[i].style.right = "-15%"
                }
            }
        };

        // Add event listeners
        document.addEventListener("fullscreenchange", handleFullscreenChange);
        document.addEventListener("keydown", handleKeyDown);

        // Cleanup event listeners on component unmount
        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    const loadImage = (src = "") =>
        new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = reject;
        });

    useEffect(() => {
        loadImage(images[currentIndex])
            .then(setLoadedSrc)
            .catch(err => console.log("Error loading image:", err));

        loadImage(images[(currentIndex + 1) % totalImages]);
    }, [currentIndex, images]);

    const nextSlide = () => {
        setFadeClass("fade-out");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalImages + 1));
            setFadeClass("fade-in");
        }, 300); // Duration matches CSS transition
    };

    const prevSlide = () => {
        setFadeClass("fade-out");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages : prevIndex - 1));
            setFadeClass("fade-in");
        }, 300);
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            for (let i = 0; i < phoneCount; i++) {
                document.getElementsByClassName('arrow left')[i].style.left = "0%"
                document.getElementsByClassName('arrow right')[i].style.right = "0%"
            }
            setClassContainer("full-container");
            sliderRef.current.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            for (let i = 0; i < phoneCount; i++) {

                document.getElementsByClassName('arrow left')[i].style.left = "-15%"
                document.getElementsByClassName('arrow right')[i].style.right = "-15%"
            }
            document.exitFullscreen();
            setClassContainer('image-container');
        }
    };


    const toggleVideo = () => {
        setCurrentIndex(totalImages);
    };

    return (
        <div className="slider" ref={sliderRef}>
            <button style={{ left: isLaptop ? 0 : "-15%" }} className="arrow left" onClick={prevSlide}>
                <FontAwesomeIcon className='icon' icon={faChevronLeft} />
            </button>
            <div className={classContainer} style={{ height, bottom: isLaptop ? "1rem" : 0 }}>
                {currentIndex === totalImages ? (
                    <video id='vid' style={{ objectFit: fit, height: isLaptop ? "85%" : "100%", top: isLaptop ? "2rem" : 0 }} muted
                        src={video}
                        alt="Slide Video"
                        className={`fade ${fadeClass}`}
                        controls
                        loop
                    />
                ) : (
                    <img style={{ objectFit: fit }}
                        src={loadedSrc}
                        alt={`Slide ${currentIndex + 1}`}
                        className={`fade ${fadeClass}`}
                    />
                )}
            </div>
            <button style={{ right: isLaptop ? 0 : "-15%" }} className="arrow right" onClick={nextSlide}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <button className="fullscreen-button" onClick={toggleFullscreen}>
                <FontAwesomeIcon icon={faDisplay} />
            </button>
            <button className="video-button" onClick={toggleVideo}>
                <FontAwesomeIcon icon={faVideo} />
            </button>
        </div>
    );
};

export default ImageSlider;
