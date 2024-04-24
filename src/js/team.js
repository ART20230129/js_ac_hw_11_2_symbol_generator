export default class Team {
        constructor(){
                    this.units = new Set();
        }
    
        addUnit(unit){
                    this.units.add(unit)          
                    
        }
            
        *[Symbol.iterator]() {

          //Вариант 1
          /*let units = this.units;
            for(let i = 0; i < units.size; i++){ //// у нас используется Set()!!!
                yield [...units][i]
            }  */

          //Вариант 2
            for (const item of this.units) {
              yield item;  
            }  
          
        }
    }