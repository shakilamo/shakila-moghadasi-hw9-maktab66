function habit(str){
    const Eat = ["breakfast","lunch","dinner"]
    const Hour = ["9.00","14.00","21.00"]
    let time1 = str.split(" ")
    let time = time1[0].split(":")
    time[0]=Number(time[0])
    time[1]=Number(time[1])
    if(time1[1]==="p.m."){
        time[0]+=12;
    }
    const Times = Hour.map(
              (value) =>{
                if((Number(value) - time[0])>0){
                          if(time[1]=== 0){
                             return Number(value) - time[0]
                          }
                          else{
                             time[1]=60 -time[1]
                             return Number(value) - time[0]-1    
                          }
                }
                else{
                     return Infinity
                }
              }
              );
    let Hour2=Math.min(...Times)
    let index = Times.findIndex(value => value ===Hour2);
    let food 
    food = Eat[index]
    
              if ((Hour2===0)&&(time[1]===0)){
                return`time to eat ${food}`
              }
              else if ((Hour2===0)&&(time[1]>1)){
                return `${time[1]} minutes until the next meal, ${food}`
              }
              else if ((Hour2===0)&&(time[1]===1)){
                return `${time[1]} minute until the next meal, ${food}`
              }  
              else if((Hour2===1)&&(time[1]>1)){
                return `${Hour2} hour and ${time[1]} minutes until the next meal, ${food}`
              }  
              else if((Hour2===1)&&(time[1]===1)){
                return `${Hour2} hour and ${time[1]} minute until the next meal, ${food}`
              }   
              else if(time[1]===0){
                return `${Hour2} hour until the next meal, ${food}`
              }  
              else if((Hour2>1)&&(time[1]===1)){
                return `${Hour2} hours and ${time[1]} minute until the next meal, ${food}`
              }  
              else{
                return `${Hour2} hours and ${time[1]} minutes until the next meal, ${food}`   
              }                      
}
console.log(habit("6:00 p.m."))
console.log(habit("7:45 a.m."))