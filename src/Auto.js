
class Auto{
    constructor(){
        this.x=0;
        this.y=0;
        this.direccion='N';
    }
    ejecutarComando(comando){
        if(comando=="A"){
            this.y=this.y+1;
        }
       return this.x+","+this.y+this.direccion;
     
    }

}



export default Auto;