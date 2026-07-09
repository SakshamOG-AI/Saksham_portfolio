import { useEffect } from "react";
import { X } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";
import { DynamicFiltersDemo } from "./DynamicFiltersDemo";

const StatCell = ({ stat, active }) => {
    const val = useCountUp(stat.num, {
        decimals: stat.decimals || 0,
        active,
        duration: 900,
    });
    return (
        <div className="stat-card">
            <span className="num">
                {stat.prefix || ""}
                {val}
                {stat.suffix || ""}
            </span>
            <div className="lbl">{stat.lbl}</div>
        </div>
    );
};

export const CaseStudy = ({ project, company, onClose }) => {
    const [ref, inView] = useInView({ threshold: 0.1 });

    // Lock body scroll while open
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, []);

    // Close on Escape
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    const statCols = Math.min(project.stats.length, 3);

    return (
        <div className="takeover" data-testid="case-study-takeover">
            <div style={{ maxWidth: 900, margin: "0 auto", padding: "70px 24px 100px" }}>
                {/* Header */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 28,
                        gap: 20,
                    }}
                >
                    <div>
                        <div className="section-tag" style={{ marginBottom: 4 }}>
                            {company.name} · Case study
                        </div>
                        <h2
                            style={{
                                fontSize: "clamp(28px, 4vw, 40px)",
                                lineHeight: 1.15,
                                letterSpacing: "-0.02em",
                            }}
                            data-testid="case-study-title"
                        >
                            {project.title}
                        </h2>
                        <div
                            style={{
                                color: "var(--primary)",
                                fontFamily: "var(--font-head)",
                                fontWeight: 800,
                                marginTop: 8,
                                fontSize: 16,
                            }}
                        >
                            {project.headline}
                        </div>
                        {project.cardCopy && (
                            <p
                                style={{
                                    color: "rgba(250,250,251,0.7)",
                                    fontSize: 14.5,
                                    lineHeight: 1.6,
                                    margin: "12px 0 0",
                                    maxWidth: 640,
                                }}
                            >
                                {project.cardCopy}
                            </p>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Close case study"
                        data-testid="case-study-close"
                        style={{
                            width: 42,
                            height: 42,
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid var(--border)",
                            color: "var(--foreground)",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                        }}
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Stats */}
                <div
                    ref={ref}
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${statCols}, 1fr)`,
                        gap: 14,
                        marginBottom: 34,
                    }}
                    className="case-stats"
                    data-testid="case-study-stats"
                >
                    {project.stats.map((s, i) => (
                        <StatCell key={i} stat={s} active={inView} />
                    ))}
                </div>

                {/* Prose blocks — Problem / Solution / Metrics improved / Numbers that moved the most */}
                <div style={{ display: "grid", gap: 20 }}>
                    <Block label="Problem" body={project.problem} />
                    <Block label="Solution" body={project.solution} />
                    <Block label="Metrics improved" body={project.metrics} />
                    <Block
                        label="Numbers that moved the most"
                        body={project.numbers}
                        highlight
                    />
                </div>

                {/* Live demo — only for Dynamic Filters */}
                {project.hasDemo ? (
                    <div style={{ marginTop: 30 }}>
                        <div className="section-tag" style={{ marginBottom: 10 }}>
                            Live demo
                        </div>
                        <DynamicFiltersDemo />
                    </div>
                ) : null}
            </div>

            <style>{`
                @media (max-width: 640px) {
                    .case-stats { grid-template-columns: 1fr 1fr !important; }
                }
                @media (max-width: 420px) {
                    .case-stats { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    );
};

const Block = ({ label, body, highlight }) => (
    <div
        className="card-b"
        style={{
            padding: 22,
            borderColor: highlight ? "rgba(0,128,255,0.35)" : "var(--border)",
            background: highlight ? "rgba(0,128,255,0.04)" : "var(--card)",
        }}
    >
        <div
            style={{
                fontSize: 11.5,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: highlight ? "var(--primary)" : "var(--primary)",
                fontWeight: 700,
                marginBottom: 10,
            }}
        >
            {label}
        </div>
        <div style={{ fontSize: 14.5, color: "rgba(250,250,251,0.86)", lineHeight: 1.75 }}>
            {body}
        </div>
    </div>
);
