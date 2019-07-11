import {Component, Input, OnInit} from '@angular/core';
import {TechnologyStack} from '../technologyStack.model';
import {Technology} from '../technology.model';

@Component({
  selector: 'app-technology-stack',
  templateUrl: './technology-stack.component.html',
  styleUrls: ['./technology-stack.component.css']
})
export class TechnologyStackComponent implements OnInit {
  @Input() public stack: TechnologyStack;
  @Input() public technologies: Technology[];
  constructor() { }

  ngOnInit() {
  }

}
