import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { GALLERY_PHOTOS } from "../data/content";

export const Gallery = () => {
    const [lightboxIdx, setLightboxIdx] = useState(null);

    useEffect(() => {
        if (lightboxIdx === null) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (e) => {
            if (e.key === "Escape") setLightboxIdx(null);
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [lightboxIdx]);

    return (
        <section id="gallery" data-testid="section-gallery">
            <div className="wrap">
                <div className="section-tag">Gallery</div>
                <h2 className="section-title" style={{ marginBottom: 8 }}>
                    A few <span className="grad-text">moments</span>
                </h2>
                <p className="section-desc" data-testid="gallery-note">
                    Case competitions, campus events, and a couple of small wins along the way.
                </p>

                <div className="gallery-masonry" data-testid="gallery-grid">
                    {GALLERY_PHOTOS.map((photo, i) => (
                        <button
                            key={photo.src}
                            onClick={() => setLightboxIdx(i)}
                            className="gallery-item"
                            data-testid={`gallery-photo-${i}`}
                            aria-label={`Open photo: ${photo.alt}`}
                            style={{
                                display: "block",
                                width: "100%",
                                padding: 0,
                                border: "1px solid var(--border)",
                                borderRadius: 12,
                                overflow: "hidden",
                                background: "var(--card)",
                                cursor: "pointer",
                                marginBottom: 14,
                                breakInside: "avoid",
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
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                loading="lazy"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                }}
                            />
                        </button>
                    ))}
                </div>
            </div>

            {lightboxIdx !== null && (
                <div
                    role="dialog"
                    aria-modal="true"
                    data-testid="gallery-lightbox"
                    onClick={(e) => e.target === e.currentTarget && setLightboxIdx(null)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.9)",
                        backdropFilter: "blur(6px)",
                        zIndex: 100,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 20,
                        animation: "fade-in 0.25s ease both",
                    }}
                >
                    <button
                        onClick={() => setLightboxIdx(null)}
                        aria-label="Close photo"
                        data-testid="gallery-lightbox-close"
                        style={{
                            position: "fixed",
                            top: 20,
                            right: 20,
                            width: 44,
                            height: 44,
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid var(--border)",
                            color: "var(--foreground)",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 101,
                        }}
                    >
                        <X size={20} />
                    </button>
                    <img
                        src={GALLERY_PHOTOS[lightboxIdx].src}
                        alt={GALLERY_PHOTOS[lightboxIdx].alt}
                        style={{
                            maxWidth: "min(100%, 1200px)",
                            maxHeight: "88vh",
                            width: "auto",
                            height: "auto",
                            objectFit: "contain",
                            display: "block",
                            borderRadius: 8,
                        }}
                    />
                </div>
            )}
        </section>
    );
};
