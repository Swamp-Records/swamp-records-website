'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
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
  const currentIndexRef = useRef(0);
  const movingRef = useRef(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const wrapTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const slideCount = slides.length;

  const goToSlide = useCallback((index: number) => {
    currentIndexRef.current = index;
    setIsTransitioning(true);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${index * 100}vw)`;
    }
  }, []);

  const nextSlide = useCallback(() => {
    if (movingRef.current || slideCount < 2) return;
    movingRef.current = true;
    goToSlide(currentIndexRef.current + 1);
  }, [goToSlide, slideCount]);

  const prevSlide = useCallback(() => {
    if (movingRef.current || slideCount < 2) return;
    movingRef.current = true;
    if (currentIndexRef.current <= 0) {
      currentIndexRef.current = slideCount;
      setIsTransitioning(false);
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${slideCount * 100}vw)`;
      }
      wrapTimeoutRef.current = setTimeout(() => {
        wrapTimeoutRef.current = undefined;
        goToSlide(slideCount - 1);
      }, 20);
    } else {
      goToSlide(currentIndexRef.current - 1);
    }
  }, [goToSlide, slideCount]);

  const handleTransitionEnd = useCallback((event: TransitionEvent) => {
    if (event.target !== trackRef.current || event.propertyName !== 'transform') return;
    movingRef.current = false;
    if (currentIndexRef.current === slideCount) {
      setIsTransitioning(false);
      currentIndexRef.current = 0;
      if (trackRef.current) {
        trackRef.current.style.transform = 'translateX(0)';
      }
    }
  }, [slideCount]);

  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current !== undefined) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  }, []);

  const startAutoSlide = useCallback(() => {
    stopAutoSlide();
    if (slideCount < 2) return;
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
  }, [nextSlide, slideCount, stopAutoSlide]);

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
    const track = trackRef.current;
    let clone: Node | undefined;

    if (track && track.children.length > 0) {
      const firstSlide = track.children[0];
      clone = firstSlide.cloneNode(true);
      track.appendChild(clone);
    }

    movingRef.current = false;
    goToSlide(0);
    startAutoSlide();

    return () => {
      stopAutoSlide();
      if (wrapTimeoutRef.current !== undefined) {
        clearTimeout(wrapTimeoutRef.current);
        wrapTimeoutRef.current = undefined;
      }
      if (clone?.parentNode === track) {
        track?.removeChild(clone);
      }
      movingRef.current = false;
    };
  }, [goToSlide, startAutoSlide, stopAutoSlide]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return undefined;
    }

    track.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      track.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [handleTransitionEnd]);

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
                    style={{
                      objectFit: 'contain',
                      transform: slide.id === 'alex-willow' ? 'scale(0.9)' : undefined,
                    }}
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
