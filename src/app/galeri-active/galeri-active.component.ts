import { Component } from '@angular/core';

@Component({
  selector: 'app-galeri-active',
  templateUrl: './galeri-active.component.html',
  styleUrls: ['./galeri-active.component.css']
})
export class GaleriActiveComponent {
  images: string[] = [
    "https://picsum.photos/300/300?random=1",
    "https://picsum.photos/300/300?random=2",
    "https://picsum.photos/300/300?random=3"]


  constructor() {
  }

  addImage() {
    let rand: number = Math.floor(Math.random() * 60);
    this.images.push(`https://picsum.photos/300/300?random=${rand}`);
  }
}
