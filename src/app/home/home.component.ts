import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showSplash = true;

  ngOnInit(): void {
    // Show splash screen for 18 seconds
    setTimeout(() => {
      this.showSplash = false;
    }, 6000); // Duration should match the CSS animation duration
  }
}
