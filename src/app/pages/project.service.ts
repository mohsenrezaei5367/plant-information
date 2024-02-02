import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Swal from "sweetalert2";
import { ApiService } from "../services/api.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  constructor(public http: HttpClient) {}

  singupApi(model: any): Observable<any> {
    return this.http.post("http://localhost:3004/singup", model);
  }
  singupData(): Observable<any> {
    return this.http.get("http://localhost:3004/singup");
  }

  messageLog(message: string, iconMessage: any) {
    Swal.fire({
      position: "top-end",
      icon: iconMessage,
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
