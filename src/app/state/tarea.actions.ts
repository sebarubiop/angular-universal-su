import { Tarea } from '@app/model/tarea'
import { TareaStateModel } from '@app/state/tarea.state'
import { StateContext } from '@ngxs/store';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TareasResponse } from '@app/model/tarea'

export class VerTareasStart {
    static readonly type = '[Tareas] Ver Tareas Start'
    constructor() { }
    apply(context: StateContext<TareaStateModel>, http: TransferHttpService) {
        return http.get<TareasResponse>('https://partner-7.com/api/tareas').pipe(
            map((result) => {
                console.log(result)
                context.patchState({
                    loading: false,
                    error: null,
                    data: result.value,
                })
            })
        );
    }
}

export class VerTareasDone {
    static readonly type = '[Tareas] Ver Tareas Done'
    constructor(public result: Tarea[]) { }
}

export class TareaError {
    static readonly type = '[Tareas] Error'
    constructor(public message: string) { }
}

export class SaveTareaUrl {
    static readonly type = '[Tareas] Save Tarea Url'
    constructor(public url: string) { }
}

export class DeleteTareaUrl {
    static readonly type = '[Tareas] Delete Tarea Url'
}

export class ChangeTareaFilter {
    static readonly type = '[Tareas] Change Tarea Filter'
    constructor(public filter: string, public value: any) { }
}

export class SavePublicarTarea {
    static readonly type = '[Tareas] Save Publicar Tarea'
    constructor(public data: Tarea) { }
}

export class DeletePublicarTarea {
    static readonly type = '[Tareas] Delete Publicar Tarea'
}