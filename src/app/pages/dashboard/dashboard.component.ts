import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { ProjectService } from "../project.service";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
  providers: [ProjectService],
})
export class DashboardComponent implements OnInit, OnDestroy {
  informationUser: any;
  subscription: Subscription;
  constructor(
    private projectService: ProjectService,
    private activatedRout: ActivatedRoute
  ) {
    this.subscription = this.activatedRout.params.subscribe((res) => {
      this.informationUser = res;
    });
  }
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
