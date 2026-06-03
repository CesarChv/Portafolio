/* ============================================================
   Tweaks · selector de paleta pastel (monta su propio root React)
   ============================================================ */

const THEME_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "aurora"
}/*EDITMODE-END*/;

const RPG_PALETTES = [
  { id: "aurora",  name: "Aurora",  hint: "azul · lavanda · menta", colors: ["#8fbce8", "#b7a9e8", "#93d8b8", "#e7cf9a"] },
  { id: "durazno", name: "Durazno", hint: "durazno · rosa · arena",  colors: ["#e9b89a", "#e3a6b8", "#c9cf9e", "#ecd6a3"] },
  { id: "menta",   name: "Menta",   hint: "menta · salvia · cielo",  colors: ["#9fdcc0", "#bcd1a6", "#a9cfe0", "#e6d3a6"] },
  { id: "marino",  name: "Marino",  hint: "azul intenso (original)", colors: ["#4aa8ff", "#8b7bff", "#46d39b", "#e3b34a"] },
];

function applyTheme(id) {
  document.documentElement.setAttribute("data-theme", id);
  try { localStorage.setItem("rpg-theme", id); } catch (e) {}
}

function TweaksApp() {
  const [t, setTweak] = useTweaks(THEME_DEFAULTS);

  // tema inicial: respeta lo guardado por el usuario si difiere del default
  React.useEffect(() => {
    let saved = null;
    try { saved = localStorage.getItem("rpg-theme"); } catch (e) {}
    if (saved && saved !== t.theme) setTweak("theme", saved);
    else applyTheme(t.theme);
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => { applyTheme(t.theme); }, [t.theme]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Paleta de color" />
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {RPG_PALETTES.map((p) => {
          const active = t.theme === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setTweak("theme", p.id)}
              style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "8px 9px", cursor: "pointer", textAlign: "left",
                borderRadius: "9px",
                border: active ? "1.5px solid #29261b" : "1px solid rgba(41,38,27,.16)",
                background: active ? "rgba(41,38,27,.06)" : "rgba(255,255,255,.4)",
                transition: "border .15s, background .15s",
              }}
            >
              <span style={{ display: "flex", flexShrink: 0 }}>
                {p.colors.map((c, i) => (
                  <span key={i} style={{
                    width: "16px", height: "16px", borderRadius: "50%",
                    background: c, marginLeft: i ? "-5px" : 0,
                    border: "1.5px solid rgba(255,255,255,.85)",
                    boxShadow: "0 1px 2px rgba(0,0,0,.15)",
                  }} />
                ))}
              </span>
              <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
                <span style={{ fontWeight: 600, fontSize: "12px" }}>{p.name}</span>
                <span style={{ fontSize: "10px", color: "rgba(41,38,27,.5)" }}>{p.hint}</span>
              </span>
              {active && (
                <span style={{ marginLeft: "auto", fontSize: "13px", color: "#29261b" }}>✓</span>
              )}
            </button>
          );
        })}
      </div>
      <TweakSection label="Tono" />
      <p style={{ margin: 0, fontSize: "11px", color: "rgba(41,38,27,.55)", lineHeight: 1.5 }}>
        Las tres primeras paletas son pastel y de bajo contraste. «Marino» recupera
        el estilo original más intenso.
      </p>
    </TweaksPanel>
  );
}

(function mountTweaks() {
  const el = document.getElementById("tweaks-root");
  if (el && window.ReactDOM) {
    ReactDOM.createRoot(el).render(<TweaksApp />);
  }
})();
