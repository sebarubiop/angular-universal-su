import { Component,ChangeDetectorRef, OnInit, Inject } from '@angular/core';

import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { Store, Select } from '@ngxs/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';

import { TareasService } from '@app/services/tareas.service'
import { Tarea } from '@app/model/tarea'

@Component({
  selector: 'app-transfer-back',
  templateUrl: './transfer-back.component.html',
})
export class TransferBackComponent implements OnInit {

  tarea: Tarea

  constructor(
    private http: TransferHttpService,
    private store: Store,
    @Inject('ORIGIN_URL') public baseUrl: string,
    private tareasService: TareasService,
    private cdr: ChangeDetectorRef,
    ) {
    console.log(`ORIGIN_URL=${baseUrl}`);
  }

  async ngOnInit() {
    // this.store.dispatch(new DelayBack('5c0666f1467c3d001ebee1ef'));
    const tareaResponse = await this.tareasService.getTarea('5c0666f1467c3d001ebee1ef').toPromise()
    if (tareaResponse.success) {
      this.tarea = tareaResponse.value
      console.log(this.tarea)
      this.cdr.markForCheck()
    }
  }
}
