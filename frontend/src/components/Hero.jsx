import { ChevronDown } from "lucide-react";
import { HERO_BG } from "../data/content";

export const Hero = () => {
    const go = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            data-testid="section-home"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                padding: "120px 24px 80px",
                textAlign: "center",
            }}
        >
            {/* Real hero photo background — stand-up comedy stage */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${HERO_BG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center 30%",
                    backgroundRepeat: "no-repeat",
                    zIndex: 0,
                    filter: "saturate(1.05)",
                }}
            />
            {/* Dark vignette overlay for text legibility */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(180deg, rgba(9,9,11,.55) 0%, rgba(9,9,11,.55) 40%, rgba(9,9,11,.85) 75%, rgba(9,9,11,1) 100%)",
                    zIndex: 1,
                }}
            />
            {/* Left-side stronger vignette so centered text stays legible over the subject */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(70% 60% at 50% 45%, rgba(9,9,11,0.4) 0%, rgba(9,9,11,0.75) 60%, rgba(9,9,11,0.95) 100%)",
                    zIndex: 1,
                }}
            />
            {/* Subtle color accents */}
            <div
                className="glow-blob animate-pulse-soft"
                style={{
                    width: 320,
                    height: 320,
                    left: "6%",
                    top: "22%",
                    zIndex: 1,
                    background: "var(--primary)",
                    opacity: 0.14,
                }}
            />
            <div
                className="glow-blob animate-pulse-soft"
                style={{
                    width: 280,
                    height: 280,
                    right: "8%",
                    bottom: "18%",
                    zIndex: 1,
                    opacity: 0.18,
                    animationDelay: "1.4s",
                }}
            />

            <div
                className="animate-slide-up"
                style={{ position: "relative", zIndex: 2, maxWidth: 860 }}
            >
                <h1
                    style={{
                        fontSize: "clamp(40px, 7vw, 72px)",
                        fontWeight: 800,
                        lineHeight: 1.05,
                        marginBottom: 22,
                        letterSpacing: "-0.02em",
                    }}
                    data-testid="hero-heading"
                >
                    Hey, I&apos;m{" "}
                    <span className="grad-text">Saksham Goel</span>
                </h1>
                <p
                    style={{
                        fontSize: "clamp(15px, 1.6vw, 18px)",
                        color: "rgba(250,250,251,0.85)",
                        maxWidth: 640,
                        margin: "0 auto 36px",
                        lineHeight: 1.6,
                        textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                    }}
                    data-testid="hero-subtitle"
                >
                    A builder, data-led thinker, and storyteller navigating the
                    intersection of consumer behavior, commerce, and growth.
                </p>
                <button
                    className="btn btn-grad"
                    onClick={go}
                    data-testid="hero-cta"
                >
                    Explore My Journey <ChevronDown size={16} strokeWidth={2.5} />
                </button>
            </div>

            {/* Bouncing scroll cue */}
            <button
                onClick={go}
                aria-label="Scroll down"
                data-testid="hero-scroll-cue"
                style={{
                    position: "absolute",
                    bottom: 28,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                    background: "transparent",
                    border: "none",
                    color: "rgba(250,250,251,0.65)",
                    cursor: "pointer",
                }}
                className="animate-bounce-y"
            >
                <ChevronDown size={28} strokeWidth={2} />
            </button>
        </section>
    );
};
