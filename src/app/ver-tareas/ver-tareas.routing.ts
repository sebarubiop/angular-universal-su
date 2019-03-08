import { VerTareasComponent } from './ver-tareas.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VerTareasComponent,
    data: {
      meta: {
        title: 'back-http.title',
        description: 'back-http.text',
      },
    },
  },
];

export const VerTareasRoutes = RouterModule.forChild(routes);
