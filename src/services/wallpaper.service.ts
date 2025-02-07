import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WallpaperService {
  constructor(private http: HttpClient) {}

  getAllWallpaperService(): Observable<any> {
    return this.http.post(
      'https://pixelz-wallpapers-server-2.onrender.com/getAllWallpapers',
      {}
    );
  }

  getWallpaperCategories(): Observable<any> {
    return this.http.post(
      'https://pixelz-wallpapers-server-2.onrender.com/getAllWallpapersCategories',
      {}
    );
  }
}
