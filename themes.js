// Theme definitions with expanded variety
const themes = {
    fantasy: {
        name: "Fantasy",
        accent: "#10b981",
        accentDark: "#059669",
        accentLight: "#34d399",
        bg: "#0f172a",
        card: "#1e293b",
        cardHover: "#334155",
        text: "#f1f5f9",
        textDim: "#94a3b8",
        border: "#334155"
    },
    scifi: {
        name: "Sci-Fi",
        accent: "#06b6d4",
        accentDark: "#0891b2",
        accentLight: "#22d3ee",
        bg: "#0c0a09",
        card: "#1c1917",
        cardHover: "#292524",
        text: "#fafaf9",
        textDim: "#a8a29e",
        border: "#292524"
    },
    xianxia: {
        name: "Xianxia",
        accent: "#f59e0b",
        accentDark: "#d97706",
        accentLight: "#fbbf24",
        bg: "#160b01",
        card: "#2a1b0a",
        cardHover: "#3d2a14",
        text: "#fef3c7",
        textDim: "#e5c180",
        border: "#57442e"
    },
    cosmicHorror: {
        name: "Cosmic Horror",
        accent: "#8b5cf6",
        accentDark: "#7c3aed",
        accentLight: "#a78bfa",
        bg: "#050510",
        card: "#0d0d1e",
        cardHover: "#1a1a3e",
        text: "#e0e0ff",
        textDim: "#a5a5d4",
        border: "#2d2d5a"
    },
    horror: {
        name: "Horror",
        accent: "#dc2626",
        accentDark: "#991b1b",
        accentLight: "#ef4444",
        bg: "#0a0a0a",
        card: "#171717",
        cardHover: "#262626",
        text: "#fafafa",
        textDim: "#a3a3a3",
        border: "#262626"
    },
    thriller: {
        name: "Thriller",
        accent: "#ef4444",
        accentDark: "#dc2626",
        accentLight: "#f87171",
        bg: "#100a0a",
        card: "#1a1414",
        cardHover: "#292121",
        text: "#fef2f2",
        textDim: "#fca5a5",
        border: "#3a2e2e"
    },
    mystery: {
        name: "Mystery",
        accent: "#6366f1",
        accentDark: "#4f46e5",
        accentLight: "#818cf8",
        bg: "#1e1b29",
        card: "#2d2a3d",
        cardHover: "#3d3a4f",
        text: "#f5f3ff",
        textDim: "#c4b5fd",
        border: "#3d3a4f"
    },
    romance: {
        name: "Romance",
        accent: "#fb7185",
        accentDark: "#f43f5e",
        accentLight: "#fda4af",
        bg: "#1a0f1e",
        card: "#2d1b33",
        cardHover: "#3d2644",
        text: "#fdf2f8",
        textDim: "#fbbf24",
        border: "#4a2d55"
    },
    litrpg: {
        name: "LitRPG",
        accent: "#84cc16",
        accentDark: "#65a30d",
        accentLight: "#a3e635",
        bg: "#0a1409",
        card: "#132711",
        cardHover: "#1f3d1a",
        text: "#f0fdf4",
        textDim: "#bbf7d0",
        border: "#2d5a27"
    },
    historicalFiction: {
        name: "Historical Fiction",
        accent: "#d97706",
        accentDark: "#b45309",
        accentLight: "#f59e0b",
        bg: "#1c1917",
        card: "#292524",
        cardHover: "#44403c",
        text: "#fef3c7",
        textDim: "#d6d3d1",
        border: "#44403c"
    },
    adventure: {
        name: "Adventure",
        accent: "#f97316",
        accentDark: "#ea580c",
        accentLight: "#fb923c",
        bg: "#1c1410",
        card: "#2d231c",
        cardHover: "#44342a",
        text: "#fff7ed",
        textDim: "#fed7aa",
        border: "#57442e"
    },
    western: {
        name: "Western",
        accent: "#92400e",
        accentDark: "#78350f",
        accentLight: "#b45309",
        bg: "#1a1410",
        card: "#2c2419",
        cardHover: "#3f3325",
        text: "#fef3c7",
        textDim: "#d4c5a0",
        border: "#57472e"
    },
    noir: {
        name: "Noir",
        accent: "#f5f5f5",
        accentDark: "#d4d4d4",
        accentLight: "#ffffff",
        bg: "#0a0a0a",
        card: "#1a1a1a",
        cardHover: "#2a2a2a",
        text: "#f5f5f5",
        textDim: "#a3a3a3",
        border: "#404040"
    },
    cyberpunk: {
        name: "Cyberpunk",
        accent: "#f0abfc",
        accentDark: "#d946ef",
        accentLight: "#fae8ff",
        bg: "#0a0118",
        card: "#1a0b2e",
        cardHover: "#2d1b4e",
        text: "#fdf4ff",
        textDim: "#e9d5ff",
        border: "#4c1d95"
    },
    steampunk: {
        name: "Steampunk",
        accent: "#d97706",
        accentDark: "#b45309",
        accentLight: "#f59e0b",
        bg: "#1c1917",
        card: "#292524",
        cardHover: "#44403c",
        text: "#fef3c7",
        textDim: "#d6d3d1",
        border: "#44403c"
    },
    dystopian: {
        name: "Dystopian",
        accent: "#6b7280",
        accentDark: "#4b5563",
        accentLight: "#9ca3af",
        bg: "#111111",
        card: "#1f1f1f",
        cardHover: "#2d2d2d",
        text: "#e5e7eb",
        textDim: "#9ca3af",
        border: "#374151"
    },
    satire: {
        name: "Satire",
        accent: "#ec4899",
        accentDark: "#db2777",
        accentLight: "#f472b6",
        bg: "#1a0f1e",
        card: "#2a1a2f",
        cardHover: "#3d2a44",
        text: "#fdf2f8",
        textDim: "#f9a8d4",
        border: "#4a2d55"
    },
    magicalRealism: {
        name: "Magical Realism",
        accent: "#c026d3",
        accentDark: "#a21caf",
        accentLight: "#e879f9",
        bg: "#18001a",
        card: "#2d0a2e",
        cardHover: "#4a154b",
        text: "#fae8ff",
        textDim: "#e9d5ff",
        border: "#4a154b"
    },
    wuxia: {
        name: "Wuxia",
        accent: "#dc2626",
        accentDark: "#b91c1c",
        accentLight: "#ef4444",
        bg: "#1a0000",
        card: "#2a0a0a",
        cardHover: "#3d1414",
        text: "#fee",
        textDim: "#fca5a5",
        border: "#5a2a2a"
    }
};

// Apply theme to document
function applyTheme(themeName) {
    const theme = themes[themeName] || themes.fantasy;
    const root = document.documentElement;
    
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--accent-dark', theme.accentDark);
    root.style.setProperty('--accent-light', theme.accentLight);
    root.style.setProperty('--bg', theme.bg);
    root.style.setProperty('--card', theme.card);
    root.style.setProperty('--card-hover', theme.cardHover);
    root.style.setProperty('--text', theme.text);
    root.style.setProperty('--text-dim', theme.textDim);
    root.style.setProperty('--border', theme.border);
    
    data.meta.theme = themeName;
    saveToLocalStorage();
    
    // Update active theme in picker
    updateThemePickerUI();
}

// Render theme picker UI
function renderThemePicker() {
    const picker = document.getElementById("themePicker");
    if (!picker) return;
    
    picker.innerHTML = "";
    
    for (const [key, theme] of Object.entries(themes)) {
        const option = document.createElement("div");
        option.className = "theme-option";
        option.textContent = theme.name;
        option.onclick = () => applyTheme(key);
        
        // Add color preview
        option.style.borderLeftWidth = "4px";
        option.style.borderLeftColor = theme.accent;
        
        picker.appendChild(option);
    }
    
    updateThemePickerUI();
}

// Update theme picker active state
function updateThemePickerUI() {
    const options = document.querySelectorAll(".theme-option");
    const currentTheme = data.meta.theme || "fantasy";
    
    options.forEach((option, index) => {
        const themeKey = Object.keys(themes)[index];
        if (themeKey === currentTheme) {
            option.classList.add("active");
        } else {
            option.classList.remove("active");
        }
    });
}

// Set text direction
function setTextDirection(direction) {
    document.body.setAttribute("dir", direction);
    localStorage.setItem("textDirection", direction);
}
