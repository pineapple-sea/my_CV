import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  public hardSkills: Array<string> = [
    'JavaScript',
    'TypeScript',
    'Angular',
    'Ionic',
    'React.js',
    'HTML',
    'CSS',
    'SASS',
    'SCSS',
    'Angular Material',
    'Material UI',
    'Bootstrap',
    'Unit testing (Karma, Jasmine)',
    'RxJs',
    'NgRx',
    'Redux',
    'i18n',
    'Git',
    'Webpack',
    'Figma',
    'Photoshop',
    'Trello',
    'Asana',
    'Jira',
    'Confluence',
    'GitHub',
    'GitLab',
    'Vercel',
  ];
  public softSkills: Array<string> = [
    'teamwork',
    'patience',
    'self-organisation',
    'communication',
    'flexibility',
    'accountability',
    'listening',
    'problem-solving',
    'critical thinking',
    'self-learning',
    'time management'
  ];
}
