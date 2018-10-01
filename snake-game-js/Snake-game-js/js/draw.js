
var drawModule = (function () {


    //draw the snake with canvas:
 /* var bodySnake = function(x, y) {
        ctx.fillStyle = 'green';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        //ctx.strokeStyle = 'darkgreen';
        //ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  }*/

  /*var pizza = function(x, y) {
        ctx.fillStyle = 'red';
        ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
  }*/

  var scoreText = function() {
    var score_text ="Score: " + score;
    ctx.fillStyle = 'blue'	;
    ctx.fillText(score_text, 200, 510);
  };
    //The structure of the snake:

    var drawSnake = function(){
        var img = document.getElementById("snakepic");
        ctx.drawImage(img, x, y, 40, 40);
        //ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    };
    var createFood = function() {
        food = {    ////Generate random numbers
            xf: Math.floor((Math.random()*430 ) + 1),
            yf: Math.floor((Math.random()*430 ) + 1)
        };
    };
      pizza = function(xf,yf){
        var img2 = document.getElementById("pizzapic");
        console.log(xf,yf);
        ctx.drawImage(img2, xf, yf, 15, 15);
        //ctx.drawImage(img2,20,50,30, 30);
        //ctx.fillRect(10, 10, xf, yf);
    };


    /* var drawSnake = function() {
         //the body of the snake
         var length = 8;
         snake = [];
         for (var i = length-1; i>=0; i--) {
             snake.push({x:i, y:0});
         }
     }*/
    var myVar;
    var myVar2;

    function myTimer() {
        myVar = setTimeout(mm, 9000);
      //  myVar2 =myVar = setTimeout(nn, 8000);
       }
    function nn(){
        var seconds_left = 8;
        var interval = setInterval(function() {
            document.getElementById('pid').innerHTML ="Time : " + --seconds_left;

            if (seconds_left <= -1)
            {
                document.getElementById('pid').innerHTML = "You'r Time is Finish";
                clearInterval(interval);
            }
        }, 1000);
    }
      var list  =[];
    function mm() {

        var person= prompt("Time is Finish!   \n "+"score :" + score + "  \n Please enter your name:" , "Melika");
        //var person = prompt("Please enter your name:", "Harry Potter");
        if (person == null || person == ""){
             var tt= "You cancelled the Game.";
            document.getElementById("p").innerHTML = tt;
          } else {

          var  txt = person;
            var obj = {
                name: txt,
                score: score
                 };

            //obj["key3"] = "value3";
              list.push(obj);
              console.log(obj);

              list.sort(function(a, b){return b.score - a.score});
              console.log(list);

                //display(h);
                  // display2()
            //display4(list);
                }
        display3(list);

        score=0;
         clearInterval(gameloop);
        //btn.removeAttribute('disabled', true);
        document.getElementById("btn").disabled = false;
    }

    function display3(list) {
        var table = document.createElement('table');
        //var table = document.createElement('table');
        //var n=["mmm"];
        for (var i=0; i < list.length; i++) {
            //var row = table.insertRow(0);
          var  row = document.createElement('tr');
           // var cel1 = row.insertCell(0);
            // cel2 = row.insertCell(1);
           var  cel1 = document.createElement('th');
           var  cel2 = document.createElement('th');


            cel1.textContent = list[i].name;
            cel2.textContent = list[i].score;
          //  row.insertCell(0).appendChild(cel1);
            row.appendChild(cel1);
            row.appendChild(cel2);
            table.appendChild(row);
        }
        document.getElementById('myTable').innerHTML=" ";
        document.getElementById("myTable").appendChild(table);
        //document.getElementById("mydiv1").innerHTML =n;
        }
        function display4(){
            var table = document.getElementById("myTable");
            for(var i; i<list.length ; i++) {
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = list[i].name;
                cell2.innerHTML = list[i].score;
               // console.log(display4());
            }
           // document.getElementById("mydiv1").innerHTML=;
        }
    function re(){
       // var list = document.getElementById("myList");
        console.log('boooooooooz');
        table.removeChild(table);

    }




    var paint = function(){
       // btn2.setAttribute('enabled', true);
        ctx.fillStyle ='#D3D3D3';
        ctx.fillRect(0,0, w, h);
        drawSnake();
     //   createFood();

       //Disable the button _start_ while you're playing.
      //  btn.setAttribute('disabled', true);
      //The movement of the snake:
        /* var snakeX = snake[0].x;
      var snakeY = snake[0].y;
        var xFloor = Math.floor(snakeX);
        var yFloor = Math.floor(snakeY);*/

      if (direction == 'right') {
          x++;
      //  snakeX++;
         /* if(snakeX == w/snakeSize){
              snakeX=0;
          }*/
          if (x==w){
              x=1;
          }
          }
      else if (direction == 'left') {
          x--;
        //  snakeX--;
          if (x ==-1) {
              x = w +1;
          }
      }
      else if (direction == 'up') {
          y--;
        //snakeY--;
          if (y == -1) {
              y = h+1;
          }
      }
      else if(direction == 'down') {
          y++;
       // snakeY++;
          if (y == h) {
              y =1;
          }
      }
       /* if (x ==food.x || y == food.y) {
            //Create a new square instead of moving the tail.
            score++; console.log('AA');
            //Create new food.
            createFood();
        }*/
        /*if ((x>food.xf && x<food.xf+15) && (y>food.yf && y<food.yf+15) ||
            (x+50>food.xf && x+50<food.xf+15) && (y>food.yf && y<food.yf+15)||
            (x>food.xf && x<food.xf+15) && (y+50>food.yf && y+50<food.yf+15)||
            (x+50>food.xf && x+50<food.xf+15) && (y+50>food.yf && y+50<food.yf+15)) {*/
            //Create a new square instead of moving the tail.
        //if ((x+50>food.xf && x+50<food.xf+15)||(x<food.xf+15 && x>food.xf))
       // if ((y+50>food.yf && y+50<food.yf+15)||(y<food.yf+15 && y>food.yf))
        if ((food.xf>x && food.xf<x+30 && food.yf>y && food.yf<y+30) || (x>food.xf &&  x<food.xf+15 && y>food.yf && y<food.yf+15))
        {
            score++;
            console.log('AA');
            //Create new food.
            createFood();
        }
        scoreText();
        pizza(food.xf,food.yf);
      /*
       If the snake touches the canvas  or itself,die!
       if x or y of an element of the snake, don't fit inside the canvas, the game will be stopped.
       If the check_collision or myTimer is true , game will be stopped again.
       */

    /*  if (snakeX == -1 || snakeX == w/snakeSize || snakeY == -1 || snakeY == h/snakeSize || checkCollision(snakeX, snakeY, snake)) {
          //stop game
          //Make the start button enabled again

          btn.removeAttribute('disabled', true);
          //ctx.clearRect(0,0,w,h);
          //gameloop = clearInterval(gameloop);
          return;
        }  */

         //If the snake eats food it becomes longer
      /*  if(snakeX == food.x && snakeY == food.y) {
          var tail = {x: snakeX, y: snakeY}; //Create a new head instead of moving the tail
          score ++;

          createFood(); //Create new food
        } else {
          var tail = snake.pop(); //pops out the last cell
          tail.x = snakeX;
          tail.y = snakeY;
        }
        //The snake can now eat the food.
        snake.unshift(tail); //puts back the tail as the first cell

      //For each element of the array create a square using the bodySnake function we created before.
        for(var i = 0; i < snake.length; i++) {
          bodySnake(snake[i].x, snake[i].y);
        }*/


  };
      //The food will be only a random square inside the canvas

        //##############checkCollision function to detect if the snake has crashed on its body itself:
  var checkCollision = function(x, y, array) {
      for(var i = 0; i < array.length; i++) {
        if(array[i].x === x && array[i].y === y)
        return true;
      }

      return false;
  };

  var init = function(){
      document.getElementById("btn").disabled = true;
      nn();
      direction = 'down';
      createFood();
     // drawSnake();
      gameloop = setInterval(paint,6);
      myTimer();

  };

    return {
      init : init
    };

    
}());
