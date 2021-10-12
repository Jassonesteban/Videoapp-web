import { Component, OnInit } from '@angular/core';
import { GetvideosService } from '../servicios/getvideos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  GetVideos: any = [];
  listVideos: any = [];
  NameCanalVideo: any;

  constructor(private getvideosService: GetvideosService ) { }

  ngOnInit() {
    this.getVideosHome();
  }

  private getVideosHome = () => {
    this.getvideosService.GetAllVideos().subscribe(
      res => {
        console.log(res);
        this.GetVideos = res;
        this.listVideos = this.GetVideos.videos;
        console.log(this.listVideos);
      },
      err => {
        console.log(err);
      }
    );
  }

}
