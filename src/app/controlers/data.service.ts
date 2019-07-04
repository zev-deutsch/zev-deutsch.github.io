import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  search: string;
  baseUrl = "https://api.edamam.com/search?q=" + this.search + "&app_id=e04a40f7&app_key=a9558ae3efc86ed9c55e74631ea574b8";

  constructor() { }
}
