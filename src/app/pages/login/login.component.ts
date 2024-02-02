import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from '../project.service';
import Swal from 'sweetalert2';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, switchMap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [ProjectService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any
  constructor(private fb: FormBuilder,
    public http: HttpClient,
    private router: Router,
    private projectService: ProjectService
  ) {

  }
  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  loginUser = []
  login(value: any) {

    debugger

    this.projectService.singupData().subscribe((res: any) => {
      debugger

      const response = Array.from(res).some((d: any) => d.password == value.password)
      if (response) {
        this.projectService.messageLog('login is successfully', 'success')
        setTimeout(() => {
          this.router.navigate(['/dashboard'])
        }, 500);
      } else {
        this.projectService.messageLog('password is not corect', 'error')
        setTimeout(() => {
          this.router.navigate(['/signUp'])
        }, 700);
      }

    })

  }
}
