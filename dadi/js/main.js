generate.addEventListener(
    "click",

    function(){
        
        const computer = Math.floor(Math.random()*6)+1;

        document.getElementById('computerresult').innerHTML = computer
        
        const user = Math.floor(Math.random()*6)+1;
        
        document.getElementById('userresult').innerHTML = user

        if(user > computer){
            
            document.getElementById('winner').innerHTML = 'Hai Vinto!!'
        }
        
        else if (user < computer){
            
            document.getElementById('winner').innerHTML = 'Ritenta sarai più fortunato'
        }

        else{

            document.getElementById('winner').innerHTML = 'Pareggio!!'
        }
    }
)