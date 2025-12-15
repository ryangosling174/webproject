// Dark mode toggle
function Togglemode() {
  document.getElementById("body").classList.toggle("dark");
  const isDark = document.getElementById("body").classList.contains("dark");
  localStorage.setItem("darkMode", isDark);
}

// Restore dark mode immediately
if (localStorage.getItem("darkMode") === "true") {
  document.getElementById("body").classList.add("dark");
}

const wrapper = document.getElementById("main-content-wrapper");

// --- Summary modal ---
const summaryBtn = document.getElementById("summary-btn");
const summaryModal = document.getElementById("summary-modal");
const closeSummaryBtn = document.getElementById("close-summary-btn");

summaryBtn.addEventListener("click", () => {
  summaryModal.classList.add("active");
  wrapper.classList.add("blur");
});

closeSummaryBtn.addEventListener("click", () => {
  summaryModal.classList.remove("active");
  wrapper.classList.remove("blur");
});

// --- Contact modal ---
const contactBtn = document.getElementById("contact-btn"); // lowercase id in HTML
const contactModal = document.getElementById("contact-modal");
const closeContactBtn = document.getElementById("close-contact-btn");

contactBtn.addEventListener("click", () => {
  contactModal.classList.add("active");
  wrapper.classList.add("blur");
});

closeContactBtn.addEventListener("click", () => {
  contactModal.classList.remove("active");
  wrapper.classList.remove("blur");
});

// --- Close modals when clicking outside ---
document.addEventListener("click", (event) => {
  if (event.target === summaryModal) {
    summaryModal.classList.remove("active");
    wrapper.classList.remove("blur");
  }
  if (event.target === contactModal) {
    contactModal.classList.remove("active");
    wrapper.classList.remove("blur");
  }
});

// --- Close modals with ESC key ---
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    summaryModal.classList.remove("active");
    contactModal.classList.remove("active");
    wrapper.classList.remove("blur");
  }
});

// --- Slider function ---
function moveSlide(index) {
  const sliderWrapper = document.getElementById("sliderWrapper");
  sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;
}
