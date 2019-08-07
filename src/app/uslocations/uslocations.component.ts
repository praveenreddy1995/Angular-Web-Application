import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uslocations',
  templateUrl: './uslocations.component.html',
  styleUrls: ['./uslocations.component.css']
})
export class USlocationsComponent implements OnInit {

  constructor() { }
  Projects = ["NXP","Raipur AFCS","id-complete", "ipsidy-acquiring", "ipsidy-automation", "ipsidy-automation-tests",
            "ipsidy-hce", "ipsidy-loyalty", "ipsidy-prepaid", "ipsidy-tms", "chatakupi",
            "CHATAK_AFCS_BE", "worldline-collection", "DropDesk","Verifone"];

  ngOnInit() {
  }

}
