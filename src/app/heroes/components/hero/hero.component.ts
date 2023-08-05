import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  get heroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

   public changeHero(): void {
    this.name = 'Spiderman';
    console.log('Hero changed');
  }

  public changeAge():void{
    this.age = 25;
    console.log('Age changed');
  }

  public resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
