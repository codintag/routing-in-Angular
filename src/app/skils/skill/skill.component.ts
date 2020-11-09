import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { skills } from "src/app/skills";

@Component({
  selector: "app-skill",
  templateUrl: "./skill.component.html",
  styleUrls: ["./skill.component.css"],
})
export class SkillComponent implements OnInit {
  selectedSkill;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // let id = +this.route.snapshot.paramMap.get('id'); // get the params "skills/:id"
    // console.log(id);
    // this.selectedSkill = skills.find(skill => skill.id === id);

    // this method use Observables, (promise) params changes everytime you change the params, but the method upside run just one time. (because ngOninit run just one time!) || uncomment codes above to see the effect.

    // this method return a promise (observable)
    this.route.paramMap.subscribe((params) => {
      let id = +params.get('id');
      this.selectedSkill = skills.find(skill => skill.id === id);
    });
  }
}
