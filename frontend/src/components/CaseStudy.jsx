import { useEffect, useState } from "react";
import { X, Link2, Check } from "lucide-react";
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
    const [copied, setCopied] = useState(false);

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

    const copyLink = async () => {
        const url = `${window.location.origin}${window.location.pathname}#project/${company.id}/${project.id}`;
        try {
            await navigator.clipboard.writeText(url);
        } catch {
            // Fallback: create temp textarea
            const t = document.createElement("textarea");
            t.value = url;
            document.body.appendChild(t);
            t.select();
            document.execCommand("copy");
            document.body.removeChild(t);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
    };

    const statCols = Math.min(project.stats.length, 3);

    return (
        <div className="takeover" data-testid="case-study-takeover">
            <div style={{ maxWidth: 900, margin: "0 auto", padding: "70px 24px 100px" }}>
                {/* Header */}
                <div className="case-header">
                    <div className="case-header-text">
                        <div className="section-tag" style={{ marginBottom: 4 }}>
                            {company.name} · Case study
                        </div>
                        <h2
                            style={{
                                fontSize: "clamp(24px, 4vw, 40px)",
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
                    <div className="case-header-actions">
                        <button
                            onClick={copyLink}
                            aria-label="Copy link to this case study"
                            data-testid="case-study-copy-link"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 6,
                                height: 40,
                                padding: "0 14px",
                                borderRadius: 999,
                                background: copied
                                    ? "rgba(0,128,255,0.15)"
                                    : "rgba(255,255,255,0.05)",
                                border: "1px solid",
                                borderColor: copied ? "var(--primary)" : "var(--border)",
                                color: copied ? "var(--primary)" : "var(--foreground)",
                                cursor: "pointer",
                                fontSize: 12.5,
                                fontWeight: 600,
                                fontFamily: "var(--font-body)",
                                transition: "all 0.2s",
                            }}
                        >
                            {copied ? <Check size={14} /> : <Link2 size={14} />}
                            {copied ? "Link copied" : "Copy link"}
                        </button>
                        <button
                            onClick={onClose}
                            aria-label="Close case study"
                            data-testid="case-study-close"
                            style={{
                                width: 40,
                                height: 40,
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
                </div>

                {/* Stats — only render if there are any */}
                {project.stats && project.stats.length > 0 && (
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
                )}

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
                .case-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 28px;
                    gap: 20px;
                }
                .case-header-actions {
                    display: flex;
                    gap: 10px;
                    flex-shrink: 0;
                }
                @media (max-width: 640px) {
                    .case-header {
                        flex-direction: column-reverse;
                        align-items: stretch;
                        gap: 16px;
                    }
                    .case-header-actions {
                        justify-content: flex-end;
                    }
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
