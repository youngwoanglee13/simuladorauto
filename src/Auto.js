
class Auto{
    constructor(){
        this.x=0;
        this.y=0;
        this.direccionActual=0;
        this.direcciones = ['N','E','S','O'];
    }
    ejecutarComando(comando){
        if(comando=="A"){
            this.y=this.y+1;
        }
        if(comando=="D"){
            this.direccionActual++;
        }
        if(comando=="I"){
            this.direccionActual--;
        }
       return this.x+","+this.y+this.direcciones[this.direccionActual%4];
     
    }

}



export default Auto;