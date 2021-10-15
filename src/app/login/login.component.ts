import { Component, OnInit } from '@angular/core';
import { GetvideosService } from '../servicios/getvideos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  islogin: string = "false";

  credentialsUser: any = {
    correo: "",
    password: ""
  }

  constructor(private getvideosService: GetvideosService) { }

  ngOnInit(): void {
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
      });
  }

  public validateLoginUser = () => {
    this.validateForm();
    this.getvideosService.validarLogin(this.credentialsUser).subscribe(
      res => {
        this.islogin = "true";
        localStorage.setItem("logged", this.islogin);
        setTimeout(() => {
          location.reload();
        }, 2000);
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

}
