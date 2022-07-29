import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  children: any [] = [];
  constructor(private studentservice:StudentService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getstudents();

  }


  getstudents(): void   {

    this.studentservice.getAll().subscribe(data => this.children = data);
  }
}
