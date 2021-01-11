import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';

import { CursoPageComponent } from './pages/curso-page/curso-page.component';
import { CursoContainerComponent } from './components/curso-container/curso-container.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { InstructorContainerComponent } from './components/instructor-container/instructor-container.component';
import { CursoDetailPageComponent } from './pages/curso-detail-page/curso-detail-page.component';

@NgModule({
  declarations: [CursoPageComponent, CursoContainerComponent, InstructorComponent, InstructorContainerComponent, CursoDetailPageComponent],
  imports: [
    CommonModule,
    CursoRoutingModule
  ]
})
export class CursoModule { }
