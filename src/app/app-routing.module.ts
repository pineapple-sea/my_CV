import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    loadComponent: () =>
      import('./modules/main/main.component').then((m) => m.MainComponent),
  },
  {
    path: 'about-me',
    loadComponent: () =>
      import('./modules/about-me/about-me.component').then(
        (m) => m.AboutMeComponent
      ),
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./modules/skills/skills.component').then(
        (m) => m.SkillsComponent
      ),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./modules/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
