import { Component, inject, OnInit, signal } from '@angular/core';
import { WallpaperService } from '../../services/wallpaper.service';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit {
  WallpaperService = inject(WallpaperService);

  wallpapers: any = signal([]);
  wallpapersCategories: any = signal([]);
  wallpaperTempData: any = signal([]);

  ngOnInit(): void {
    this.WallpaperService.getAllWallpaperService().subscribe((res: any) => {
      this.wallpapers.set(res.output);
      this.wallpaperTempData.set(res.output);
    });

    this.WallpaperService.getWallpaperCategories().subscribe((res: any) => {
      this.wallpapersCategories.set(['All', ...res.output]);
    });
  }

  onCategorySelect = (event: any) => {
    if (event.target.value === 'All') {
      this.wallpapers.set(this.wallpaperTempData());
    } else {
      var temp = this.wallpaperTempData().filter(
        (item: any) => item.imageCategory === event.target.value
      );
      this.wallpapers.set(temp);
    }
  };
}
