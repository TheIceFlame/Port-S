import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sp';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'French' },
    { code: 'de', label: 'Deutsch' },
    { code: 'ar', label: 'Arabic' },
    { code: 'es', label: 'Spanish' },
    // Add more languages as needed
  ];

  selectedLanguage: string;

  constructor(private translate: TranslateService) {
    // Initialize with a default language if needed
    this.selectedLanguage = 'en';
  }

  ngOnInit(): void {
    // Retrieve the saved language from localStorage or use default
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      this.selectedLanguage = savedLanguage;
    }

    // Set the default language and apply the selected language
    this.translate.setDefaultLang(this.selectedLanguage);
    this.translate.use(this.selectedLanguage);
  }

  changeSiteLanguage(localeCode: string): void {
    this.selectedLanguage = localeCode; // Update selected language
    this.translate.use(localeCode);

    // Save the selected language to localStorage
    localStorage.setItem('selectedLanguage', localeCode);

    console.log('Current Language:', this.translate.currentLang);
  }
}
