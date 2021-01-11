import { Component, OnInit, Input } from '@angular/core';
import { IInstructor } from '../../interface/instructor';
@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {
  @Input() instructorinput: IInstructor;

  constructor() { }

  ngOnInit(): void {
  }

}
