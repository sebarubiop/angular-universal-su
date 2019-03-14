import { Routes, RouterModule } from '@angular/router';
// import { MetaGuard } from '@ngx-meta/core';

// import { WrapperComponent } from '@shared/layouts/wrapper/wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'back', pathMatch: 'full' },
  { path: 'back', loadChildren: './transfer-back/transfer-back.module#TransferBackModule' },
  {
    path: 'tareas',
    loadChildren: './ver-tareas/ver-tareas.module#VerTareasModule',
  },
  { path: '**', loadChildren: './not-found/not-found.module#NotFoundModule' },
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
