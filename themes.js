// Theme definitions
const themes = {
    default: {
        name: "Default",
        accent: "#10b981",
        accentDark: "#059669",
        bg: "#0f172a",
        card: "#1e293b",
        cardHover: "#334155",
        text: "#f1f5f9",
        textDim: "#94a3b8",
        border: "#334155"
    },
    fantasy: {
        name: "Fantasy",
        accent: "#10b981",
        accentDark: "#059669",
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
        bg: "#0c0a09",
        card: "#1c1917",
        cardHover: "#292524",
        text: "#fafaf9",
        textDim: "#a8a29e",
        border: "#292524"
    },
    horror: {
        name: "Horror",
        accent: "#dc2626",
        accentDark: "#991b1b",
        bg: "#0a0a0a",
        card: "#171717",
        cardHover: "#262626",
        text: "#fafafa",
        textDim: "#a3a3a3",
        border: "#262626"
    },
    mystery: {
        name: "Mystery",
        accent: "#6366f1",
        accentDark: "#4f46e5",
        bg: "#1e1b29",
        card: "#2d2a3d",
        cardHover: "#3d3a4f",
        text: "#f5f3ff",
        textDim: "#c4b5fd",
        border: "#3d3a4f"
    },
    steampunk: {
        name: "Steampunk",
        accent: "#d97706",
        accentDark: "#b45309",
        bg: "#1c1917",
        card: "#292524",
        cardHover: "#3f3f46",
        text: "#fef3c7",
        textDim: "#d6d3d1",
        border: "#3f3f46"
    }
};

// Font presets
const fontPresets = {
    serif: {
        name: "Serif",
        fontFamily: "Georgia, 'Times New Roman', Times, serif"
    },
    mono: {
        name: "Monospace",
        fontFamily: "'Courier New', Courier, monospace"
    },
    cjk: {
        name: "CJK (Chinese/Japanese/Korean)",
        fontFamily: "'Noto Sans CJK', 'Hiragino Sans', 'MS Gothic', 'Malgun Gothic', sans-serif"
    },
    arabic: {
        name: "Arabic",
        fontFamily: "'Noto Sans Arabic', 'Arabic Typesetting', 'Traditional Arabic', sans-serif"
    },
    devanagari: {
        name: "Devanagari",
        fontFamily: "'Noto Sans Devanagari', 'Mangal', 'Kokila', sans-serif"
    }
};

// Apply theme to document
function applyTheme(themeName) {
    const theme = themes[themeName] || themes.default;
    const root = document.documentElement;
    
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--accent-dark', theme.accentDark);
    root.style.setProperty('--bg', theme.bg);
    root.style.setProperty('--card', theme.card);
    root.style.setProperty('--card-hover', theme.cardHover);
    root.style.setProperty('--text', theme.text);
    root.style.setProperty('--text-dim', theme.textDim);
    root.style.setProperty('--border', theme.border);
    
    // Save theme to data if data object exists
    if (typeof data !== 'undefined') {
        data.meta.theme = themeName;
        if (typeof saveToLocalStorage === 'function') {
            saveToLocalStorage();
        }
    }
    
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
        
        // Add color preview with left border
        option.style.borderLeftWidth = "4px";
        option.style.borderLeftColor = theme.accent;
        
        picker.appendChild(option);
    }
    
    updateThemePickerUI();
}

// Update theme picker active state
function updateThemePickerUI() {
    const options = document.querySelectorAll(".theme-option");
    const currentTheme = (typeof data !== 'undefined' && data.meta.theme) || "default";
    
    options.forEach((option, index) => {
        const themeKey = Object.keys(themes)[index];
        if (themeKey === currentTheme) {
            option.classList.add("active");
        } else {
            option.classList.remove("active");
        }
    });
}

// Apply font preset
function applyFontPreset(presetName) {
    const customGroup = document.getElementById("customFontGroup");
    
    if (presetName === "custom") {
        if (customGroup) customGroup.style.display = "block";
        return;
    }
    
    if (customGroup) customGroup.style.display = "none";
    
    if (!presetName) {
        document.body.style.fontFamily = "";
        return;
    }
    
    const preset = fontPresets[presetName];
    if (preset) {
        document.body.style.fontFamily = preset.fontFamily;
    }
}

// Apply custom font from textarea
function applyCustomFont() {
    const input = document.getElementById("customFont");
    if (!input) return;
    
    const value = input.value.trim();
    if (!value) return;
    
    // Check if it's a URL
    if (value.startsWith("http")) {
        const fontFamily = "CustomFont";
        let style = document.getElementById("customFontStyle");
        
        if (!style) {
            style = document.createElement("style");
            style.id = "customFontStyle";
            document.head.appendChild(style);
        }
        
        style.textContent = `
            @font-face {
                font-family: '${fontFamily}';
                src: url('${value}');
            }
        `;
        
        document.body.style.fontFamily = `'${fontFamily}', sans-serif`;
    } 
    // Check if it's @font-face CSS
    else if (value.includes("@font-face")) {
        let style = document.getElementById("customFontStyle");
        
        if (!style) {
            style = document.createElement("style");
            style.id = "customFontStyle";
            document.head.appendChild(style);
        }
        
        style.textContent = value;
        
        // Try to extract font-family name
        const match = value.match(/font-family:\s*['"]?([^'";}]+)['"]?/i);
        if (match) {
            document.body.style.fontFamily = `'${match[1]}', sans-serif`;
        }
    }
}

// Set text direction
function setTextDirection(direction) {
    document.body.setAttribute("dir", direction);
    
    // Save to data if available
    if (typeof data !== 'undefined') {
        data.meta.textDirection = direction;
        if (typeof saveToLocalStorage === 'function') {
            saveToLocalStorage();
        }
    }
}

// Update meta information
function updateMeta(key, value) {
    if (typeof data !== 'undefined') {
        data.meta[key] = value;
        if (typeof saveToLocalStorage === 'function') {
            saveToLocalStorage();
        }
    }
}

// Initialize themes on page load
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        // Render theme picker if it exists
        renderThemePicker();
        
        // Apply saved theme if available
        if (typeof data !== 'undefined' && data.meta && data.meta.theme) {
            applyTheme(data.meta.theme);
        }
        
        // Apply saved text direction if available
        if (typeof data !== 'undefined' && data.meta && data.meta.textDirection) {
            setTextDirection(data.meta.textDirection);
        }
        
        // Initialize settings modal inputs if they exist
        const projectTitle = document.getElementById("projectTitle");
        const projectLanguage = document.getElementById("projectLanguage");
        const textDirection = document.getElementById("textDirection");
        
        if (typeof data !== 'undefined' && data.meta) {
            if (projectTitle) projectTitle.value = data.meta.title || "";
            if (projectLanguage) projectLanguage.value = data.meta.language || "";
            if (textDirection) textDirection.value = data.meta.textDirection || "ltr";
        }
    });
}
