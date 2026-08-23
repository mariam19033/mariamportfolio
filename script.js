// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ==============================
// MOBILE MENU
// ==============================

const menuButton =
    document.querySelector(".menu-btn");

const nav =
    document.querySelector("nav");

menuButton.addEventListener("click", () => {

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.position = "absolute";
        nav.style.top = "80px";
        nav.style.right = "7%";
        nav.style.flexDirection = "column";
        nav.style.background = "white";
        nav.style.padding = "25px";
        nav.style.borderRadius = "20px";
        nav.style.boxShadow =
            "0 15px 40px rgba(0,0,0,.1)";

    }

});


// ==============================
// MOUSE PARALLAX
// ==============================

const heroCard =
    document.querySelector(".hero-card");

document.addEventListener("mousemove", (event) => {

    if (!heroCard) return;

    const x =
        (window.innerWidth / 2 - event.clientX) / 40;

    const y =
        (window.innerHeight / 2 - event.clientY) / 40;

    heroCard.style.transform =
        `translate(${x}px, ${y}px)`;

});


// ==============================
// FLOATING HEART CLICK EFFECT
// ==============================

document.addEventListener("click", (event) => {

    const heart = document.createElement("span");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";
    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";
    heart.style.color = "#e98ab5";
    heart.style.fontSize = "20px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translateY(0) scale(1)",
                opacity: 1
            },
            {
                transform: "translateY(-80px) scale(1.5)",
                opacity: 0
            }
        ],
        {
            duration: 900,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, 900);

});