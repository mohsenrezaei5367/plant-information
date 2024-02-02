import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ProjectService } from "../project.service";
import Swal from "sweetalert2";
import { NavigationExtras, Router, RouterModule } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { from, switchMap } from "rxjs";
interface Credentials {
  email: string;
  password: number;
}
@Component({
  selector: "app-login",
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
  providers: [ProjectService],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    public http: HttpClient,
    private router: Router,
    private projectService: ProjectService
  ) {}
  ngOnInit(): void {
    this.createForm();
    let userString: string | null = localStorage.getItem("user");
    if (userString) {
      let user: any = JSON.parse(userString);
      this.loginForm.patchValue({
        email: user.email, // Assuming the username field in the form corresponds to the user's email
        password: user.password,
      });
    }
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  loginUser = [];
  login(value: any) {
    this.projectService.singupData().subscribe((res: any[]) => {
      const user = res.find(
        (d: any) => d.password === +value.password && d.email === value.email
      );

      if (user) {
        this.projectService.messageLog("login is successful", "success");
        setTimeout(() => {
          this.router.navigate(["/dashboard", user]);
        }, 500);
      } else {
        this.projectService.messageLog(
          "username or password is incorrect",
          "error"
        );
        setTimeout(() => {
          this.router.navigate(["/signUp"]);
        }, 700);
      }
    });
  }
}
