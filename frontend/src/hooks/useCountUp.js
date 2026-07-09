import { useEffect, useRef, useState } from "react";

/**
 * Ease-out count-up. Runs once when `active` flips true.
 * Returns a string with the current value + optional prefix/suffix.
 */
export function useCountUp(target, { duration = 900, decimals = 0, active = true } = {}) {
    const [val, setVal] = useState(0);
    const startedRef = useRef(false);

    useEffect(() => {
        if (!active || startedRef.current) return;
        startedRef.current = true;
        const start = performance.now();
        let raf;

        const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(target * eased);
            if (t < 1) raf = requestAnimationFrame(tick);
            else setVal(target);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [active, target, duration]);

    const formatted = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString("en-US");
    return formatted;
}
