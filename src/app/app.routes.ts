import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { UserComponent } from '../components/user/user.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { authGuard } from '../components/auth/auth.guard';
import { UnauthorizedComponent } from '../components/unauthorized/unauthorized.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  { path: 'profile', component: UserComponent, canActivate: [authGuard] },
  { path: 'gallery', component: GalleryComponent, canActivate: [authGuard] },
];
