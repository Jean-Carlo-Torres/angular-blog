import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  photoCover:string = "https://user-images.githubusercontent.com/70382532/138322189-2db8df52-9dcb-40a0-88a8-c365466bd33d.gif"
  contentTitle:string = "MINHA NÓTICIA"
  contentDescription = "Hello World!"

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => console.log(value.get("id"))
      
    )
  }

}
