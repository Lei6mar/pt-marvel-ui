import { JsonPipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { CharacterResponse } from '../../../services/model/character.model';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, JsonPipe],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css',
})
export class CharacterComponent {

  characterResponse!: CharacterResponse;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.characterResponse = data
  }
}
