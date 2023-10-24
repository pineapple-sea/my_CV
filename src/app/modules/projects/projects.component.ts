import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public projects = [
    {
      name: 'Aspiratio',
      description: 'Social network for timemanagment and motivation',
      link: 'https://aspiratio.pp.ua/'
    },
    {
      name: 'Ucode IT academy',
      description: 'implementation gamification and developing parts of the learning-management system',
      link: null
    },
    {
      name: 'Numuw',
      description: 'health care system for children with development problems',
      link: 'https://numuw.com/'
    }
  ]
}
