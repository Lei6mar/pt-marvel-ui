import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MarvelService } from './services/marvel.service';
import { BitacoraService } from './services/bitacora.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MarvelService, BitacoraService]
})
export class AppComponent {
  title = 'marvel-api-ui';
}
