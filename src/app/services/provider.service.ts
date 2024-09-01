import { Injectable } from '@angular/core';


/* 1. Importe el módulo del HttpClient */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Data } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})

export class ProviderService {
  private URL: string = 'https://hybrid-49436-default-rtdb.firebaseio.com/collection.json'


  constructor(private http:HttpClient) { 

    
  
    
  }
}
