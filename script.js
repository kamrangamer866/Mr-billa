function welcome() {
    document.querySelector(".card").innerHTML = `
        <h1>🎥 MR BILLA VIDEO</h1>

        <video width="100%" controls autoplay>
            <source src="VID-20260804-WA0001.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

        <br><br>

        <a href="https://wa.me/03326657632" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width="60">
        </a>
    `;
}
