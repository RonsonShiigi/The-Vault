'use strict';
module.exports = function() {
    let obj ={};
    
       
        function getValue (key){
            if(key in obj){
                
                return obj[key]
                
            }else{
                
                return null}
            
        };
        function setValue(key,value) {
            obj[key]=value;
            return obj.key
        }
            
        return {
            getValue,
            setValue,
        }

    
};