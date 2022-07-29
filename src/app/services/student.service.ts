import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student, StudentAcc } from '../interfaces/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  /**
   * Gets all students from the API
   * @returns An observable list of the `Student` interface
   */
  getStudents(): Observable<Student[] | null> {
    let obs = new Observable<Student[] | null>((observer) => {
      this.http.get<Student[]>(`${environment.apiUrl}/students`).subscribe({
        next: (data) => {
          observer.next(data);
        },
        error: (err) => {
          observer.next(null);
          console.error(err);
        },
      });
    });
    return obs;
  }

  /**
   *
   * @param studentId
   * @returns
   */
  getStudent(studentId: string): Observable<Student | null> {
    let obs = new Observable<Student | null>((observer) => {
      this.http
        .get<Student>(
          `${environment.apiUrl}/students/find?by=id&q=${studentId}`
        )
        .subscribe({
          next: (data) => {
            observer.next(data);
          },
          error: (err) => {
            observer.next(null);
            console.error(err);
          },
        });
    });
    return obs;
  }

  /**
   * Create a student document and add them to the MongoDB
   * @param postBody The FormData used to create a student
   */
  createStudent(postBody: any): Observable<Student[] | null> {
    let obs = new Observable<Student[] | null>((observer) => {
      this.http
        .post<Student[]>(`${environment.apiUrl}/students/create`, postBody)
        .subscribe({
          next: (data) => {
            observer.next(data);
          },
          error: (err) => {
            observer.next(null);
            console.error(err);
          },
        });
    });
    return obs;
  }

  /**
   * Edit a student document in the MongoDB
   * @param studentId The ObjectId for the MongoDB document
   * @param postBody The FormData used to create a student
   */
  editStudent(studentId: string, postBody: any): Observable<Student | null> {
    let obs = new Observable<Student | null>((observer) => {
      this.http
        .put<Student>(
          `${environment.apiUrl}/students/update/${studentId}`,
          postBody
        )
        .subscribe({
          next: (data) => {
            observer.next(data);
          },
          error: (err) => {
            observer.next(null);
            console.error(err);
          },
        });
    });
    return obs;
  }

  /**
   * Delete a student document from the MongoDB
   * @param studentId The ObjectId for the MongoDB document
   */
  deleteStudent(studentId: string): Observable<Student | null> {
    let obs = new Observable<Student | null>((observer) => {
      this.http
        .delete<Student>(`${environment.apiUrl}/students/delete/${studentId}`)
        .subscribe({
          next: (data) => {
            observer.next(data);
          },
          error: (err) => {
            console.error(err);
            observer.next(null);
          },
        });
    });
    return obs;
  }
}
