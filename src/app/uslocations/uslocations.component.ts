import { Component, OnInit, Input } from '@angular/core';
import { LifecycleHooksComponent } from '../lifecycle-hooks/lifecycle-hooks.component';
import{Apidata} from '../commonServices/apiService';
@Component({
  selector: 'app-uslocations',
  templateUrl: './uslocations.component.html',
  styleUrls: ['./uslocations.component.css']
})
export class USlocationsComponent implements OnInit {
  @Input() childMessage:string = "Hola Mundo!";
  message:string;
  constructor(private data: Apidata) { }
  Projects = ["NXP","Raipur AFCS","id-complete", "ipsidy-acquiring", "ipsidy-automation", "ipsidy-automation-tests",
            "ipsidy-hce", "ipsidy-loyalty", "ipsidy-prepaid", "ipsidy-tms", "chatakupi",
            "CHATAK_AFCS_BE", "worldline-collection", "DropDesk","Verifone"];

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}
