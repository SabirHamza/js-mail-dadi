const emaillist = ['dannoiweinigra-5406@yopmail.com',
                   'mubreuhimmapri-9295@yopmail.com',
                   'besseseumineu-2369@yopmail.com',
                   'brazauwubasa-7664@yopmail.com',
                   'prinnepazoba-2318@yopmail.com',
                   'h.sabir.ma@gmail.com']
    


send.addEventListener(
    "click",
    
    function(){
        
        const useremail = document.getElementById('email').value;

        let allow = false;

        for(let i = 0; i < emaillist.length; i++){

            const current = emaillist[i];
        
            if(useremail == current){
                
                allow = true;
            }
        }
        
        if(allow){
        
            document.getElementById('check').innerHTML = 'benvenuto';
        }
        
        else{
        
            document.getElementById('check').innerHTML = 'email inserita non valida';
        }
    }
)

