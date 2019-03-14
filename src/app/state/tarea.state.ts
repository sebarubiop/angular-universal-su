import { Action, Selector, StateContext, State } from '@ngxs/store'
import { Tarea, TareaFilter } from '@app/model/tarea'
import {
    ChangeTareaFilter,
    DeletePublicarTarea,
    DeleteTareaUrl,
    SavePublicarTarea,
    SaveTareaUrl,
    TareaError,
    VerTareasDone,
    VerTareasStart,
} from '@app/state/tarea.actions'
import { TransferHttpService } from '@gorniv/ngx-transfer-http';

export interface TareaStateModel {
    data: Tarea[]
    error: string
    loading: boolean
    url: string
    filters: TareaFilter
    publicar: Tarea
}

@State<TareaStateModel>({
    name: 'tarea',
    defaults: {
        data: null,
        error: null,
        loading: false,
        url: null,
        filters: {
            keyword: null,
            region: null,
            comuna: null,
            medio: 0,
            estado: null,
            orden: 1,
        },
        publicar: null
    },
})
export class TareaState {

    @Selector()
    static state(state: TareaStateModel) {
        return state
    }

    @Selector()
    static results(state: TareaStateModel) {
        return state.data
    }

    @Selector()
    static filters(state: TareaStateModel) {
        return state.filters
    }

    constructor(
        private http: TransferHttpService
    ) { }

    @Action(VerTareasStart)
    verTareasStart(context: StateContext<TareaStateModel>, action: VerTareasStart) {
        return action.apply(context, this.http);
        // context.patchState({0.

        //     loading: true,
        //     error: null,
        //     data: null,
        // })
        // try {
        //     const response = await this.tareasService.getTareas().toPromise()
        //     // console.log(response)
        //     if (!response.success) {
        //         return context.dispatch(new TareaError(response.message))
        //     } else {
        //         return context.dispatch(new VerTareasDone(response.value))
        //     }
        // } catch (error) {
        //     return context.dispatch(new TareaError(error))
        // }

    }

    @Action(VerTareasDone)
    verTareasDone(context: StateContext<TareaStateModel>, action: VerTareasDone) {
        context.patchState({
            loading: false,
            error: null,
            data: action.result,
        })
    }

    @Action(TareaError)
    tareaError(context: StateContext<TareaStateModel>, action: TareaError) {
        context.patchState({
            loading: false,
            error: action.message,
            data: null,
        })
    }

    @Action(SaveTareaUrl)
    saveTareaUrl(context: StateContext<TareaStateModel>, action: SaveTareaUrl) {
        context.patchState({
            url: action.url,
        })
    }

    @Action(DeleteTareaUrl)
    deleteTareaUrl(context: StateContext<TareaStateModel>, action: DeleteTareaUrl) {
        context.patchState({
            url: null,
        })
    }
    // keyword: null, region: null, comuna: null, medio: 'todos', estado: 'disponible', orden: 'fecha',
    @Action(ChangeTareaFilter)
    changeTareaFilter(context: StateContext<TareaStateModel>, action: ChangeTareaFilter) {
        const filters = {...context.getState().filters}
        // console.log(action)
        if (action.filter === 'keyword') {
            filters.keyword = action.value
        }
        else if (action.filter === 'region') {
            filters.region = action.value
        }
        else if (action.filter === 'comuna') {
            filters.comuna = action.value
        }
        else if (action.filter === 'medio') {
            filters.medio = action.value
        }
        else if (action.filter === 'estado') {
            filters.estado = action.value
        }
        else if (action.filter === 'orden') {
            filters.orden = action.value
        }
        context.patchState({
            filters,
        })
    }

    @Action(SavePublicarTarea)
    savePublicarTarea(context: StateContext<TareaStateModel>, action: SavePublicarTarea) {
        context.patchState({
            publicar: action.data,
        })
    }
    
    @Action(DeletePublicarTarea)
    DeletePublicarTarea(context: StateContext<TareaStateModel>, action: DeletePublicarTarea) {
        context.patchState({
            publicar: null,
        })
    }
}


