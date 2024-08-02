import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Report } from '../models/report.model';  // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiUrl = 'https://localhost:7051/api/Reports';  // Adjust the URL as necessary

  constructor(private http: HttpClient) { }

  getWeeklyReports(): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.apiUrl}/weekly`).pipe(
      catchError(this.handleError)
    );
  }

  getMonthlyReports(): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.apiUrl}/monthly`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
