import { useMemo, useState } from "react";

/**
 * Live Dynamic Filters demo — Static (old) vs Dynamic (shipped).
 * Hardcoded inventory with deliberate gaps so an "impossible" combination
 * (e.g. Red + XL + <500) yields zero results on Static, and is gracefully
 * pruned on Dynamic.
 */

const INVENTORY = [
    { id: 1, name: "Everyday Tee",    color: "Black", size: "M",  price: 399 },
    { id: 2, name: "Everyday Tee",    color: "Black", size: "L",  price: 399 },
    { id: 3, name: "Everyday Tee",    color: "White", size: "S",  price: 449 },
    { id: 4, name: "Everyday Tee",    color: "White", size: "M",  price: 449 },
    { id: 5, name: "Everyday Tee",    color: "White", size: "L",  price: 449 },
    { id: 6, name: "Oversized Tee",   color: "Black", size: "L",  price: 799 },
    { id: 7, name: "Oversized Tee",   color: "Black", size: "XL", price: 799 },
    { id: 8, name: "Oversized Tee",   color: "Blue",  size: "M",  price: 749 },
    { id: 9, name: "Oversized Tee",   color: "Blue",  size: "L",  price: 749 },
    { id: 10, name: "Graphic Hoodie", color: "Black", size: "M",  price: 1499 },
    { id: 11, name: "Graphic Hoodie", color: "Black", size: "L",  price: 1499 },
    { id: 12, name: "Graphic Hoodie", color: "Red",   size: "L",  price: 1699 },
    { id: 13, name: "Graphic Hoodie", color: "Red",   size: "XL", price: 1699 },
    { id: 14, name: "Cargo Pants",    color: "Black", size: "M",  price: 1299 },
    { id: 15, name: "Cargo Pants",    color: "Black", size: "L",  price: 1299 },
    { id: 16, name: "Cargo Pants",    color: "Blue",  size: "L",  price: 1349 },
];

const COLORS = ["Black", "White", "Blue", "Red"];
const SIZES = ["S", "M", "L", "XL"];
const PRICE_BUCKETS = [
    { key: "under500", label: "Under ₹500", test: (p) => p < 500 },
    { key: "500to1000", label: "₹500–1000", test: (p) => p >= 500 && p <= 1000 },
    { key: "over1000", label: "Over ₹1000", test: (p) => p > 1000 },
];

const matchesFilters = (item, f) => {
    if (f.colors.length && !f.colors.includes(item.color)) return false;
    if (f.sizes.length && !f.sizes.includes(item.size)) return false;
    if (f.prices.length) {
        const bucketOk = f.prices.some((k) => {
            const b = PRICE_BUCKETS.find((x) => x.key === k);
            return b && b.test(item.price);
        });
        if (!bucketOk) return false;
    }
    return true;
};

export const DynamicFiltersDemo = () => {
    const [mode, setMode] = useState("static");
    const [filters, setFilters] = useState({ colors: [], sizes: [], prices: [] });

    const toggle = (bucket, value) => {
        setFilters((prev) => {
            const cur = prev[bucket];
            return {
                ...prev,
                [bucket]: cur.includes(value)
                    ? cur.filter((v) => v !== value)
                    : [...cur, value],
            };
        });
    };

    const clear = () => setFilters({ colors: [], sizes: [], prices: [] });

    const results = useMemo(() => INVENTORY.filter((i) => matchesFilters(i, filters)), [filters]);

    // Dynamic mode: compute which OTHER filter options would still yield >0 results
    // if selected. An option is "disabled" if selecting it would produce zero results,
    // given the currently applied filters (excluding that facet).
    const isDisabled = (facet, value) => {
        if (mode !== "dynamic") return false;
        // If value is already selected, never disable (user must be able to unselect)
        if (filters[facet].includes(value)) return false;
        const hypothetical = {
            ...filters,
            [facet]: [...filters[facet], value],
        };
        return INVENTORY.filter((i) => matchesFilters(i, hypothetical)).length === 0;
    };

    const chip = (facet, value, label) => {
        const active = filters[facet].includes(value);
        const disabled = isDisabled(facet, value);
        return (
            <button
                key={facet + value}
                onClick={() => !disabled && toggle(facet, value)}
                disabled={disabled}
                data-testid={`demo-filter-${facet}-${value}`}
                style={{
                    padding: "7px 13px",
                    borderRadius: 999,
                    border: "1px solid",
                    borderColor: active ? "var(--primary)" : "var(--border)",
                    background: active ? "rgba(0,128,255,0.12)" : "transparent",
                    color: disabled
                        ? "rgba(250,250,251,0.28)"
                        : active
                          ? "var(--primary)"
                          : "rgba(250,250,251,0.82)",
                    fontSize: 12.5,
                    fontWeight: 500,
                    cursor: disabled ? "not-allowed" : "pointer",
                    textDecoration: disabled ? "line-through" : "none",
                    fontFamily: "var(--font-body)",
                    transition: "all 0.18s",
                }}
            >
                {label}
            </button>
        );
    };

    return (
        <div
            className="card-b"
            data-testid="dynamic-filters-demo"
            style={{ padding: 22, marginTop: 26 }}
        >
            {/* Mode toggle */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 18,
                    gap: 12,
                    flexWrap: "wrap",
                }}
            >
                <div>
                    <div
                        style={{
                            fontFamily: "var(--font-head)",
                            fontWeight: 700,
                            fontSize: 15,
                            marginBottom: 2,
                        }}
                    >
                        Try it: Static vs Dynamic filters
                    </div>
                    <div style={{ fontSize: 12.5, color: "rgba(250,250,251,0.6)" }}>
                        Pick an impossible combo (e.g. Red + XL + Under ₹500) and toggle modes.
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        gap: 4,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--border)",
                        borderRadius: 999,
                        padding: 3,
                    }}
                >
                    {[
                        { k: "static", l: "Static (old)" },
                        { k: "dynamic", l: "Dynamic (shipped)" },
                    ].map((m) => (
                        <button
                            key={m.k}
                            onClick={() => setMode(m.k)}
                            data-testid={`demo-mode-${m.k}`}
                            style={{
                                padding: "6px 14px",
                                borderRadius: 999,
                                border: "none",
                                cursor: "pointer",
                                fontSize: 12.5,
                                fontWeight: 600,
                                fontFamily: "var(--font-body)",
                                background: mode === m.k ? "var(--primary)" : "transparent",
                                color: mode === m.k ? "#fff" : "rgba(250,250,251,0.7)",
                                transition: "all 0.2s",
                            }}
                        >
                            {m.l}
                        </button>
                    ))}
                </div>
            </div>

            {/* Filter rows */}
            <div style={{ display: "grid", gap: 10, marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ fontSize: 11.5, color: "rgba(250,250,251,0.5)", width: 52 }}>
                        Color
                    </span>
                    {COLORS.map((c) => chip("colors", c, c))}
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ fontSize: 11.5, color: "rgba(250,250,251,0.5)", width: 52 }}>
                        Size
                    </span>
                    {SIZES.map((s) => chip("sizes", s, s))}
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ fontSize: 11.5, color: "rgba(250,250,251,0.5)", width: 52 }}>
                        Price
                    </span>
                    {PRICE_BUCKETS.map((b) => chip("prices", b.key, b.label))}
                    {(filters.colors.length || filters.sizes.length || filters.prices.length) ? (
                        <button
                            onClick={clear}
                            data-testid="demo-clear"
                            style={{
                                marginLeft: "auto",
                                background: "transparent",
                                border: "none",
                                color: "rgba(250,250,251,0.55)",
                                fontSize: 12,
                                fontWeight: 600,
                                cursor: "pointer",
                                textDecoration: "underline",
                                fontFamily: "var(--font-body)",
                            }}
                        >
                            Clear
                        </button>
                    ) : null}
                </div>
            </div>

            {/* Results panel */}
            <div
                style={{
                    borderTop: "1px solid var(--border)",
                    paddingTop: 14,
                    marginTop: 4,
                }}
            >
                <div
                    style={{
                        fontSize: 12,
                        color: "rgba(250,250,251,0.55)",
                        marginBottom: 10,
                    }}
                    data-testid="demo-result-count"
                >
                    {results.length} product{results.length === 1 ? "" : "s"} match
                </div>
                {results.length === 0 ? (
                    <div
                        data-testid="demo-empty-state"
                        style={{
                            padding: "22px 16px",
                            border: "1px dashed var(--border)",
                            borderRadius: 10,
                            textAlign: "center",
                            color: "rgba(250,250,251,0.5)",
                            fontSize: 13,
                        }}
                    >
                        <div style={{ marginBottom: 6, color: "rgba(255,47,209,0.85)" }}>
                            Zero results.
                        </div>
                        {mode === "static"
                            ? "The old flow lets users hit dead ends like this — 42.8% of filter sessions ended here."
                            : "On dynamic, impossible options are pruned before they can be picked."}
                    </div>
                ) : (
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                            gap: 10,
                        }}
                    >
                        {results.map((r) => (
                            <div
                                key={r.id}
                                className="card-b"
                                style={{ padding: 12 }}
                            >
                                <div
                                    style={{
                                        height: 72,
                                        background:
                                            "linear-gradient(135deg, rgba(0,128,255,0.18), rgba(255,47,209,0.18))",
                                        borderRadius: 8,
                                        marginBottom: 8,
                                    }}
                                />
                                <div style={{ fontSize: 12.5, fontWeight: 600 }}>{r.name}</div>
                                <div
                                    style={{
                                        fontSize: 11,
                                        color: "rgba(250,250,251,0.55)",
                                        marginTop: 2,
                                    }}
                                >
                                    {r.color} · {r.size}
                                </div>
                                <div
                                    style={{
                                        fontSize: 13,
                                        color: "var(--primary)",
                                        fontWeight: 700,
                                        marginTop: 4,
                                    }}
                                >
                                    ₹{r.price}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
