import { BarChart3, Lightbulb, Users, Sparkles } from "lucide-react";
import { ABOUT } from "../data/content";

const ICONS = { BarChart3, Lightbulb, Users, Sparkles };

export const About = () => {
    return (
        <section id="about" data-testid="section-about" style={{ position: "relative" }}>
            <div className="wrap">
                <div className="section-tag" data-testid="about-tag">About Me</div>
                <h2 className="section-title" style={{ marginBottom: 30 }}>
                    A quick <span className="grad-text">introduction</span>
                </h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "260px 1fr",
                        gap: 44,
                        alignItems: "start",
                    }}
                    className="about-grid"
                >
                    {/* Photo column */}
                    <div style={{ position: "relative", justifySelf: "center" }}>
                        {/* Ghibli-purple glow blob */}
                        <div
                            className="glow-blob animate-pulse-soft"
                            style={{ width: 260, height: 260, left: -20, top: -10 }}
                        />
                        <div
                            data-testid="about-photo-placeholder"
                            style={{
                                position: "relative",
                                width: 220,
                                height: 220,
                                borderRadius: "50%",
                                background:
                                    "linear-gradient(135deg, rgba(0,128,255,0.25), rgba(255,47,209,0.25))",
                                border: "1px solid var(--border)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontFamily: "var(--font-head)",
                                fontSize: 56,
                                fontWeight: 800,
                                color: "rgba(255,255,255,0.85)",
                                letterSpacing: "-0.02em",
                                animation: "fade-in 0.9s ease both",
                            }}
                        >
                            SG
                        </div>
                    </div>

                    {/* Bio column */}
                    <div className="glass-card animate-slide-up" data-testid="about-bio-card">
                        {ABOUT.paragraphs.map((p, i) => (
                            <p
                                key={i}
                                style={{
                                    fontSize: 15,
                                    color: "rgba(250,250,251,0.82)",
                                    margin: i === 0 ? "0 0 16px" : "0 0 22px",
                                    lineHeight: 1.7,
                                }}
                            >
                                {p}
                            </p>
                        ))}

                        {/* Traits 2x2 */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: 14,
                                marginBottom: 22,
                            }}
                            className="about-traits"
                        >
                            {ABOUT.traits.map((t, i) => {
                                const Icon = ICONS[t.icon];
                                return (
                                    <div
                                        key={i}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 12,
                                        }}
                                        data-testid={`about-trait-${i}`}
                                    >
                                        <div
                                            style={{
                                                width: 36,
                                                height: 36,
                                                borderRadius: "50%",
                                                background: "rgba(255,255,255,0.05)",
                                                border: "1px solid var(--border)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "var(--primary)",
                                                flexShrink: 0,
                                            }}
                                        >
                                            <Icon size={16} strokeWidth={2} />
                                        </div>
                                        <span
                                            style={{
                                                fontSize: 13.5,
                                                color: "rgba(250,250,251,0.85)",
                                            }}
                                        >
                                            {t.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Pull-quote — magenta left border */}
                        <blockquote
                            data-testid="about-quote"
                            style={{
                                margin: 0,
                                borderLeft: "3px solid var(--accent)",
                                padding: "10px 0 10px 18px",
                                color: "rgba(250,250,251,0.85)",
                                fontStyle: "italic",
                                fontSize: 14.5,
                                lineHeight: 1.55,
                            }}
                        >
                            {ABOUT.quote}
                        </blockquote>
                    </div>
                </div>

                {/* Fact row */}
                <hr className="hairline" style={{ marginTop: 48 }} />
                <div
                    className="grid-4"
                    data-testid="about-facts"
                    style={{ marginTop: 20 }}
                >
                    {ABOUT.facts.map((f, i) => (
                        <div key={i} style={{ padding: "10px 4px" }}>
                            <div
                                style={{
                                    fontFamily: "var(--font-head)",
                                    fontWeight: 800,
                                    fontSize: 15,
                                    marginBottom: 2,
                                }}
                            >
                                {f.top}
                            </div>
                            <div
                                style={{
                                    fontSize: 12.5,
                                    color: "rgba(250,250,251,0.6)",
                                }}
                            >
                                {f.bot}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 680px) {
                    .about-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
                    .about-traits { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
};
