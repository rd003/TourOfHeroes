import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // selectedHero?:Hero;

  heroes:Hero[]=[];
  constructor(private heroService:HeroService) { }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(
      h=> this.heroes=h
    );
  }
  // onSelect(hero:Hero):void{
  //   this.selectedHero=hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);

  // }
  ngOnInit(): void {
    this.getHeroes();
  }

}
