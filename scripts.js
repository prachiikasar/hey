document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('personalized-message');
    const recipientName = "Incredible Woman";
    messageElement.textContent = `Happy Women's Day You are a true inspiration!`;
    messageElement.classList.add("text-left");

    const messageContainer = document.getElementById('messageContainer');
    let messageIndex = 0;

    function slideMessages() {
        messageIndex = (messageIndex + 1) % messageContainer.children.length;
        messageContainer.style.transform = `translateX(-${messageIndex * 100}%)`;
    }

    setInterval(slideMessages, 3000);
   
    const cardHeart = document.getElementById('cardHeart');
    const changeColorBtn = document.getElementById('changeColorBtn');
    const colors = ['#e91e63', '#9c27b0', '#2196f3', '#4caf50', '#ff9800'];
    let colorIndex = 0;

    changeColorBtn.addEventListener('click', () => {
        cardHeart.style.backgroundColor = colors[colorIndex];
        cardHeart.style.setProperty('--before-after-color', colors[colorIndex]);
        colorIndex = (colorIndex + 1) % colors.length;
    });

    const updateNameBtn = document.getElementById('updateNameBtn');
    const nameInput = document.getElementById('nameInput');

    updateNameBtn.addEventListener('click', () => {
        const newName = nameInput.value.trim();
        if (newName) {
            messageElement.textContent = `Happy Women's Day, ${newName}! You are a true inspiration!`;
        }
    });

    // Background Heart Bubbles
    const backgroundHearts = document.querySelector('.background-hearts');
    

    function createHeartBubble() {
        const heartBubble = document.createElement('div');
        heartBubble.classList.add('heart-bubble');

        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 3;

        heartBubble.style.left = `${randomX}vw`;
        heartBubble.style.animationDelay = `${randomDelay}s`;
        heartBubble.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];

        backgroundHearts.appendChild(heartBubble);

        heartBubble.addEventListener('animationend', () => {
            heartBubble.remove();
        });
    }

    setInterval(createHeartBubble, 500);
});

document.addEventListener('DOMContentLoaded', () => {
    // ... your existing code ...

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = `${Math.random() * 100}vw`;
        sparkle.style.top = `${Math.random() * 100}vh`;
        sparkle.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 2000);
    }

    setInterval(createSparkle, 100);
});