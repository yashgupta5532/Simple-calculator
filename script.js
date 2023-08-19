string =document.getElementsByName("display");
string="";
buttons=document.querySelectorAll('button');
Array.from(buttons).forEach((a)=>{
    a.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;

        }
        else if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value=string;
            
        }
        
        else if(e.target.innerHTML=='DEL'){
            string =string.slice(0,string.length-1)
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='π'){
            string=string+3.14;
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='**'){
            string1=Number.parseInt(string)
            string=(string1*string1);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='√'){
           
            const inputNumber = parseFloat(string); // Parse the input as a floating-point number
            const sqrtResult = Math.sqrt(inputNumber); 
            string = sqrtResult.toString();
            document.querySelector('input').value = string; 

            // string1=Number.parseInt(string);
            // string=Math.sqrt(string1);
            // document.querySelector('input').value=string;
        }
        else{
            // console.log(e.target);
            string =string + e.target.innerHTML;
            document.querySelector('input').value=string;

        }
    })
})