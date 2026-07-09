import { useEffect, useState } from "react";

/**
 * Watches the given section IDs and returns the ID of whichever is
 * currently the "most in view" — closest to the top-third of the viewport.
 */
export function useScrollSpy(ids) {
    const [active, setActive] = useState(ids[0]);

    useEffect(() => {
        const handler = () => {
            const bandTop = window.innerHeight * 0.35;
            let best = { id: ids[0], dist: Infinity };
            for (const id of ids) {
                const el = document.getElementById(id);
                if (!el) continue;
                const r = el.getBoundingClientRect();
                // pick the section whose top is closest to bandTop while still <= bandTop
                const dist = r.top <= bandTop ? bandTop - r.top : r.top - bandTop + 10000;
                if (dist < best.dist) best = { id, dist };
            }
            setActive((prev) => (prev === best.id ? prev : best.id));
        };
        handler();
        window.addEventListener("scroll", handler, { passive: true });
        window.addEventListener("resize", handler);
        return () => {
            window.removeEventListener("scroll", handler);
            window.removeEventListener("resize", handler);
        };
    }, [ids]);

    return active;
}
