import { VerTareasComponent } from './ver-tareas.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VerTareasComponent,
  },
];

export const VerTareasRoutes = RouterModule.forChild(routes);
