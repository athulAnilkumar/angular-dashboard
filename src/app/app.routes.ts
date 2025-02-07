import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { UserComponent } from '../components/user/user.component';
import { GalleryComponent } from '../components/gallery/gallery.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: UserComponent },
  { path: 'gallery', component: GalleryComponent },
];
