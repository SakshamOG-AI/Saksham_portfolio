import { useEffect, useRef, useState } from "react";
import { Briefcase, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { COMPANIES, EXPERIENCE_INTRO } from "../data/content";
import { CaseStudy } from "./CaseStudy";

export const Experience = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [openProject, setOpenProject] = useState(null); // { companyId, projectId }
    const carouselRef = useRef(null);
    const active = COMPANIES[activeIdx];

    // Hash-based deep-linking for case studies: #project/{company}/{id}
    useEffect(() => {
        const parseHash = () => {
            const m = window.location.hash.match(/^#project\/([^/]+)\/([^/]+)/);
            if (m) {
                const [, cid, pid] = m;
                const cIdx = COMPANIES.findIndex((c) => c.id === cid);
                if (cIdx !== -1) {
                    const p = COMPANIES[cIdx].projects.find((x) => x.id === pid);
                    if (p) {
                        setActiveIdx(cIdx);
                        setOpenProject({ companyId: cid, projectId: pid });
                        return;
                    }
                }
            }
            setOpenProject(null);
        };
        parseHash();
        window.addEventListener("popstate", parseHash);
        window.addEventListener("hashchange", parseHash);
        return () => {
            window.removeEventListener("popstate", parseHash);
            window.removeEventListener("hashchange", parseHash);
        };
    }, []);

    const openCase = (companyId, projectId) => {
        window.history.pushState(null, "", `#project/${companyId}/${projectId}`);
        setOpenProject({ companyId, projectId });
    };

    const closeCase = () => {
        window.history.pushState(null, "", window.location.pathname + "#experience");
        setOpenProject(null);
    };

    const openProjectData = openProject
        ? {
              company: COMPANIES.find((c) => c.id === openProject.companyId),
              project: COMPANIES.find((c) => c.id === openProject.companyId)?.projects.find(
                  (p) => p.id === openProject.projectId,
              ),
          }
        : null;

    const scrollCarousel = (dir) => {
        const el = carouselRef.current;
        if (!el) return;
        el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: "smooth" });
    };

    return (
        <section id="experience" data-testid="section-experience">
            <div className="wrap">
                <div className="section-tag">Experience</div>
                <h2 className="section-title" style={{ marginBottom: 12 }}>
                    Where I&apos;ve been <span className="grad-text">building</span>
                </h2>
                <p className="section-desc">{EXPERIENCE_INTRO}</p>

                {/* Company tabs */}
                <div
                    style={{
                        fontSize: 11.5,
                        color: "rgba(250,250,251,0.55)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        fontWeight: 700,
                        margin: "6px 0 12px",
                    }}
                >
                    Companies I&apos;ve worked at — tap to switch
                </div>
                <div
                    style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}
                    data-testid="experience-tabs"
                >
                    {COMPANIES.map((c, i) => {
                        const on = i === activeIdx;
                        return (
                            <button
                                key={c.id}
                                onClick={() => setActiveIdx(i)}
                                data-testid={`experience-tab-${c.id}`}
                                className={`chip clickable ${on ? "active" : ""}`}
                                style={{
                                    padding: "8px 16px 8px 8px",
                                    fontSize: 13.5,
                                    fontWeight: 600,
                                    gap: 10,
                                }}
                            >
                                {c.logo ? (
                                    <span
                                        style={{
                                            width: 26,
                                            height: 26,
                                            borderRadius: "50%",
                                            overflow: "hidden",
                                            background: "#fff",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                            border: "1px solid var(--border)",
                                        }}
                                    >
                                        <img
                                            src={c.logo}
                                            alt={`${c.name} logo`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </span>
                                ) : (
                                    <Briefcase size={13} />
                                )}
                                {c.name}
                                <span
                                    style={{
                                        opacity: 0.75,
                                        marginLeft: 4,
                                        fontWeight: 400,
                                        fontSize: 12,
                                    }}
                                >
                                    · {c.dates}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Active company content */}
                <div key={active.id} className="animate-fade-in">
                    <div
                        style={{
                            fontSize: 15,
                            color: "rgba(250,250,251,0.75)",
                            marginBottom: 4,
                            lineHeight: 1.6,
                        }}
                    >
                        {active.line}
                    </div>
                    <div
                        style={{
                            fontFamily: "var(--font-head)",
                            fontWeight: 700,
                            fontSize: 18,
                            marginBottom: 20,
                        }}
                    >
                        {active.role}{" "}
                        <span
                            style={{
                                color: "rgba(250,250,251,0.55)",
                                fontWeight: 500,
                                fontSize: 14,
                            }}
                        >
                            · {active.dates}
                        </span>
                    </div>

                    {/* Skills combined row */}
                    <div style={{ marginBottom: 26 }}>
                        <div
                            style={{
                                fontSize: 11.5,
                                color: "rgba(250,250,251,0.55)",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                fontWeight: 700,
                                marginBottom: 10,
                            }}
                        >
                            Skills &amp; things picked up
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                            {active.skills.map((s) => (
                                <span key={s} className="chip">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Projects header + scroll buttons */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 12,
                        }}
                    >
                        <div
                            style={{
                                fontSize: 11.5,
                                color: "rgba(250,250,251,0.55)",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                fontWeight: 700,
                            }}
                        >
                            Projects — scroll or drag →
                        </div>
                        <div style={{ display: "flex", gap: 8 }}>
                            {[
                                { d: -1, Icon: ChevronLeft, id: "prev" },
                                { d: 1, Icon: ChevronRight, id: "next" },
                            ].map(({ d, Icon, id }) => (
                                <button
                                    key={id}
                                    onClick={() => scrollCarousel(d)}
                                    aria-label={id === "prev" ? "Scroll left" : "Scroll right"}
                                    data-testid={`carousel-${id}`}
                                    style={{
                                        width: 34,
                                        height: 34,
                                        borderRadius: "50%",
                                        background: "rgba(255,255,255,0.05)",
                                        border: "1px solid var(--border)",
                                        color: "var(--foreground)",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Icon size={16} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Carousel */}
                    <div className="carousel" ref={carouselRef} data-testid="experience-carousel">
                        {active.projects.map((p) => (
                            <button
                                key={p.id}
                                onClick={() => openCase(active.id, p.id)}
                                data-testid={`experience-project-${p.id}`}
                                className="carousel-card card-b"
                                style={{
                                    textAlign: "left",
                                    padding: 20,
                                    cursor: "pointer",
                                    color: "inherit",
                                    fontFamily: "inherit",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 10,
                                    minHeight: 260,
                                    transition: "border-color 0.2s, transform 0.2s",
                                    background: "var(--card)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(0,128,255,0.5)";
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "var(--border)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                {/* Gradient tile */}
                                <div
                                    style={{
                                        height: 60,
                                        borderRadius: 8,
                                        background: "var(--grad)",
                                        opacity: 0.85,
                                        marginBottom: 2,
                                    }}
                                />
                                <div
                                    style={{
                                        fontFamily: "var(--font-head)",
                                        fontWeight: 700,
                                        fontSize: 15.5,
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {p.title}
                                </div>
                                <div
                                    style={{
                                        color: "rgba(250,250,251,0.72)",
                                        fontSize: 12.5,
                                        lineHeight: 1.55,
                                        display: "-webkit-box",
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                    }}
                                >
                                    {p.cardCopy}
                                </div>
                                <div
                                    style={{
                                        color: "var(--primary)",
                                        fontFamily: "var(--font-head)",
                                        fontWeight: 800,
                                        fontSize: 14,
                                        marginTop: 4,
                                    }}
                                >
                                    {p.headline}
                                </div>
                                <div
                                    style={{
                                        marginTop: "auto",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                        fontSize: 12,
                                        color: "rgba(250,250,251,0.55)",
                                    }}
                                >
                                    Click to view case study
                                    <ArrowRight size={12} />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {openProjectData?.project && (
                <CaseStudy
                    project={openProjectData.project}
                    company={openProjectData.company}
                    onClose={closeCase}
                />
            )}
        </section>
    );
};
