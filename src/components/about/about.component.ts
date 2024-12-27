import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/about-data-service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  aboutData: any = [];
  dataLoading: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataLoading = true;
    this.dataService.getDataService().subscribe((data) => {
      this.aboutData = data;
      this.dataLoading = false;
    });
  }
}
