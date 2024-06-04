import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatSidenavModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  


})
export class NavbarComponent {

}
