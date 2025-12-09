// Main application initialization and orchestration

// Initialize the application
function init() {
    // Load data from localStorage or use template
    loadFromLocalStorage();
    
    // Render UI
    renderTabs();
    renderContent();
    renderThemePicker();
    updateMetaFields();
    
    // Apply saved theme
    applyTheme(data.meta.theme || "fantasy");
    
    // Set text direction if saved
    const savedDirection = localStorage.getItem("textDirection") || "ltr";
    document.body.setAttribute("dir", savedDirection);
    const dirSelect = document.getElementById("textDirection");
    if (dirSelect) dirSelect.value = savedDirection;
    
    console.log("World Builder initialized");
    showToast("Welcome to World Builder!", "success", 2000);
}

// Start application when DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

// Warn before leaving if there's unsaved data
window.addEventListener("beforeunload", (e) => {
    // Only warn if data has been modified (optional - can be removed if annoying)
    // For now, we auto-save to localStorage, so this is mostly informational
    const hasData = data.characters.length > 0 || 
                    data.locations.length > 0 || 
                    data.factions.length > 0;
    
    if (hasData) {
        // Note: Most modern browsers ignore custom messages
        // They show a generic "Leave site?" dialog
        e.preventDefault();
        e.returnValue = "";
    }
});
