import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: []
})
export class AppComponent {
  title = 'mi_portfolio';
  
  ngOnInit(): void {
    this.setupSmoothScrolling();
  }

  setupSmoothScrolling(): void {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')!.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      });
    });
  }
}
