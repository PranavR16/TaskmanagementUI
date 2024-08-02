import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  identifier: string = '';  // Property to bind with form input
  errorMessage: string | null = null;  // To display error messages

  constructor(private router: Router) { }
  ngOnInit(): void
  {
    // Initialization logic here, if any
  }
  onSubmit(): void
  {
    // Validate identifier
    if (this.identifier.trim() === '') {
      this.errorMessage = 'Please enter an Employee ID or Email ID.';
      return;
    }

    // Clear error message if validation passes
    this.errorMessage = null;

    // Here, you would typically handle authentication or user validation
    // For demonstration, let's assume successful login redirects to the tasks page
    this.router.navigate(['/users']);  // Navigate to the tasks page
  }
}
