import { Component, OnInit, Input } from '@angular/core';
import {ICurso} from '../../../modules/home/interface/instructor'

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
  @Input() curso: ICurso;
  @Input() coverWitdh: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
