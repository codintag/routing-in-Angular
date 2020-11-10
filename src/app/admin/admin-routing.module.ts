import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminCategoriesComponent } from "./admin-categories/admin-categories.component";
import { AdminSkillsComponent } from "./admin-skills/admin-skills.component";
import { AdminComponent } from "./admin/admin.component";

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "",
        children: [
          { path: "skills", component: AdminSkillsComponent },
          { path: "categories", component: AdminCategoriesComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
