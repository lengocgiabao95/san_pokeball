
    //khoi tao moi truong,dat thong so co ban
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var w = document.getElementById('canvas').offsetWidth;
    var h = document.getElementById('canvas').offsetWidth;
    
    
    
    
   
    
    //thiet lap back ground
    var backgroundImgReady = false;
    var backgroundImg = new Image();
    backgroundImg.onload = function() {
        backgroundImgReady = true;
    };
    backgroundImg.src = "pokemon_terrain.jpg" ; 
    //thiet lap house image
    var houseImgReady = false; 
    var houseImg = new Image();
    houseImg.onload = function() {
        houseImgReady = true;

    };
    houseImg.src = "house.png";
    // thiet lap ball image;
    var ballImgReady = false;
    var ballImg = new Image();
    ballImg.onload = function() {
        ballImgReady = true;
    };
    ballImg.src = "pokeball.png";
    //thiet lap player image;
    var playerImgReady = false;
    var playerImg = new Image();
    playerImg.onload = function() {
        playerImgReady = true;
    };
    playerImg.src = "player.png";
    // game objects 
    var player = {
        speed : 100,
        x : w / 2,
        y : h / 2,
        
           

        
    };
    var ball = {
        x : 0,
        y : 0,

    };
    var ballGet = 0;
    var keysDown = {};
    addEventListener("keydown", function(e) {
        keysDown[e.keyCode] = true;
    },false) ;
    addEventListener("keyup", function(e) {
        delete keysDown[e.keyCode];
    }, false) ;
    var ballCaughtPosition = function() {
        ball.x = 29 + (Math.random()*(w - 58));
        ball.y = 19 + (Math.random()*(h - 38));
    }
    var update = function(modifier) {
        if(38 in keysDown) {//up
            player.y -= player.speed*modifier;
        }
        if(40 in keysDown) {//down
            player.y += player.speed*modifier;
        }
        if( 37 in keysDown) {//left
            player.x -= player.speed*modifier;
        }
        if( 39 in keysDown) {//right
            player.x += player.speed*modifier; 
        }
            //touching
        if(player.x <= (ball.x + 29)
		&& ball.x <= (player.x + 17)
		&& player.y <= (ball.y + 19)
		&& ball.y <= (player.y + 19)) {
            ++ballGet;
            ballCaughtPosition();
        }
    };
    var drawall = function() {
        if(backgroundImgReady = true) {
            ctx.drawImage(backgroundImg, 0,0);
        }
        if(houseImgReady = true) {
            ctx.drawImage(houseImg, 80, 60);
        }
        if(ballImgReady=true) {
            ctx.drawImage(
                ballImg,
                29,
                0,
                29,
                19,
                ball.x, 
                ball.y,
                29,
                19);
        }
        if(playerImgReady=true) {
            ctx.drawImage(
                playerImg,
                2*17,//columm th * frame width
                0,//rowth
                18,//subimage width
                20,//subimage height
                player.x,
                player.y,
                20,//frame witdh
                20// frame height
              );
        }
        //ScoreBoard
        ctx.fillStyle = "rgb(250,250,250)";
        ctx.font = "24px Arial";
        ctx.textAlign = "left";
        ctx.Baseline = "top";
        ctx.fillText( "Balls : " + ballGet, 32, 32);

    };
    // check collision 
    // function check_collision(x, y) {
    //     var foundCollision = false;
    
    //     if ((x > 80 && x < 189 && (y == 60 || y == 160 ) || (y > 60 && y < 160 && (x == 80 || x == 189)))) {
    //       // house
    //       alert('house')
    //       foundCollision = true;
    //     }
    
    //     if (
    //       x < 20||
    //       x > 400 ||
    //       y < 20||
    //       y > 400 ||
    //       (y > 0 && y < 80 && (x == 400 || x == 380)) || //right corner
    //       (y > 0 && y < 80 && (x == 40 || x == 60)) || //left corner
    //       (y > 360 && (x == 40 || x == 60)) || //left corner
    //       (x > 340 && (y == 380 || y == 400)) || //left corner
    //       (x > 380 && (y == 340 || y == 360)) //left corner 2
    //     ) {
          
    //       foundCollision = true;
    //     }
    
    //     return foundCollision;
    //   }
    //   check_collision(player.x,player.y);
      
   
    
     //game loop
   
    var main = function () {
        var now = Date.now();/**********double lastTime = getCurrentTime();
        while (true)
        {
          double current = getCurrentTime();
          double elapsed = current - lastTime;
          processInput();
          update(elapsed);
          render();
          lastTime = current;
        } */
        var delta = now - then;
    
        update(delta / 1000);
        drawall();
    
        then = now;
    
        
        requestAnimationFrame(main);
    };
    var then = Date.now();
ballCaughtPosition();
main();






