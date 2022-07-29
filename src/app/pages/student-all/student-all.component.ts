import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  templateUrl: './student-all.component.html',
  styleUrls: ['./student-all.component.scss'],
})
export class StudentAllComponent implements OnInit {
  constructor(private studentService: StudentService, private router: Router) {}

  students: Student[] = [];
  isLoading: boolean | undefined = true;

  ngOnInit(): void {
    this.studentService
      .getStudents()
      .subscribe((students: Student[] | null) => {
        if (students) this.students = students;
        this.isLoading = false;
      });
  }

  deleteStudent(studentId: string): void {
    this.studentService.deleteStudent(studentId).subscribe((resp) => {
      if (resp) {
        this.router.navigate(['/students']);
        this.students.splice(
          this.students.findIndex(
            (student: Student) => student._id == studentId
          )
        );
      }
    });
  }

  openModal(studentId: string): void {
    const modal = document.querySelector(`#modal-${studentId}`);
    modal?.classList.remove('d-none');
    modal?.classList.add('d-grid');
  }

  closeModal(studentId: string): void {
    const modal = document.querySelector(`#modal-${studentId}`);
    modal?.classList.remove('d-grid');
    modal?.classList.add('d-none');
  }
}
