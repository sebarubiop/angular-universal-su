import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerTareasRoutes } from './ver-tareas.routing';
import { VerTareasComponent } from './ver-tareas.component';

@NgModule({
  imports: [CommonModule, VerTareasRoutes],
  declarations: [VerTareasComponent],
})
export class VerTareasModule {}
