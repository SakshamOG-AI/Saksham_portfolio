import { ArrowRight } from "lucide-react";
import { POSITION } from "../data/content";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";

const StatCell = ({ stat, active }) => {
    const val = useCountUp(stat.num, {
        decimals: stat.decimals || 0,
        active,
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

export const Position = () => {
    const [ref, inView] = useInView({ threshold: 0.2 });

    return (
        <section id="positions" data-testid="section-positions">
            <div className="wrap">
                <div className="section-tag">Position of Responsibility</div>
                <h2 className="section-title" style={{ marginBottom: 8 }}>
                    {POSITION.heading.split("—")[0]}
                    <span className="grad-text">
                        {" "}
                        — {POSITION.heading.split("—")[1]?.trim()}
                    </span>
                </h2>
                <p className="section-desc" data-testid="position-context">
                    {POSITION.context}
                </p>
                <div
                    style={{
                        fontSize: 13,
                        color: "rgba(250,250,251,0.5)",
                        marginBottom: 26,
                    }}
                >
                    {POSITION.tenure}
                </div>

                {/* Progression chips */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        flexWrap: "wrap",
                        marginBottom: 28,
                    }}
                    data-testid="position-progression"
                >
                    {POSITION.progression.map((p, i) => {
                        const last = i === POSITION.progression.length - 1;
                        return (
                            <div key={p} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                <span className={`chip ${last ? "active" : ""}`}>{p}</span>
                                {!last && (
                                    <ArrowRight
                                        size={14}
                                        color="rgba(250,250,251,0.4)"
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Stats */}
                <div ref={ref} className="grid-4" data-testid="position-stats">
                    {POSITION.stats.map((s, i) => (
                        <StatCell key={i} stat={s} active={inView} />
                    ))}
                </div>

                {/* Detail card */}
                <div
                    className="card-b"
                    style={{ padding: 28, marginTop: 26 }}
                    data-testid="position-detail-card"
                >
                    <div className="section-tag" style={{ marginBottom: 8 }}>
                        The work
                    </div>
                    <p
                        style={{
                            fontSize: 14.5,
                            color: "rgba(250,250,251,0.82)",
                            lineHeight: 1.7,
                            margin: "0 0 22px",
                        }}
                    >
                        {POSITION.work}
                    </p>

                    <div className="section-tag" style={{ marginBottom: 8 }}>
                        Key achievements
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                        {POSITION.achievements.map((a, i) => (
                            <li
                                key={i}
                                style={{
                                    display: "flex",
                                    gap: 12,
                                    padding: "8px 0",
                                    fontSize: 14,
                                    color: "rgba(250,250,251,0.82)",
                                    lineHeight: 1.6,
                                }}
                            >
                                <span
                                    style={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: "50%",
                                        background: "var(--primary)",
                                        marginTop: 9,
                                        flexShrink: 0,
                                    }}
                                />
                                {a}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
