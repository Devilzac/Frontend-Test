import { Component, OnInit } from '@angular/core';
import { GetlibrosService } from '../getlibros.service';

@Component({
  selector: 'libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {
  pageActual: number = 1;
  constructor(private _getlib: GetlibrosService) { }
  libros = null;
  isbn_ = [];
  ngOnInit() {
    //mostramos unos libros de ejemplo "golden"
    this._getlib.findLibros('golden').subscribe( data => {
      this.libros = data;
    });
  }

  searchBook(dato){    
    //Buscamos libros
    this._getlib.findLibros(dato).subscribe( data => {
      this.libros = data;
      console.log("data2", data);
    });
  }  

}
