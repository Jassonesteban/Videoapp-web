import { Component, OnInit } from '@angular/core';
import { GetvideosService } from '../servicios/getvideos.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  islogin: string = "false";
  arrayUser: any = [];
  userInfo: any = [];
  idUser: any;
  arrayCanal: any = [];
  CanalInfo: any = [];
  idCanal: any;

  user: any = {
    "Nombre": "",
    "Apellidos": "",
    "Correo": "",
    "Password": ""
  }

  canal: any = {
      "Nombre": "",
      "Description": "",
      "Owner": ""
  }

  msgAlert: any = {
    Type: "",
    msg: ""
  }
  constructor(private getvideosService: GetvideosService) { }

  ngOnInit() {
  }

  private validateForm = () => {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  }

  public newAcountUser = () => {
    let boxAcount = ((document.getElementById("newAcountUser") as HTMLInputElement));
    let boxCanal = ((document.getElementById("formNewCanal") as HTMLInputElement));
    let alert = ((document.getElementById("alertInfoAcount") as HTMLInputElement));
    this.validateForm();
    console.log(this.user);
    this.getvideosService.NewUser(this.user).subscribe(
      res => {
        this.islogin = "true";
        localStorage.setItem("logged", this.islogin);
        alert.style.display = "block";
        this.msgAlert.Type = "alert-success";
        this.msgAlert.msg = "¡Excelente, su cuenta fue creada, ahora vamos a crear tu canal!, no cierres esta ventana";
        boxAcount.style.display = "none";
        boxCanal.style.display = "block";
        console.log(res);
        this.arrayUser = res;
        this.userInfo = this.arrayUser.user;
        console.log(this.userInfo);
        this.idUser = this.userInfo.userid;
        console.log(this.idUser);
        this.getInfoUser(this.idUser);
        this.canal.Owner = this.idUser;
      },
      err => {
        console.log(err);
        alert.style.display = "block";
        this.msgAlert.Type = "alert-danger";
        this.msgAlert.msg = "Ha ocurrido un error inesperado, no se pudo crear la cuenta";
        boxCanal.style.display = "none";
      }
    );
  }

  private getInfoUser = (id: string) => {
    this.getvideosService.getInfoUser(id).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }


  public newCanal = () => {
    this.validateForm();
    console.log(this.canal);
    this.getvideosService.NewCanal(this.canal).subscribe(
      res => {
        console.log(res);
        this.arrayCanal = res;
        this.idCanal = this.arrayCanal.canal.Cid;
        localStorage.setItem("idCanal", this.idCanal);
        window.location.href = "/home";
      },
      err => {
        console.log(err);
      }
    )
  }
}



