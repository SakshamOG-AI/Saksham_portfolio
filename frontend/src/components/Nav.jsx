import { useEffect, useState } from "react";
import { NAV_SECTIONS, RESUME_URL } from "../data/content";
import { useScrollSpy } from "../hooks/useScrollSpy";

/**
 * Auto-hide-on-scroll behavior:
 *  - Hides the nav when the page scrolls further into content (window scrollY increases)
 *  - Shows the nav when scrolling back toward the top (scrollY decreases)
 *  - Always shows near the very top of the page (< 120px scroll)
 */
export const Nav = () => {
    const active = useScrollSpy(NAV_SECTIONS.map((s) => s.id));
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let lastY = window.scrollY;
        let ticking = false;

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const y = window.scrollY;
                const delta = y - lastY;
                if (y < 120) {
                    setHidden(false);
                } else if (Math.abs(delta) > 6) {
                    // Scrolling down (into content) → hide; scrolling up (back to top) → show
                    setHidden(delta > 0);
                }
                lastY = y;
                ticking = false;
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <nav
            className={`site-nav ${hidden ? "site-nav-hidden" : ""}`}
            data-testid="site-nav"
        >
            <div className="brand" data-testid="nav-brand">
                Saksham<span className="dot">.</span>
            </div>
            <div className="links">
                {NAV_SECTIONS.map((s) => (
                    <button
                        key={s.id}
                        onClick={() => go(s.id)}
                        className={active === s.id ? "active" : ""}
                        data-testid={`nav-link-${s.id}`}
                    >
                        {s.label}
                    </button>
                ))}
                <a
                    className="resume-btn"
                    href={RESUME_URL}
                    download
                    data-testid="nav-resume-btn"
                >
                    Résumé
                </a>
            </div>
        </nav>
    );
};
