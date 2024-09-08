import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VisitService} from "../services/visit.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  showSplash = true;
  contactForm!: FormGroup;


  ngOnInit(): void {
    this.initform()
    // Show splash screen for 18 seconds
    setTimeout(() => {
      this.showSplash = false;
    }, 6000); // Duration should match the CSS animation duration
  }

  constructor(private translate:TranslateService,private fb: FormBuilder,private service: VisitService,public snackBar: MatSnackBar) {
  }
  initform(){
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  Submit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.service.SendMail(formData).then((res)=>{
        this.snackBar.open(this.translate.instant("contact_me.form.successMessage"), "", {
          duration: 2000,
        });
      })
    }else {
      this.snackBar.open(this.translate.instant("contact_me.form.errorMessage"), "", {
        duration: 2000,
      });
    }
  }
}
