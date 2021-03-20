import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.css']
})
export class ProductIdComponent implements OnInit {

  searchKeyword = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(data=>{
      this.searchKeyword = data.id;
    })
   }
   updateSearch(){
    const searchVal = this.searchKeyword;
    this.router.navigate(['products/view/', searchVal]);
   }

  ngOnInit(): void {
  }

}
