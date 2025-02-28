document.addEventListener("DOMContentLoaded", function () {
    const bgButton = document.querySelector(".bg-button");
    const colors = ["#f4f4f4", "#d1c4e9", "#b3e5fc", "#c8e6c9", "#ffccbc", "#ffeb3b", "#ff9800"];

    if (bgButton){
        bgButton.addEventListener("click", function () {
            document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        });
    }
    

    const socialLinks = document.querySelectorAll(".social-icons a");
    socialLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.2)";
            this.style.transition = "transform 0.3s ease";
        });
        link.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            if (!confirm("You are about to leave the page. Continue?")) {
                event.preventDefault();
            }
        });
    });

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if(themeToggle){
        themeToggle.addEventListener('click', () => {
            if (body.dataset.theme ==='dark') {
            body.dataset.theme = 'light';
            localStorage.setItem('theme', 'light');
            }else {
                body.dataset.theme = 'dark';
                localStorage.setItem('theme', 'dark');
            }
        });

    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme){
        body.dataset.theme = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark').matches){
        body.dataset.theme = 'dark';
    }else {
        body.dataset.theme = 'light';
    }
});
