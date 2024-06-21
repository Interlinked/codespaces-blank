const gameCanvas = document.getElementById("game-canvas");
const gameContext = gameCanvas.getContext("2d");
gameCanvas.width = window.innerWidth;
gameCanvas.height = window.innerHeight;
gameContext.fillStyle = "red";
gameContext.fillRect(20,20,100,300);

function drawGameObject(gameObject) {
    gameContext.fillStyle = gameObject.color;
    gameContext.fillRect(gameObject.position.x, gameObject.position.y, 
    gameObject.scale.x, gameObject.scale.y);
}

function drawGameScreen() {
    gameContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    gameObjects.forEach(drawGameObject);
}
window.addEventListener('load',() => {
    GameObject(Vector2D(40,40),Vector2D(60,200),"black");
    GameObject(Vector2D(140,40),Vector2D(200,100),"white");
    drawGameScreen();
});