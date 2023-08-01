import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Restaurant } from '../class/restaurant';

@Injectable({
  providedIn: 'root'
})
export class DataRestaurantService {

  baseUrl:string="http://localhost:9999";
  public restaurantData: BehaviorSubject<Restaurant[]> = new BehaviorSubject<Restaurant[]>([]);
  constructor(private http:HttpClient) { }

  retriveAllRestaurant(){
    return this.http.get<Restaurant[]>
      (`${this.baseUrl}/getAllRestaurant`);
  }
  deleterest(id:number){
    return this.http.delete<Restaurant[]>
      (`${this.baseUrl}/deleteRestaurantById/${id}`);
  }

  getRestaurantByEmail(email:string){
    return this.http.get<Restaurant>(`http://localhost:9999/getRestaurantByEmail/${email}`)
  }
  public getAllRestaurant(searchkeyword:string=""){
    return this.http.get<Restaurant[]>(`${this.baseUrl}/getAllRestaurantsearch?searchkey=`+searchkeyword);
  }

  setRestaurantData(data: Restaurant[]): void {
    this.restaurantData.next(data);

  }

  getRestaurantData(): BehaviorSubject<Restaurant[]> {
    return this.restaurantData;
  }
}
