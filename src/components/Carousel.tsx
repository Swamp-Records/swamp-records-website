'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CarouselSlide {
  id: string;
  backgroundImage: string;
  logo?: string;
  title?: string;
  description: string;
  link: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const slideCount = slides.length;

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsTransitioning(true);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${index * 100}vw)`;
    }
  };

  const nextSlide = () => {
    if (currentIndex >= slideCount) return;
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(slideCount);
      setIsTransitioning(false);
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${slideCount * 100}vw)`;
      }
      setTimeout(() => {
        setCurrentIndex(slideCount - 1);
        setIsTransitioning(true);
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${(slideCount - 1) * 100}vw)`;
        }
      }, 20);
    } else {
      goToSlide(currentIndex - 1);
    }
  };

  const handleTransitionEnd = () => {
    if (currentIndex === slideCount) {
      setIsTransitioning(false);
      setCurrentIndex(0);
      if (trackRef.current) {
        trackRef.current.style.transform = 'translateX(0)';
      }
    }
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handlePrevClick = () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  };

  const handleNextClick = () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  };

  useEffect(() => {
    // Clone first slide and append to track
    if (trackRef.current && trackRef.current.children.length > 0) {
      const firstSlide = trackRef.current.children[0];
      const clone = firstSlide.cloneNode(true);
      trackRef.current.appendChild(clone);
    }

    goToSlide(0);
    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, []);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.addEventListener('transitionend', handleTransitionEnd);
      return () => {
        trackRef.current?.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, [currentIndex]);

  return (
    <div
      className="carousel-container fixed inset-0 z-10"
      style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}
    >
      <button
        className="arrow arrow-left"
        aria-label="Previous Slide"
        onClick={handlePrevClick}
        style={{ position: 'absolute', left: 20, top: '50%', zIndex: 20 }}
      >
        &#10094;
      </button>

      <div
        ref={trackRef}
        className="carousel-track"
        style={{
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          width: '100vw',
          height: '100vh',
          display: 'flex',
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="carousel-slide"
            style={{ minWidth: '100vw', height: '100vh', position: 'relative' }}
          >
            <Image
              src={slide.backgroundImage}
              alt={slide.title || slide.id}
              className="carousel-slide-background"
              fill
              sizes="100vw"
              priority={index === 0}
              style={{ objectFit: 'cover' }}
            />
            <div className="carousel-caption" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
              <a href={slide.link}>
                {slide.logo && (
                  <Image
                    src={slide.logo}
                    alt={`${slide.title || slide.id} logo`}
                    className="carousel-logo"
                    width={300}
                    height={150}
                    style={{ objectFit: 'contain' }}
                  />
                )}
                {slide.title && !slide.logo && <h2>{slide.title}</h2>}
                <p>{slide.description}</p>
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        className="arrow arrow-right"
        aria-label="Next Slide"
        onClick={handleNextClick}
        style={{ position: 'absolute', right: 20, top: '50%', zIndex: 20 }}
      >
        &#10095;
      </button>
    </div>
  );
} 