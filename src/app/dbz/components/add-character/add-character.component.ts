import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-addCharacter',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: '',
  };

  emitCharacter(): void {


    if(this.character.name.length === 0) return;

    console.log(this.character.name);
    console.log(this.character.power);

    const new_character: Character = {
      name: this.character.name,
      power: this.character.power
    }
    this.onNewCharacter.emit(new_character);
    this.resetInputs();

  }

  resetInputs(): void {
    this.character.name = '';
    this.character.power = '';




  }
}
