import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'docs';
  loading = false;

  constructor(){
    this.test()
  }

  test(){
    setTimeout(() => {
      this.loading = !this.loading;
      //this.test();
    }, 3000);
  }
}
