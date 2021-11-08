function alumno(nombre,apellido1,apellido2,fechaNacimiento,dni,curso)
{
    this.nombre=nombre,
    this.apellido1=apellido1,
    this.apellido2=apellido2,
    this.fechaNacimiento=fechaNacimiento,
    this.dni=dni,
    this.curso=curso

    alumno.prototype.nombreCompleto = function ()
    {
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    }
 
    alumno.prototype.edad = function()
    {
        añoactual= (new Date().getFullYear());

        return añoactual- this.fechaNacimiento.substr(-4);
    }

    alumno.prototype.LetraDNI = function()
    {
        return this.dni.substr(-1);
    }

    alumno.prototype.ValidaDNI = function()
    {
        var numero=this.dni.substr(0,this.dni.length-1);
    
        return  "TRWAGMYFPDXBNJZSQVHLCKE"[numero%23]==this.LetraDNI();
    }

    alumno.prototype.escribir=function(){
        



    }
    
}

var alumno= new alumno(this.nombre,this.apellido1,this.apellido2,this.fechaNacimiento,this.dni,this.curso);

