import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  title: string ="Infinite Scroll";

  data: any[] = Array(20);

  @ViewChild (IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log(event);


    setTimeout(() => {

      const newArr= Array(20);
      this.data.push( ...newArr);
      if(this.data.length===100){
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      event.target.complete();
      this.infiniteScroll.complete();
    }, 1500);
  }

}
