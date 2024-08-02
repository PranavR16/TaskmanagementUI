import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service'; // Adjust the import path as necessary
import { Report } from '../../models/report.model'; // Adjust the import path as necessary

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reports: Report[] = [];
  selectedReportType: string = ''; // Default to empty string to avoid loading on init

  constructor(private reportService: ReportService) { }

  ngOnInit(): void
  {
    // Not loading any reports on init, waiting for user input
  }

  loadReports(reportType: string): void {
    console.log('Loading reports for type:', reportType);
    if (reportType === 'weekly') {
      this.reportService.getWeeklyReports().subscribe(
        (data: Report[]) => {
          console.log('Weekly reports loaded:', data);
          this.reports = data;
        },
        (error) => {
          console.error('Error loading weekly reports:', error);
        }
      );
    } else if (reportType === 'monthly') {
      this.reportService.getMonthlyReports().subscribe(
        (data: Report[]) => {
          console.log('Monthly reports loaded:', data);
          this.reports = data;
        },
        (error) => {
          console.error('Error loading monthly reports:', error);
        }
      );
    } else {
      console.error('Invalid report type');
    }
  }

  onReportTypeChange(): void
  {
    console.log('Report type changed to:', this.selectedReportType);
    this.loadReports(this.selectedReportType);
  }
}
