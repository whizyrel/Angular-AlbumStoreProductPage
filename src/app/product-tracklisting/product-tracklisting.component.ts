import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

import { Album } from '../album';

@Component({
  selector: 'app-product-tracklisiing',
  templateUrl: './product-tracklisiing.component.html',
  styleUrls: ['./product-tracklisiing.component.css']
})
export class ProductTracklistingComponent implements OnInit {
  albumInfo: Album;

  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit() {
    this._productService
      .getAlbum(1)
      .subscribe(response => this.albumInfo = response);
  }
}
