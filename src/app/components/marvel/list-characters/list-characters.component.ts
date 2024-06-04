import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MarvelService } from '../../../services/marvel.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CharacterComponent } from '../character/character.component';
import { CharacterResponse } from '../../../services/model/character.model';

@Component({
  selector: 'app-list-characters',
  standalone: true,
  imports: [NavbarComponent, HttpClientModule, CharacterComponent],
  templateUrl: './list-characters.component.html',
  styleUrl: './list-characters.component.css',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class ListCharactersComponent implements OnInit {

  charactersResponse: CharacterResponse | null = null;
  constructor(private marvelService : MarvelService, public dialog: MatDialog){}
  
  ngOnInit(): void {
    this.marvelService.getCharacters().subscribe(resp => {
      this.charactersResponse = resp
    })
  }

  openDialog(id: any) {
    this.marvelService.getCharacterById(id).subscribe(resp => {
      if(resp != null)
      this.dialog.open(CharacterComponent, {
        data: resp.data.results[0],
      });
    })
    
  }
  

}
