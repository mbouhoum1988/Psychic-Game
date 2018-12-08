var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
          
          var win =0;
          var lose = 0;
          var i = 10;
        
          var computer = letters[Math.floor(Math.random()*letters.length)];
                  console.log('computer guess: '+computer);
            
         document.onkeyup = function(){  
            var userguess = String.fromCharCode(event.keyCode).toUpperCase();
                  console.log('userguess: ' + userguess); 
                  $('#guesses').append('   '+userguess);
             if (userguess===computer && i>0){  
                i--;             
                win++;
                computer = letters[Math.floor(Math.random()*letters.length)];
                console.log('computer guess: '+computer);
                i=10;
                $('#guesses').empty(userguess);
            }           
           else if (userguess!==computer && i==0) {  
                lose++;
                computer = letters[Math.floor(Math.random()*letters.length)];
                console.log('computer guess: '+computer);
                i=10;
                $('#guesses').empty(userguess);    
            }
            else{
                i--;
            }
               var html = ' <h1>Psychic game</h1>'+
               '<p>Guess what letter I am thinking of</p>' +
               '<p>wins: '+ win +'</p>' +
               '<p>loses: ' +lose+ '</p>' +
               '<p>remaning guesses: ' + i + '</p>' 
              document.querySelector('#game').innerHTML=html;   
        }