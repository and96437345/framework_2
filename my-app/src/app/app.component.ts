import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyExperienceComponent } from './my-experience/my-experience.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyPhotoComponent } from './my-photo/my-photo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MyExperienceComponent, MySkillsComponent, MyPhotoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
