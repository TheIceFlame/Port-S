import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'French' },
    { code: 'de', label: 'Deutsch' },
    { code: 'ar', label: 'Arabic' },
    { code: 'es', label: 'Spanish' },
    
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
