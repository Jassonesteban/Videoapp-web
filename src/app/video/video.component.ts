import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetvideosService } from '../servicios/getvideos.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  idVideo: any;
  ArrayVideo: any = [];
  ArrayCanal: any = [];

  video: any = [];
  canal: any = [];

  iLiked: boolean = true;
  iDisliked: boolean = false;

  iconLike = "like.png";
  iconDisLike = "dislike.png";

  contLikes: number = 0;
  contDislikes: number = 0;

  constructor(private _route: ActivatedRoute, private getvideosService: GetvideosService) {

  }

  ngOnInit() {
    this.idVideo = this._route.snapshot.paramMap.get('id');
    console.log(this.idVideo);
    this.getInfoVideo();
  }

  private getInfoVideo = () => {
    this.getvideosService.GetInfoVideo(this.idVideo).subscribe(
      res => {
        console.log(res);
        this.ArrayVideo = res;
        this.video = this.ArrayVideo.video;
        console.log(this.video);
        this.getInfoCanal(this.ArrayVideo.video.Canal._id);
      },
      err => {
        console.log(err);
      }
    );
  }

  private getInfoCanal = (id: string) => {
    this.getvideosService.getCanalsById(id).subscribe(
      res => {
        console.log(res);
        this.ArrayCanal = res;
        this.canal = this.ArrayCanal.canal;
        console.log(this.canal);
      },
      err => {
        console.log(err);
      }
    )
  }

  public SetLike = () => {
    this.contLikes = 1;
    this.contDislikes = 0;
    this.iconLike = "likeme.png";
    this.iconDisLike = "dislike.png";
    console.log("Me gusta " + this.contLikes + " - No me gusta " + this.contDislikes);
  }

  public setDislike = () => {
    this.contLikes = 0;
    this.contDislikes = 1;
    this.iconDisLike = "dislikeme.png";
    this.iconLike = "like.png";
    console.log("No me gusta " + this.contDislikes + " -  Me gusta " + this.contLikes)
  }

  public DownloadVideo = () => {
    let data: any;
    var blob = new Blob([data], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    window.open(url);
  }

  downloadFile(data: any) {
    var blob = new Blob([data], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    window.open(url);
  }


}
