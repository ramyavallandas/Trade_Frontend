import { Component, OnInit } from '@angular/core';
//import { NgModule } from "@angular/core";


@Component({
  selector: 'app-trading-history',
  templateUrl: './trading-history.component.html',
  styleUrls: ['./trading-history.component.css']
})
export class TradingHistoryComponent implements OnInit {
  tradelist:Array<any> | undefined;

  options: string[] = ["C10", "C20", "C50"];
  clientid = "10";

  constructor() { }


  ngOnInit(): void {
    this.tradelist=[{
      id:123,
      amount:20000,
      //date:17-09-2021,
      buyerid:1234,
      sellerid:4321
    },
    {
      id:456,
      amount:30000,
      //date:18-09-2021,
      buyerid:5678,
      sellerid:8765
    }
  ];
  }


  // myFunction() {
  //   var input, filter, table, tr, td, i, txtValue;
  //   input = document.getElementById("myInput");
  //   filter = input.value.toUpperCase();
  //   table = document.getElementById("myTable");
  //   tr = table.getElementsByTagName("tr");
  //   for (i = 0; i < tr.length; i++) {
  //     td = tr[i].getElementsByTagName("td")[0];
  //     if (td) {
  //       txtValue = td.textContent || td.innerText;
  //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //         tr[i].style.display = "";
  //       } else {
  //         tr[i].style.display = "none";
  //       }
  //     }
  //   }
  // }

}
