import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popular-product',
  templateUrl: './popular-product.component.html',
  styleUrls: ['./popular-product.component.scss']
})
export class PopularProductComponent implements OnInit {

  @Input() data: string;

  constructor() { }

  ngOnInit() {
  }

}
