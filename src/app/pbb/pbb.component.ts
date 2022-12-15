import { Component } from '@angular/core';

@Component({
  selector: 'app-pbb',
  templateUrl: './pbb.component.html',
  styleUrls: ['./pbb.component.css']
})
export class PbbComponent {

  luasTanah: number = 0;
  luasBangunan:number = 0;
  NJOPT: number = 0;
  NJOPB: number = 0;

  njoptkp:number = 12000000;
  njkp: number = 0.2;
  pbb:number = 0.005;
  stimulus: number = 15000;

  hrgPBB: number = 0;

  hrgTanah: any = 0;
  hrgBangunan: any = 0;

  hitungPBB(){
    this.hrgTanah= this.luasTanah* this.NJOPT;
    this.hrgBangunan= this.luasBangunan*this.NJOPB;
    this.hrgPBB = ((((this.hrgTanah+this.hrgBangunan)-this.njoptkp)*this.njkp)*this.pbb)-this.stimulus;

    // this.luasTanah = 0;
    // this.luasBangunan = 0;
    // this.njopBangunan = 0;
    // this.njopTanah = 0;
  }


}
