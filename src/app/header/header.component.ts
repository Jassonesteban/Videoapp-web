import { Component, OnInit } from '@angular/core';
import { GetvideosService } from '../servicios/getvideos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin:any;
  idVideo: any;
  arrayVideo: any = [];

  firstInformation: any = {
    Nombre: "",
    Description: "",
    Canal: localStorage.getItem("idCanal")
  }

  videoInfo: any = [];

  fileVideo: any = {
    video: File
  }

  constructor(private getvideosService: GetvideosService) { }

  ngOnInit() {
    this.isLogin = localStorage.getItem("logged");
    console.log(this.isLogin);
  }

  public loggedoutsession = () => {
    localStorage.clear();

    setTimeout(() => {
        location.reload();
    }, 2000);

  }

  public SubirInfoVideo = () => {
    let CardStepOne = ((document.getElementById("stepOne") as HTMLInputElement));
    let CardStepTwo = ((document.getElementById("stepTwo") as HTMLInputElement));


    this.getvideosService.uploadInfoVideo(this.firstInformation).subscribe(
      res => {
        console.log(res);
        this.arrayVideo = res;
        this.idVideo = this.arrayVideo.video.Vid;
        CardStepOne.style.display = "none";
        CardStepTwo.style.display = "block";
        this.FindInfoVideo(this.idVideo);
      },
      err => {
        console.log(err);
      }
    );

  }

  private FindInfoVideo = (id: string) => {

  }

  public upload = () => {
    let pathVideo = ((document.getElementById("formFile") as HTMLInputElement).files[0]);
    console.log(pathVideo);
    this.fileVideo.video = pathVideo;
    this.getvideosService.UploadFileVideo(this.idVideo, this.fileVideo.video).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  public fileChangeListener($event) {
    let fileList: FileList = $event.target.files;
    let data = {};
    if (fileList.length > 0) {
        let file: File = fileList[0];
        console.log('video seleccionado', file);
        this.getvideosService.UploadFileVideo(this.idVideo, file).subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);
          }
        );
    }
}

}
