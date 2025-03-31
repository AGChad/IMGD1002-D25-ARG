//Some of this code is from https://codepen.io/RobotWizard/pen/rRVKVa

window.onload = () => {
    const padding = 10;

    let img = document.getElementById("img");
    const navbar = document.getElementById("header");
    const navheight = navbar.clientHeight + padding;

    const imgWidth = img.clientWidth;
    const imgHeight = img.clientHeight;

    let x = (document.body.clientWidth - imgWidth) / 2,
        y = (document.body.clientHeight - imgHeight) / 2,
        dirX = Math.random() < 0.5 ? -1 : 1,
        dirY = Math.random() < 0.5 ? -1 : 1;
    const speed = 3;

    function animate() {
        const screenHeight = document.body.clientHeight;
        const screenWidth = document.body.clientWidth;

        if (y + imgHeight >= screenHeight - padding || y < navheight) {
            dirY *= -1;
        }
        if (x + imgWidth >= screenWidth - padding || x < 0 + padding) {
            dirX *= -1;
        }

        x += dirX * speed;
        y += dirY * speed;
        img.style.left = x + "px";
        img.style.top = y + "px";
        window.requestAnimationFrame(animate);
    }

    window.requestAnimationFrame(animate);    
}



