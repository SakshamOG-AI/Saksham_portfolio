import { useEffect, useRef, useState } from "react";

export function useInView({ threshold = 0.2, rootMargin = "0px", once = true } = {}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const el = ref.current;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) obs.disconnect();
                } else if (!once) {
                    setInView(false);
                }
            },
            { threshold, rootMargin },
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold, rootMargin, once]);

    return [ref, inView];
}
