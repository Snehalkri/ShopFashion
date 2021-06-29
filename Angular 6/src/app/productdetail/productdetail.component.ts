import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  @Input()
  product: Product;


  constructor() { }

  ngOnInit() {
  }

}
