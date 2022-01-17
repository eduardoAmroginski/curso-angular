import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  name: string = 'Luke';
  isJedi: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
