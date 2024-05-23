var nro1
                
                do {nro1 = prompt( "Introduzca un numero: " , "[entre 1 y 2]"); }
                while (validaIngreso (nro1) );
             
             console.log(convierteDia (nro1) );

function validaIngreso (x)  {
       if (x<1 || x>2) return true;
       
       else return false;
    
    
    
  }
  
  function convierteDia  (d)  {
        
        if  (nro1 == 1) {
            return ("Masculino");
        }   
        else {
            if  (nro1 == 2) {
                return ("Femenino");     
                }
            }
        }