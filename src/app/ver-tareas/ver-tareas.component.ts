import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { TareaState, TareaStateModel } from '@app/state/tarea.state'
import { VerTareasStart } from '@app/state/tarea.actions'

@Component({
  selector: 'app-ver-tareas',
  templateUrl: './ver-tareas.component.html',
})
export class VerTareasComponent implements OnInit {

@Select(TareaState) tareaState$: Observable<TareaStateModel>

  constructor(
    private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new VerTareasStart())
  }
}
