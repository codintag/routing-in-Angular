import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// import RouterModule and Routes
// import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { BlogComponent } from "./blog/blog.component";
import { SkilsComponent } from "./skils/skils.component";
import { GithubComponent } from "./github/github.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { HttpClientModule } from "@angular/common/http";
import { SkillComponent } from "./skils/skill/skill.component";
import { EditSkillComponent } from "./skils/edit-skill/edit-skill.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './services/auth-guard.service';

// // all my routes here stored in const
// const appRoutes: Routes = [
//   { path: "", component: HomeComponent }, // localhost:4200
//   { path: "blog", component: BlogComponent },
//   {
//     path: "skills",
//     component: SkilsComponent,
//     children: [ // nested Routes
//       { path: ":id", component: SkillComponent }, // id paramater and no need to define "skills/:id"..
//       { path: ":id/edit", component: EditSkillComponent },
//     ],
//   },
//   {
//     path: "users",
//     component: UsersComponent,
//     children: [{ path: ":id", component: UserComponent }], // nested routes
//   },
//   { path: "github", component: GithubComponent },
//   { path: "**", component: NotfoundComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    SkilsComponent,
    GithubComponent,
    NotfoundComponent,
    SkillComponent,
    EditSkillComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [BrowserModule, AdminModule, AppRoutingModule, HttpClientModule], // RouterModule and method here forRoot
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
