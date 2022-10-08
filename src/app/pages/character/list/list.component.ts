import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import * as Model from '../character.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list: Model.List;

  constructor(private service: CharacterService) {}

  ngOnInit(): void {
    this.service.listAll().subscribe((res) => {
      this.list = res;
    });
  }
}
