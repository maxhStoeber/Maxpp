import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from "./about/about.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ToolsComponent} from "./tools/tools.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {SettingsComponent} from "./settings/settings.component";
import {ProfileComponent} from "./profile/profile.component";
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'tools', component: ToolsComponent},
  { path: 'statistics', component: StatisticsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '**', redirectTo: 'home'}
];
