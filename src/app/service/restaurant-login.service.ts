import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantLoginService {
  saveRestaurant(restaurant: { restloginname: string | null | undefined; restloginemail: string | null | undefined; restloginmobilenumber: string | null | undefined; password: string | null | undefined; }) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  addRestaurant(restaurantLogin: RestaurantLogin): Observable<RestaurantLogin> {
    return this.http.post<RestaurantLogin>(`http://localhost:9999/saveRestaurantRegistration`, restaurantLogin);
  }

  getResaturantLoginByEmail(restloginemail: string, password: string): Observable<RestaurantLogin> {
    return this.http.get<RestaurantLogin>(`http://localhost:9999/getRestaurantByEmail/${restloginemail}/${password}`);
  }
}

export class RestaurantLogin {
  constructor(
    public restloginname: string,
    public restloginmobilenumber: number,
    public restloginemail: string,
    public password: string
  ) {}
}
