import { Component, OnInit } from '@angular/core';

import { KatoraService } from '../../services/katora.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public shippingFirstName = "";


  constructor(private katoraService : KatoraService ) { }

  ngOnInit() {
    
  }

}
