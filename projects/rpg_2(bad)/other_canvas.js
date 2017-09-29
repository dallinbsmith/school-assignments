    var canvas = document.getElementById('layovermap');
    var context = canvas.getContext('2d');


    var testSprite = new Image();
    testSprite.src = "test_sprite.png"
    
    context.drawImage(testSprite, 64, 64, 32, 32);