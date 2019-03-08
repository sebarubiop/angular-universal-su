import { Injectable } from '@angular/core'
import { TransferHttpService } from '@gorniv/ngx-transfer-http'
import { environment } from '../../environments/environment'

import { Tarea, TareaResponse, TareasResponse } from '@app/model/tarea'
import { UpdateResponse } from '@app/model/response'

@Injectable({
  providedIn: "root"
})
export class TareasService {

  private domain = environment.domain

  constructor(private http: TransferHttpService) { }

  getTareas() {
    return this.http.get<TareasResponse>(`${this.domain}/tareas`)
  }

  getTareasByUser(userId: string) {
    return this.http.get<TareasResponse>(`${this.domain}/tareas/${userId}`)
  }

  publicarTarea(data: Tarea) {
    return this.http.post<TareaResponse>(`${this.domain}/publicartarea`, data)
  }

  getTarea(id: string) {
    return this.http.get<TareaResponse>(`${this.domain}/tarea/${id}`)
  }

  updateTarea(id: string, params: Tarea) {
    return this.http.put<UpdateResponse>(`${this.domain}/updatetarea/${id}`, params)
  }
}
