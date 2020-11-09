import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// import RouterModule and Routes
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { BlogComponent } from "./blog/blog.component";
import { SkilsComponent } from "./skils/skils.component";
import { GithubComponent } from "./github/github.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { HttpClientModule } from '@angular/common/http';
import { SkillComponent } from './skils/skill/skill.component';

// all my routes here stored in const 
const appRoutes: Routes = [
  { path: "", component: HomeComponent }, // localhost:4200
  { path: "blog", component: BlogComponent },
  { path: "skills", component: SkilsComponent },
  { path: "skills/:id", component: SkillComponent }, // id paramater
  { path: "github", component: GithubComponent },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    SkilsComponent,
    GithubComponent,
    NotfoundComponent,
    SkillComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule], // RouterModule and method here forRoot
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
