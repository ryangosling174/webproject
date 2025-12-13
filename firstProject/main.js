// Dark mode toggle with localStorage
function Togglemode() {
    document.getElementById("body").classList.toggle("dark");
    // Save preference
    const isDark = document.getElementById("body").classList.contains("dark");
    localStorage.setItem("darkMode", isDark);
}

// Load dark mode preference on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    if (savedDarkMode) {
        document.getElementById("body").classList.add("dark");
    }

    // Load sidebar preference
    const savedSidebarState = localStorage.getItem("sidebarClosed") === "true";
    if (savedSidebarState) {
        document.querySelector(".sidebar").classList.add("closed");
    }
});

// Toggle sidebar menu
function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("closed");
    // Save preference
    localStorage.setItem("sidebarClosed", sidebar.classList.contains("closed"));
}

// Set active menu item
function setActiveMenu(event) {
    event.preventDefault();

    // Remove active class from all menu items
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => item.classList.remove("active"));

    // Add active class to clicked menu item
    const clickedItem = event.target.closest(".menu-item");
    if (clickedItem) {
        clickedItem.classList.add("active");
    }
}
