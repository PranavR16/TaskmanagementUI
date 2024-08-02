import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';  // Adjust the import path as necessary
import { User } from '../../models/user.model';  // Adjust the import path as necessary

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId: number=0;        // Input field for user ID
  user: User | null = null;  // Store user details
  errorMessage: string = ''; // For displaying errors

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Any initialization logic if needed
  }

  onSubmit(): void {
    if (this.userId)
    {
      this.userService.getUserById(this.userId).subscribe
        (
        (data: User) => {
          this.user = data;
          this.errorMessage = '';
        },
        (error) => {
          this.user = null;
          this.errorMessage = 'User not found or an error occurred.';
          console.error('Error loading user:', error);
        }
      );
    } else
    {
      this.errorMessage = 'Please enter a valid User ID.';
    }
  }
}
