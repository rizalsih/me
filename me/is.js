const toggleBtn = document.getElementById("toggleMode");

// Load mode lama
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

toggleBtn.onclick = () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem("theme", "light");
    }

};

// translate 
const toggleLang = document.getElementById("toggleLang");
let currentLang = "id";

toggleLang.addEventListener("click", () => {
    const elements = document.querySelectorAll("[data-id][data-en]");

    elements.forEach(el => {
        el.textContent = currentLang === "id"
            ? el.dataset.en
            : el.dataset.id;
    });

    currentLang = currentLang === "id" ? "en" : "id";
});

