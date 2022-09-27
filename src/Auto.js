
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
                if(this.direccionActual%4==0 && this.y+1<10){
                    this.y++;
                }
                if(this.direccionActual%4==2 && this.y-1>=0){
                    this.y--;
                }
                if(this.direccionActual%4==1 && this.x+1<10){
                    this.x++;
                }
                if(this.direccionActual%4==3 && this.x-1>=0){
                    this.x--;
                }
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