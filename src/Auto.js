
class Auto{
    constructor(){
        this.x=0;
        this.y=0;
        this.direccionActual=0;
        this.direcciones = ['N','E','S','O'];
    }
    ejecutarComando(comando){
        for(var i=0;i<comando.length;i++){
            if(comando.charAt(i)=="A"){
                this.y=this.y+1;
            }
            if(comando.charAt(i)=="D"){
                this.direccionActual++;
            }
            if(comando.charAt(i)=="I"){
                this.direccionActual--;
            }
        }
        
       return this.x+","+this.y+this.direcciones[this.direccionActual%4];
     
    }

}



export default Auto;