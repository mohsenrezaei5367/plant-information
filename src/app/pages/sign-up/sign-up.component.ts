import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { ProjectService } from "../project.service";

@Component({
  selector: "app-sign-up",
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: "./sign-up.component.html",
  styleUrl: "./sign-up.component.scss",
  providers: [ProjectService],
})
export class SignUpComponent {
  signForm: FormGroup | any;
  constructor(
    private fb: FormBuilder,
    public http: HttpClient,
    private router: Router,
    private projectService: ProjectService
  ) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.signForm = this.fb.group({
      fullName: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  signUp(value: any) {
    const model = {
      fullName: value.fullName,
      phone: value.phone,
      email: value.email,
      password: +value.password,
    };
    this.projectService.singupApi(model).subscribe((res: any) => {
      if (res) {
        this.projectService.messageLog("signup is successfully", "success");
        localStorage.setItem("user", JSON.stringify(res));
        setTimeout(() => {
          this.router.navigate(["/login"]);
        }, 500);
      }
    });
  }
}
