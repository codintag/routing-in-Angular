import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { skills } from 'src/app/skills';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  selectedSkill;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id'); // get the params "skills/:id"
    console.log(id);
    this.selectedSkill = skills.find(skill => skill.id === id);
  }

}
