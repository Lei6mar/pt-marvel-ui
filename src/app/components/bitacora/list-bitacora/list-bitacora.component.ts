import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { BitacoraService } from '../../../services/bitacora.service';

@Component({
  selector: 'app-list-bitacora',
  standalone: true,
  imports: [NavbarComponent, MatTableModule, DatePipe],
  templateUrl: './list-bitacora.component.html',
  styleUrl: './list-bitacora.component.css',
})
export class ListBitacoraComponent implements OnInit {

  datasource: any = []
  displayedColumns: string[] = ['id', 'userName', 'dateTime', 'action'];

  constructor(private bitacoraService: BitacoraService){}
  ngOnInit(): void {
    this.bitacoraService.getRegistros().subscribe(resp => {
      this.datasource = resp;
    })
  }
}
