import { useEffect, useRef, useState } from 'react';

export type AnimationDirection = 'up' | 'down' | 'left' | 'right';

interface InViewOptions {
    threshold?: number;
    distance?: number; // in px
    triggerOnce?: boolean;
}

/**
 * Reusable scroll-trigger animation hook using IntersectionObserver.
 */
export function useInViewAnimation(
    direction: AnimationDirection = 'up',
    options: InViewOptions = {}
) {
    const {
        threshold = 0.3,
        distance = 100, // default 40px movement
        triggerOnce = true,
    } = options;

    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce && ref.current) observer.unobserve(ref.current);
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current && !triggerOnce) observer.unobserve(ref.current);
        };
    }, [threshold, triggerOnce]);

    const translate =
        direction === 'up'
            ? `translateY(${distance}px)`
            : direction === 'down'
            ? `translateY(-${distance}px)`
            : direction === 'left'
            ? `translateX(${distance}px)`
            : `translateX(-${distance}px)`; // right

    const style = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : translate,
        transition: 'all 700ms ease-out',
    };

    return { ref, style, isVisible };
}