import { Mail, Download, Linkedin } from "lucide-react";
import { CONTACT, EMAIL, LINKEDIN_URL, RESUME_URL } from "../data/content";

export const Contact = () => {
    return (
        <section id="contact" data-testid="section-contact" style={{ position: "relative" }}>
            <div className="wrap" style={{ maxWidth: 780 }}>
                <div className="section-tag" style={{ textAlign: "center" }}>
                    Get in touch
                </div>
                <h2
                    className="section-title"
                    style={{ marginBottom: 12, textAlign: "center" }}
                >
                    Let&apos;s <span className="grad-text">talk</span>
                </h2>

                <div
                    className="glass-card"
                    style={{ textAlign: "center", padding: "36px 28px" }}
                    data-testid="contact-card"
                >
                    <p
                        style={{
                            fontSize: 14.5,
                            color: "rgba(250,250,251,0.8)",
                            lineHeight: 1.65,
                            margin: "0 auto 26px",
                            maxWidth: 580,
                        }}
                    >
                        {CONTACT.lead}
                    </p>

                    <div
                        style={{
                            display: "flex",
                            gap: 12,
                            justifyContent: "center",
                            flexWrap: "wrap",
                            marginBottom: 30,
                        }}
                    >
                        <a
                            className="btn btn-primary"
                            href={`mailto:${EMAIL}`}
                            data-testid="contact-email-btn"
                        >
                            <Mail size={15} /> Email me
                        </a>
                        <a
                            className="btn btn-ghost"
                            href={RESUME_URL}
                            download="Saksham_Goel_CV.pdf"
                            data-testid="contact-cv-btn"
                        >
                            <Download size={15} /> Download CV
                        </a>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            gap: 10,
                            justifyContent: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <a
                            href={LINKEDIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="contact-linkedin"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "10px 18px",
                                borderRadius: 999,
                                background: "#0a66c2",
                                color: "#fff",
                                fontSize: 13,
                                fontWeight: 600,
                                border: "none",
                                transition: "transform 0.2s, opacity 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-1px)";
                                e.currentTarget.style.opacity = "0.92";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.opacity = "1";
                            }}
                        >
                            <Linkedin size={14} /> LinkedIn
                        </a>
                    </div>
                </div>

                <div
                    style={{
                        textAlign: "center",
                        fontSize: 13,
                        color: "rgba(250,250,251,0.5)",
                        marginTop: 26,
                    }}
                    data-testid="contact-closing"
                >
                    {CONTACT.closing}
                </div>
            </div>
        </section>
    );
};
