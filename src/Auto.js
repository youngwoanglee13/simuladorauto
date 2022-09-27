
class Auto{
    constructor(){
        this.x=0;
        this.y=0;
        this.direccion='N';
    }
    ejecutarComando(){
       return this.x+","+this.y+this.direccion;
     
    }

}



export default Auto;