import { State, Selector } from '@ngxs/store';
import { StateContext } from '@ngxs/store';
import { Action } from '@ngxs/store';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment'

export class DelayBack {
  static readonly type = '[App] DelayBack';
  private domain = environment.domain
  constructor(private tareaId: string) { }
  apply(ctx: StateContext<AppStateModel>, http: TransferHttpService): Observable<any> {
    return http.get(`https://partner-7.com/api/tarea/${this.tareaId}`).pipe(
      // return http.get('http://localhost:5000/api/simple').pipe(
      map((result) => {
        ctx.patchState(
          { resultGet: result }
        );
      })
    );
  }
}


export class AppStateModel {
  resultGet: any;
}

@State<AppStateModel>({
  name: 'app',
  defaults: new AppStateModel()
})

export class AppState {

  @Selector() static resultGet(state: AppStateModel) {
    return state.resultGet;
  }

  constructor(private http: TransferHttpService) {
  }

  @Action(DelayBack)
  delayBack(ctx: StateContext<AppStateModel>, action: DelayBack) {
    return action.apply(ctx, this.http);
  }
}
