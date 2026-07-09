import { Award, Star } from "lucide-react";
import { ACHIEVEMENTS } from "../data/content";

export const Achievements = () => {
    return (
        <section id="achievements" data-testid="section-achievements">
            <div className="wrap">
                <div className="section-tag">Achievements</div>
                <h2 className="section-title" style={{ marginBottom: 8 }}>
                    Where <span className="grad-text">structured thinking</span> got tested
                </h2>
                <p className="section-desc">
                    Case competitions and one academic award — where framing under pressure got
                    checked against real judges.
                </p>

                <div className="grid-4" data-testid="achievements-grid">
                    {ACHIEVEMENTS.map((a, i) => (
                        <div
                            key={i}
                            className="card-b"
                            data-testid={`achievement-card-${i}`}
                            style={{
                                padding: 20,
                                display: "flex",
                                flexDirection: "column",
                                minHeight: 210,
                                position: "relative",
                                transition: "border-color 0.2s, transform 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(0,128,255,0.4)";
                                e.currentTarget.style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "var(--border)";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    marginBottom: 16,
                                }}
                            >
                                <div
                                    style={{
                                        width: 34,
                                        height: 34,
                                        borderRadius: "50%",
                                        background: "rgba(0,128,255,0.12)",
                                        border: "1px solid rgba(0,128,255,0.35)",
                                        color: "var(--primary)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Award size={16} />
                                </div>
                                <span
                                    className="chip"
                                    style={{
                                        background: "rgba(255,47,209,0.1)",
                                        borderColor: "rgba(255,47,209,0.35)",
                                        color: "var(--accent)",
                                        fontWeight: 700,
                                        fontSize: 11.5,
                                    }}
                                >
                                    {a.badge}
                                </span>
                            </div>
                            <div
                                style={{
                                    fontFamily: "var(--font-head)",
                                    fontWeight: 700,
                                    fontSize: 15,
                                    marginBottom: 6,
                                    lineHeight: 1.3,
                                }}
                            >
                                {a.title}
                            </div>
                            <div
                                style={{
                                    fontSize: 12.5,
                                    color: "rgba(250,250,251,0.6)",
                                    lineHeight: 1.55,
                                    marginBottom: "auto",
                                }}
                            >
                                {a.context}
                            </div>
                            {/* 3-star row (decorative — matches Vasu clone) */}
                            <div
                                style={{
                                    display: "flex",
                                    gap: 3,
                                    marginTop: 14,
                                    color: "var(--accent)",
                                }}
                                aria-hidden
                            >
                                {[0, 1, 2].map((s) => (
                                    <Star key={s} size={13} fill="currentColor" strokeWidth={0} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
