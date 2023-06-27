self.onmessage = (message) => {

    function randomRGB() {

        function random(min, max) {
            const num = Math.floor(Math.random() * (max - min + 1)) + min;
            return num;
        }

        return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
    }

    self.postMessage(randomRGB());
}