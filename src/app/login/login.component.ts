import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router ) {
    this.loginForm = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)], 
      ],
      password: [
        '', 
        [Validators.required],
      ],
    });
  }

  ngOnInit(): void {}

  onSubmission() {
    const loginReq = this.loginForm.value;
    
    if (loginReq.username === 'pravallika' && loginReq.password === '1234') {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid username or password');
    }
  }
}

