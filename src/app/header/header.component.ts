import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import {VisitService} from "../services/visit.service";

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

  constructor(private translate: TranslateService,private service:VisitService) {

    this.selectedLanguage = 'en';
  }
  registerVisit(): void {
    this.service.registerVisit().subscribe(
      response => {
        console.log('Visit registered:', response);
      },
      error => {
        console.error('Error registering visit:', error);
      }
    );
  }
  ngOnInit(): void {
    this.registerVisit();
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
