import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminSkillsComponent } from './admin-skills/admin-skills.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';


@NgModule({
  declarations: [AdminComponent, AdminSkillsComponent, AdminCategoriesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
