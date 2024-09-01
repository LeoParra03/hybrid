import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  /* Atributo URL (actualiza <NOMBRE_DEL_PROYECTO> si es necesario) */
  private URL: string = 'https://hybrid-49436-default-rtdb.firebaseio.com/collection.json';

  /* Inyección de dependencia del HttpClient */
  constructor(private http: HttpClient) { }

  /* Método con la petición HTTP para obtener las preguntas */
  getQuestions(): Observable<Data[]> {
    return this.http.get<Data[]>(this.URL);
  }

  /* Método con la petición HTTP para agregar una nueva pregunta */
  addQuestion(question: Data): Observable<any> {
    return this.http.post(this.URL, question);
  }
}
