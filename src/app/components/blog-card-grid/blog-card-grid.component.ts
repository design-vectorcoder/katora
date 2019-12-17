import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card-grid',
  templateUrl: './blog-card-grid.component.html',
  styleUrls: ['./blog-card-grid.component.scss']
})
export class BlogCardGridComponent implements OnInit {

  @Input() data: string;

  constructor() { }

  ngOnInit() {
  }

}
