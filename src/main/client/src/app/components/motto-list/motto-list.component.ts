import { Component, OnInit } from '@angular/core';
import { Motto } from 'src/app/common/motto';
import { MottoService } from 'src/app/services/motto.service';

@Component({
  selector: 'app-motto-list',
  templateUrl: './motto-list.component.html',
  styleUrls: ['./motto-list.component.css']
})
export class MottoListComponent implements OnInit {

  mottoes: Motto[] = [];
  constructor(private mottoService: MottoService) { }

  ngOnInit(): void {
    this.listMottoes();
  }
  listMottoes() {
    this.mottoService.getMottoList().subscribe(
      data => {
        this.mottoes = data;
      }
    )
  }

}
