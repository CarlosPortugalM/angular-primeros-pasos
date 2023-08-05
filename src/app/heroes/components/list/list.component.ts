import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public deletedHero?: string;
  public heroNames: string[] = ['Spiderman', 'Hulk', 'Captain America', 'Shehulk'];

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
    console.log(this.deletedHero);
  }

}
