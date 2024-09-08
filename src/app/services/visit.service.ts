import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {lastValueFrom, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  private baseUrl = environment.apiUrl; // Base URL from environment

  constructor(private http: HttpClient) { }

  // Method to register a visit
  registerVisit(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = `${this.baseUrl}api/visitors/register`; // Combine base URL with endpoint

    return this.http.get(url, { headers });
  }

  SendMail(formData: any){
    return lastValueFrom(this.http.post<any>(environment.apiUrl+ `api/contact/submit`, formData ))
  }
}
