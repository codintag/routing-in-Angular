import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { skills } from "../skills";

@Component({
  selector: "app-skils",
  templateUrl: "./skils.component.html",
  styleUrls: ["./skils.component.css"],
})
export class SkilsComponent implements OnInit {

  skills = skills; // imported from skills.ts file.
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
  loadSkills() {
    this.router.navigate(["skills"], { relativeTo: this.route }); // add skills at the end of "/skills/skills this is a realtive route, it search a compo inside skills folder ... as if you did not add / before a compo in routerLink"
  }

  // load one skill with params.
  // loadOneSkill() {
  //   this.router.navigate(["skills/"])
  // }
}
