import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { VerTareasRoutes } from './ver-tareas.routing';
import { VerTareasComponent } from './ver-tareas.component';

@NgModule({
  imports: [CommonModule, VerTareasRoutes, TranslateModule],
  declarations: [VerTareasComponent],
})
export class VerTareasModule {}
