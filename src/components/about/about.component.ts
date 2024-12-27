import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/about-data-service/data.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  aboutData: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDataService().subscribe((data) => {
      this.aboutData = data;
    });
    console.log(this.aboutData);
  }
}
