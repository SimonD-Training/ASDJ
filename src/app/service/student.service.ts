import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class StudentService {
private REST_FULL_API = "http://localhost:3000/api/v1/students/";
private http_Headers = {
  headers: new  HttpHeaders({'Content-Type': 'application/json'})
}

getAll(): Observable<any>{
  return this.http.get<any>(this.REST_FULL_API);
}


  constructor( private http: HttpClient) { }
}
