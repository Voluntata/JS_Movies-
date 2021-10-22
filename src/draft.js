function hoursToMinutes(array) {
    const result1 = array.filter(item => {
  
      //obtiene duration y convierte a un array
    let itemDuration = item.duration.split(' ');
  
   let horas;
   let minutos;
  //para cada elemento de duration elimina 'h' y 'min
    itemDuration.map(e =>{
       if (e.includes('h')){
       horas = parseInt(e.replace('h', ''))*60;  
       minutos = 0; 
      }      
      else if (e.includes('min')){
       minutos = parseInt(e.replace('min', ''));
       horas = horas;
      } 
   //calcula duracion en minutos 
   let newItemDuration = parseInt(minutos) + parseInt(horas);
   console.log(newItemDuration);
  //reemplaza valor de duration
  item.duration = newItemDuration;
    })
  
   return item;
     }); 
    console.log("EXERCICE 7 ->", result1, array);
    return result1;
  }
