import { Component, Input } from "@angular/core";
import { ProjectService } from "../project.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
  providers: [ProjectService],
})
export class HeaderComponent {
  @Input() informationUser: any;
  infoUser: any;

  constructor(private projectService: ProjectService) {}
}
