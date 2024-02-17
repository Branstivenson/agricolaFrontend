import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private usuarioService:UsuarioService){}

  public usuario={
  identificacion:'',
  nombre:'',
  direccion:'',
  telefono:'',
  correoElectronico:'',
  password:''
  }

  formSubmit(){
    console.log(this.usuario);
    if(this.usuario.identificacion == '' || this.usuario.identificacion == null){
      alert('El número de identificación de usuario es requerido');
      return;
    }
  

    this.usuarioService.newUsuraio(this.usuario).subscribe(
     (data)=>{
        console.log(data);
        alert('usuario guardado con exito')
      },(error)=> {
        console.log(error);
        alert('Ha ocurrido un error en el sistema');
      }
   )
  }
}
