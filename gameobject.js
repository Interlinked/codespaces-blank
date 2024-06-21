var gameObjects = [];
    var currentId = 0;
    function GameObject(position, scale, color) {
        let gameObject = {
            id: currentId,
            position: position,
            scale: scale,
            color: color
        };
        currentId++;
        gameObjects.push(gameObject);
        return gameObject;
    }