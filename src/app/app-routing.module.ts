import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogComponent } from "./blog/blog.component";
import { GithubComponent } from "./github/github.component";
import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { EditSkillComponent } from "./skils/edit-skill/edit-skill.component";
import { SkillComponent } from "./skils/skill/skill.component";
import { SkilsComponent } from "./skils/skils.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

// all my routes here stored in const
const appRoutes: Routes = [
  { path: "", component: HomeComponent }, // localhost:4200
  { path: "blog", component: BlogComponent },
  {
    path: "skills",
    component: SkilsComponent,
    children: [
      // nested Routes
      { path: ":id", component: SkillComponent }, // id paramater and no need to define "skills/:id"..
      { path: ":id/edit", component: EditSkillComponent },
    ],
  },
  {
    path: "users",
    component: UsersComponent,
    children: [{ path: ":id", component: UserComponent }], // nested routes
  },
  { path: "github", component: GithubComponent },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
