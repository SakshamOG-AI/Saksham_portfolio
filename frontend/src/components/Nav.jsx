import { NAV_SECTIONS, RESUME_URL } from "../data/content";
import { useScrollSpy } from "../hooks/useScrollSpy";

export const Nav = () => {
    const active = useScrollSpy(NAV_SECTIONS.map((s) => s.id));

    const go = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <nav className="site-nav" data-testid="site-nav">
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
