const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const gradientType = document.getElementById("gradientType");
const css = document.getElementById("css");

function setGradient() {
    const type = gradientType.value;
    const colorValue1 = color1.value;
    const colorValue2 = color2.value;

    if (type === "linear") {
        document.body.style.background = `linear-gradient(to right, ${colorValue1}, ${colorValue2})`;
        css.textContent = `linear-gradient(to right, ${colorValue1}, ${colorValue2});`;
    } else if (type === "radial") {
        document.body.style.background = `radial-gradient(circle, ${colorValue1}, ${colorValue2})`;
        css.textContent = `radial-gradient(circle, ${colorValue1}, ${colorValue2});`;
    }
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
gradientType.addEventListener("change", setGradient);

setGradient(); // Initialize with the default values.
