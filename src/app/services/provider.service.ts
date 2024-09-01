import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  /* 2. Atributo URL (actualiza <NOMBRE_DEL_PROYECTO>) */
  private URL: string = 'https://hybrid-49436-default-rtdb.firebaseio.com/collection.json';

  /* 3. Inyección de dependencia del HttpClient */
  constructor(private http: HttpClient) { }

  /* 4. Método con la petición HTTP para obtener las preguntas */
  getQuestions(): Observable<Data[]> {
    return this.http.get<Data[]>(this.URL);
  }

  /* 5. Método con la petición HTTP para enviar datos (opcional) */
  postResponse(data: any): Observable<any> {
    return this.http.post(this.URL, data);
  }
}
