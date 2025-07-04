document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("status");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            status.textContent = "Please fill in all fields.";
            status.style.color = "red";
            return;
        }

        status.textContent = "Message sent successfully!";
        status.style.color = "green";

        form.reset();
    });
});
