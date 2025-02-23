document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-item a");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function (event) {
            event.preventDefault();

            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));

            // Hide all content
            contents.forEach(content => content.classList.remove("content-visible"));

            // Add active class to clicked tab
            this.classList.add("active");

            // Show corresponding content
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).classList.add("content-visible");
        });
    });
});
