import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin/admin.component";
import { AdminSkillsComponent } from "./admin-skills/admin-skills.component";
import { AdminCategoriesComponent } from "./admin-categories/admin-categories.component";
import { AuthGuard } from "../services/auth-guard.service";
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [
    AdminComponent,
    AdminSkillsComponent,
    AdminCategoriesComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
  providers: [AuthGuard, AuthService],
})
export class AdminModule {}
