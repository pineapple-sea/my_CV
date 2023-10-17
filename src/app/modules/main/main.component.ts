import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import gsap from 'gsap';
import { MatIconModule } from '@angular/material/icon';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  private tl = gsap.timeline();

  constructor() {}

  ngOnInit() {
    this.animateElements();
  }

  private textAnimation() {
    this.tl.from('.text-wrapper', {
      duration: 1.8,
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });
  }
  private animateElements() {
    this.tl
      .from('.container, .image-wrapper', {
        y: 100,
        duration: 1,
        ease: 'powe1.outIn',
      })
      .from(
        'img',
        { scale: 1.3, opacity: 0, duration: 1, ease: 'power1.outIn' },
        '<'
      );

    // this.textAnimation();
  }
}
