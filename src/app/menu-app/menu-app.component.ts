import { Component } from '@angular/core';
import { IMenu } from "./interfaceMenu";

@Component({
  selector: 'app-menu-app',
  templateUrl: './menu-app.component.html',
  styleUrls: ['./menu-app.component.css']
})
export class MenuAppComponent {
  menus: IMenu[] = [];
  menu: { quantity: number; price: number; name: string };
  pajakPPN: number = 1.1;
  harga: number = 0;

  bayar: number= 0;



  constructor() {
    this.menu = {
      name: "",
      price: 0,
      quantity: 0
    }
  }

  private calculate(): void{
    for (let i in  this.menus){
      this.harga +=
        this.harga + (this.menus[i].price * this.menus[i].quantity)
    }
  }

  addMenu(): void {
    let temp: IMenu = {
      name: this.menu.name,
      price: this.menu.price,
      quantity: this.menu.quantity
    }
    this.menus.push(temp);
    this.harga = 0;
    this.calculate();
  }

  rmvMenu(index: number){
    this.menus.splice(index,1);
    this.harga = 0;
    this.calculate();
  }

}
