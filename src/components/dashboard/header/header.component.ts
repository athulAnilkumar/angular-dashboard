import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private route: Router) {}

  [x: string]: any;
  @Input() user!: string;
  @Input() selectedDashboardPage!: string;
  @Output() onSelectedDashboardChange = new EventEmitter<string>();

  onLogoClick() {
    this.route.navigateByUrl('/dashboard');
  }

  onHomeClick() {
    this.selectedDashboardPage = 'home';
    this.onSelectedDashboardChange.emit(this.selectedDashboardPage);
  }

  onAboutClick() {
    this.selectedDashboardPage = 'about';
    this.onSelectedDashboardChange.emit(this.selectedDashboardPage);
  }

  onContactClick() {
    this.selectedDashboardPage = 'contact';
    this.onSelectedDashboardChange.emit(this.selectedDashboardPage);
  }
}
