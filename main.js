const patterns = document.querySelector(".patterns")

for (let i0 = 0; i < 50; i++) {
    const img = document.createElement("img")

    img.src = "./images/hero/hero.png"

    img.style.left = Math.random() * 100 + "%";
    img.style.top = Math.random() * 100 + "%";

    img.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    img.style.opacity = 0.12;

    patterns.appendChild(img);
}