import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetvideosService {

  URL = "https://videoapp-web.herokuapp.com/";

  constructor(private http: HttpClient) { }

  public GetAllVideos = () => {
    return this.http.get(this.URL + "api/video");
  }

  public getCanalsById = (id: string) => {
    return this.http.get(this.URL + "api/canal/" + id);
  }

  public getVideo = (id: string) => {
    return this.http.get(this.URL + "api/uploads/videoFiles/" + id);
  }

  public GetInfoVideo = (id: string) => {
    return this.http.get(this.URL + "api/video/" + id);
  }

  public NewUser = (user: string) => {
    return this.http.post(this.URL + "api/users", user);
  }

  public getInfoUser = (id: string) => {
    return this.http.get(this.URL + "api/users/" + id);
  }

  public NewCanal = (canal: string) => {
    return this.http.post(this.URL +"api/canal", canal);
  }

  public uploadInfoVideo = (infoVideo: string) => {
    return this.http.post(this.URL + "api/video", infoVideo);
  }

  public UploadFileVideo = (id: string, info: any) => {
    return this.http.put(this.URL + "api/uploads/videoFiles/" + id, info);
  }

  public validarLogin = (credentials: string) => {
    return this.http.post(this.URL + "api/login", credentials);
  }

  public updateLikesVideo = (id: string, likes: number) => {
    return this.http.put(this.URL + "api/video/" + id, likes);
  }
}
