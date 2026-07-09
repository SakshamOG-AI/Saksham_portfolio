import { Image as ImageIcon } from "lucide-react";

export const Gallery = () => {
    return (
        <section id="gallery" data-testid="section-gallery">
            <div className="wrap">
                <div className="section-tag">Gallery</div>
                <h2 className="section-title" style={{ marginBottom: 8 }}>
                    A few <span className="grad-text">moments</span>
                </h2>
                <p className="section-desc" data-testid="gallery-note">
                    Placeholder stub — nav item and layout are wired up, real photos to be
                    dropped in once supplied.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: 12,
                    }}
                    className="gallery-grid"
                    data-testid="gallery-grid"
                >
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <div
                            key={i}
                            data-testid={`gallery-tile-${i}`}
                            style={{
                                aspectRatio: "1 / 1",
                                border: "1px dashed var(--border)",
                                borderRadius: 10,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "rgba(250,250,251,0.35)",
                                fontSize: 11.5,
                                textAlign: "center",
                                padding: 8,
                                gap: 6,
                            }}
                        >
                            <ImageIcon size={20} />
                            photo coming soon
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 760px) { .gallery-grid { grid-template-columns: repeat(3, 1fr) !important; } }
                @media (max-width: 480px) { .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            `}</style>
        </section>
    );
};
