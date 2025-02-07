import { Component, inject, OnInit } from '@angular/core';
import { AboutServiceService } from '../../services/about-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  providers: [HttpClient],
})
export class AboutComponent implements OnInit {
  aboutService = inject(AboutServiceService);
  aboutData: any = [];

  ngOnInit(): void {
    this.aboutService.aboutService().subscribe((data: any) => {
      this.aboutData = data;
    });
  }

  // constructor(private aboutService: AboutServiceService) {
  //   console.log(this.aboutData);
  // }
}
