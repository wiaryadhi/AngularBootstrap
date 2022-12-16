import {Component, OnInit} from '@angular/core';
import {ProductService} from "./services/product.service";
import {Product} from "./model/product";
import {PostService} from "./services/post.service";
import {IPost} from "./model/i-post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularBootstrap';
  products: Product[];
  productService: ProductService;
  posts: IPost[] = [];

  constructor(private postService: PostService) {

    this.products = [];
    this.productService = new ProductService();
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.posts = this.postService.getAllPost();
  }

  getProducts(){
  }
}
