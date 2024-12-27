import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { DataService } from '../../services/about-data-service/data.service';

@Component({
  selector: 'app-dashboard',
  imports: [
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [DataService],
})
export class DashboardComponent {
  user = 'Athul';
  selectedDashboardPage = 'home';

  onSelectedDashboardChange(page: any) {
    this.selectedDashboardPage = page;
  }
}
