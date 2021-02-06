import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.css']
})
export class DirectivesExampleComponent implements OnInit {
  isHiddenDisplayed = false;
  changes = []

  constructor() { }

  ngOnInit(): void {
  }
  
  changeState() {
    this.isHiddenDisplayed = !this.isHiddenDisplayed;
    this.changes.push(new Date());
  }
}
