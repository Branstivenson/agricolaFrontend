import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient:HttpClient) {}

  public newUsuraio(usuario:any){
    return this.httpClient.post(`${baserUrl}/usuario/registrar`,usuario);
  }
}
