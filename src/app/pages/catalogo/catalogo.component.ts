import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Entities/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{


  ngOnInit(): void {

  }

  constructor(private productoService:ProductoService){}

  productos:Producto[]=[];



  obtenerProductos(){
    this.productoService.listarProductos().subscribe(
      (data:any)=>{
        this.productos=data;
      },
      (error)=>{
        console.error('Error al obtener los productos:', error);
      }
    )
  }

  buscar!:String;

  buscarProducto(){
    this.productoService.listarPorNombre(this.buscar).subscribe(
      (data:any)=>{
        this.productos=data;
      },
      (error)=>{
        console.error('Error al obtener los productos:', error);
      }
      
    )
  }


}
