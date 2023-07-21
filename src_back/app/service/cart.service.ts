import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../class/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl:string="http://localhost:8990";
  constructor(private http:HttpClient) { }

  public getCartById(id:number){
    return  this.http.get<Cart>(`${this.baseUrl}/findCartByID/${id}`)
  }
}