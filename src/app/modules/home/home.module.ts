import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CursoDestacadoContainerComponent } from './components/curso-destacado-container/curso-destacado-container.component';
import { HeaderComponent } from './components/header/header.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { InstructorContainerComponent } from './components/instructor-container/instructor-container.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [HomeComponent, CursoDestacadoContainerComponent, HeaderComponent, InstructorComponent, InstructorContainerComponent, ServicesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}


