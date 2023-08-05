import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  onDeleteWithId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  emitId(id?: string): void {
    if( !id ) return;
    this.onDeleteWithId.emit(id);
    console.log(id)
  }

}
