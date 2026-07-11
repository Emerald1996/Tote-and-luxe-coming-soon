const launchDate = new Date("August 1, 2026 12:00:00").getTime();

const update = () => {

    const now = new Date().getTime();

    const distance = launchDate - now;

    const days = Math.floor(distance / (1000*60*60*24));

    const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance % (1000*60*60))/(1000*60));

    const seconds = Math.floor((distance % (1000*60))/1000);

    document.getElementById("days").innerText = String(days).padStart(2,"0");
    document.getElementById("hours").innerText = String(hours).padStart(2,"0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2,"0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2,"0");
}

setInterval(update,1000);

update();

const form = document.querySelector(".notify");
const success = document.querySelector(".success-message");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
            Accept: "application/json"
        }
    });

    if (response.ok) {
        success.textContent =
            "✨ Thank you! You're on the list. We'll notify you when Tot & Luxe launches.";

        success.classList.add("show");

        form.reset();
    } else {
        success.textContent =
            "Something went wrong. Please try again.";

        success.classList.add("show");
    }
});
