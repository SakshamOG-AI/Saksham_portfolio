import { useState } from "react";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import { PROJECTS } from "../data/content";

export const Projects = () => {
    const [openId, setOpenId] = useState(null);
    const open = PROJECTS.find((p) => p.id === openId);

    return (
        <section id="projects" data-testid="section-projects">
            <div className="wrap">
                <div className="section-tag">Personal Projects</div>
                <h2 className="section-title" style={{ marginBottom: 8 }}>
                    Independent <span className="grad-text">builds</span>
                </h2>
                <p className="section-desc">
                    Self-initiated projects — one aimed at a fintech problem I found genuinely
                    interesting, one built cold for a company before ever emailing them.
                </p>

                <div className="grid-2" data-testid="projects-grid">
                    {PROJECTS.map((p) => (
                        <button
                            key={p.id}
                            className="card-b"
                            onClick={() => setOpenId(p.id)}
                            data-testid={`project-card-${p.id}`}
                            style={{
                                textAlign: "left",
                                padding: 0,
                                cursor: "pointer",
                                color: "inherit",
                                overflow: "hidden",
                                fontFamily: "inherit",
                                transition: "border-color 0.2s, transform 0.2s",
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
                            {/* Gradient tile with wordmark */}
                            <div
                                style={{
                                    height: 140,
                                    background: "var(--grad)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                }}
                            >
                                <div
                                    style={{
                                        background: "#fff",
                                        color: "#0b0b12",
                                        padding: "10px 18px",
                                        borderRadius: 999,
                                        fontFamily: "var(--font-head)",
                                        fontWeight: 800,
                                        fontSize: 15,
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    {p.wordmark}
                                </div>
                            </div>
                            <div style={{ padding: 22 }}>
                                <div
                                    style={{
                                        fontSize: 11.5,
                                        color: "var(--primary)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.08em",
                                        fontWeight: 700,
                                        marginBottom: 8,
                                    }}
                                >
                                    {p.category}
                                </div>
                                <div
                                    style={{
                                        fontFamily: "var(--font-head)",
                                        fontWeight: 700,
                                        fontSize: 18,
                                        marginBottom: 8,
                                    }}
                                >
                                    {p.title}
                                </div>
                                <p
                                    style={{
                                        fontSize: 13.5,
                                        color: "rgba(250,250,251,0.7)",
                                        margin: "0 0 14px",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {p.blurb}
                                </p>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                        fontSize: 12,
                                        color: "rgba(250,250,251,0.55)",
                                    }}
                                >
                                    Click to view details
                                    <ArrowRight size={12} />
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {open && (
                <div
                    role="dialog"
                    aria-modal="true"
                    data-testid="project-modal"
                    onClick={(e) => e.target === e.currentTarget && setOpenId(null)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.65)",
                        backdropFilter: "blur(6px)",
                        zIndex: 90,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 20,
                        animation: "fade-in 0.25s ease both",
                    }}
                >
                    <div
                        style={{
                            background: "#111114",
                            border: "1px solid var(--border)",
                            borderRadius: 16,
                            padding: 32,
                            maxWidth: 640,
                            width: "100%",
                            maxHeight: "90vh",
                            overflowY: "auto",
                            position: "relative",
                            animation: "slide-up 0.35s cubic-bezier(0.16,1,0.3,1) both",
                        }}
                    >
                        <button
                            onClick={() => setOpenId(null)}
                            aria-label="Close"
                            data-testid="project-modal-close"
                            style={{
                                position: "absolute",
                                top: 16,
                                right: 16,
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
                            <X size={16} />
                        </button>

                        <div
                            style={{
                                fontSize: 11.5,
                                color: "var(--primary)",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                fontWeight: 700,
                                marginBottom: 8,
                            }}
                        >
                            {open.category}
                        </div>
                        <h3
                            style={{
                                fontFamily: "var(--font-head)",
                                fontWeight: 800,
                                fontSize: 24,
                                marginBottom: 18,
                                letterSpacing: "-0.01em",
                            }}
                        >
                            {open.title}
                        </h3>

                        <ModalBlock label="Problem" body={open.problem} />
                        <ModalBlock label="Approach" body={open.approach} />

                        <div className="section-tag" style={{ marginTop: 20, marginBottom: 10 }}>
                            Stack
                        </div>
                        <div
                            style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}
                        >
                            {open.stack.map((s) => (
                                <span key={s} className="chip">
                                    {s}
                                </span>
                            ))}
                        </div>

                        <a
                            className="btn btn-primary"
                            href={open.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="project-live-link"
                        >
                            View Live Project <ExternalLink size={14} />
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
};

const ModalBlock = ({ label, body }) => (
    <div style={{ marginBottom: 18 }}>
        <div className="section-tag" style={{ marginBottom: 6 }}>
            {label}
        </div>
        <p
            style={{
                fontSize: 14,
                color: "rgba(250,250,251,0.82)",
                lineHeight: 1.7,
                margin: 0,
            }}
        >
            {body}
        </p>
    </div>
);
