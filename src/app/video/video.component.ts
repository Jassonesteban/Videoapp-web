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

  pulsado: number = 0;

  iLiked: boolean = true;
  iDisliked: boolean = false;

  iconLike = "like.png";
  iconDisLike = "dislike.png";

  bodyLikes: any = {
    ContLikes: 0
  }

  bodyDislikes: any = {
    ContDislikes: 0
  }

  ContLikes: number = 0;
  ContDislikes: number = 0;

  likesctuales: number;
  dislikesactuales: number;

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
        this.likesctuales = this.ArrayVideo.video.ContLikes;
        this.dislikesactuales = this.ArrayVideo.video.ContDislikes;
        console.log(this.likesctuales);
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
    this.pulsado++;
    this.ContLikes = 1;
    this.ContLikes = this.ContLikes + this.likesctuales;
    this.bodyLikes.ContLikes = this.ContLikes;
    this.ContDislikes = 0;
    this.iconLike = "likeme.png";
    this.iconDisLike = "dislike.png";
    console.log("Me gusta " + this.ContLikes + " - No me gusta " + this.ContDislikes);

    if(this.pulsado === 1){
      this.getvideosService.updateLikesVideo(this.idVideo, this.bodyLikes).subscribe(
        res => {
          console.log(res);
          alert("Te gusto el video");
          location.reload();
        },
        err => {
          console.log(err);
        }
      )
    } else if(this.pulsado > 1){
      console.log("Ya le diste me gusta");
    }

  }

  public setDislike = () => {
    this.pulsado++;
    this.ContLikes = 0;
    this.ContDislikes = 1;
    this.ContDislikes = this.ContDislikes + this.dislikesactuales;
    this.iconDisLike = "dislikeme.png";
    this.bodyDislikes.ContDislikes = this.ContDislikes;
    this.iconLike = "like.png";
    console.log("No me gusta " + this.ContDislikes + " -  Me gusta " + this.ContLikes);

    if(this.pulsado === 1) {
      this.getvideosService.updateLikesVideo(this.idVideo, this.bodyDislikes).subscribe(
        res => {
          console.log(res);
          alert("No te gusto el video");
          location.reload();
        },
        err => {
          console.log(err);
        }
      )
    }else if(this.pulsado > 1){
      console.log("Ya le diste me gusta");
    }
  }



}
