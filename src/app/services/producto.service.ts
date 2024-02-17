import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient:HttpClient) { }


  

  public listarProductos(){
    return this.httpClient.get(`${baserUrl}/producto/todo`);
  }

  public listarPorNombre(buscar:String){
      let params = new HttpParams().set('buscar', buscar.toString());

  return this.httpClient.get(`${baserUrl}/producto/nombre`,{params:params});
  }
  


}
