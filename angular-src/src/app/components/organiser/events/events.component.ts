import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from './events.service';
import { Http, Headers } from '@angular/http';
declare var Materialize: any;
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any;
  noEvent: boolean = false;
  preloader: boolean = true;
  token: any;
  event_id: any[] = [];
  event_status: any[] = [];
  message: any;
  loading: boolean = false;
  myBanks: any;
  allBanks: any = [
    {name:"Access Bank",slug:"access-bank",code:"044",longcode:"044150149",gateway:"emandate",pay_with_bank:true,active:true,is_deleted:null,id:1,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"Citibank Nigeria",slug:"citibank-nigeria",code:"023",longcode:"023150005",gateway:"",pay_with_bank:false,active:true,is_deleted:null,id:2,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"Diamond Bank",slug:"diamond-bank",code:"063",longcode:"063150162",gateway:"emandate",pay_with_bank:true,active:true,is_deleted:null,id:3,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"Ecobank Nigeria",slug:"ecobank-nigeria",code:"050",longcode:"050150010",gateway:"",pay_with_bank:false,active:true,is_deleted:null,id:4,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"Enterprise Bank",slug:"enterprise-bank",code:"084",longcode:"084150015",gateway:"",pay_with_bank:false,active:true,is_deleted:null,id:5,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"Fidelity Bank",slug:"fidelity-bank",code:"070",longcode:"070150003",gateway:"emandate",pay_with_bank:true,active:true,is_deleted:null,id:6,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"First Bank of Nigeria",slug:"first-bank-of-nigeria",code:"011",longcode:"011151003",gateway:"etz",pay_with_bank:false,active:true,is_deleted:null,id:7,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"First City Monument Bank",slug:"first-city-monument-bank",code:"214",longcode:"214150018",gateway:"emandate",pay_with_bank:true,active:true,is_deleted:null,id:8,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"Guaranty Trust Bank",slug:"guaranty-trust-bank",code:"058",longcode:"058152036",gateway:"ibank",pay_with_bank:true,active:true,is_deleted:null,id:9,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"Heritage Bank",slug:"heritage-bank",code:"030",longcode:"030159992",gateway:"etz",pay_with_bank:false,active:true,is_deleted:null,id:10,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"Keystone Bank",slug:"keystone-bank",code:"082",longcode:"082150017",gateway:"",pay_with_bank:false,active:true,is_deleted:null,id:11,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"MainStreet Bank",slug:"mainstreet-bank",code:"014",longcode:"014150331",gateway:"",pay_with_bank:false,active:true,is_deleted:null,id:12,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"Skye Bank",slug:"skye-bank",code:"076",longcode:"076151006",gateway:"etz",pay_with_bank:false,active:true,is_deleted:null,id:13,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"Stanbic IBTC Bank",slug:"stanbic-ibtc-bank",code:"221",longcode:"221159522",gateway:"etz",pay_with_bank:false,active:true,is_deleted:null,id:14,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"Standard Chartered Bank",slug:"standard-chartered-bank",code:"068",longcode:"068150015",gateway:"",pay_with_bank:false,active:true,is_deleted:null,id:15,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"Sterling Bank",slug:"sterling-bank",code:"232",longcode:"232150016",gateway:"",pay_with_bank:false,active:true,is_deleted:null,id:16,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"Union Bank of Nigeria",slug:"union-bank-of-nigeria",code:"032",longcode:"032080474",gateway:"etz",pay_with_bank:false,active:true,is_deleted:null,id:17,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"United Bank For Africa",slug:"united-bank-for-africa",code:"033",longcode:"033153513",gateway:"etz",pay_with_bank:false,active:true,is_deleted:null,id:18,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"Unity Bank",slug:"unity-bank",code:"215",longcode:"215154097",gateway:"etz",pay_with_bank:false,active:true,is_deleted:null,id:19,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"Wema Bank",slug:"wema-bank",code:"035",longcode:"035150103",gateway:"emandate",pay_with_bank:false,active:true,is_deleted:null,id:20,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"Zenith Bank",slug:"zenith-bank",code:"057",longcode:"057150013",gateway:"emandate",pay_with_bank:true,active:true,is_deleted:null,id:21,createdAt:"2016-07-14T10:04:29.000Z",updatedAt:"2016-07-14T10:04:29.000Z"},
    {name:"Jaiz Bank",slug:"jaiz-bank",code:"301",longcode:"301080020",gateway:null,pay_with_bank:false,active:true,is_deleted:null,id:22,createdAt:"2016-10-10T17:26:29.000Z",updatedAt:"2016-10-10T17:26:29.000Z"},
    {name:"Suntrust Bank",slug:"suntrust-bank",code:"100",longcode:"",gateway:null,pay_with_bank:false,active:true,is_deleted:null,id:23,createdAt:"2016-10-10T17:26:29.000Z",updatedAt:"2016-10-10T17:26:29.000Z"},
    {name:"Providus Bank",slug:"providus-bank",code:"101",longcode:"",gateway:null,pay_with_bank:false,active:true,is_deleted:null,id:25,createdAt:"2017-03-27T16:09:29.000Z",updatedAt:"2017-03-27T16:09:29.000Z"},
    {name:"Parallex Bank",slug:"parallex-bank",code:"526",longcode:"",gateway:null,pay_with_bank:false,active:true,is_deleted:null,id:26,createdAt:"2017-03-31T13:54:29.000Z",updatedAt:"2017-03-31T13:54:29.000Z"}
  ];
  accountNumber: any;
  addingBank: boolean = false;
  noBank: boolean = false;
  checkoutValue: any;
  transferBankCode: any;
  otp: any;
  transferCode: any;

  constructor(private eventsService:EventsService, private router: Router, private http: Http) {
    this.viewEvents();
    this.loadBanks();
    this.token = localStorage.getItem('token');
    $(document).ready(function(){
      $('select').material_select();
      $('.modal').modal({
        // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            inDuration: 300, // Transition in duration
            outDuration: 200, // Transition out duration
            startingTop: '4%', // Starting top style attribute
            endingTop: '10%', // Ending top style attribute
            ready: function(){},
            complete: function(){} // Callback for Modal close
      });
    });
  }

  ngOnInit(){}

  viewEvents(){
    this.eventsService.getEvent().subscribe(
       data => {
         this.events = data;
         this.preloader = false;
         if (this.events.length == 0) {
             this.noEvent = true;
         }
       },
       err => console.log(err),
       () => console.log()//this.events
    );
  }

  changeStatus(e){
    this.loading = true;
    if (e.is_online == true) {
      this.message = { "is_online": false };
    } else if (e.is_online == false) {
      this.message = { "is_online": true };
    }

    this.eventsService.updateStatus(e._id.$oid, this.message).subscribe(data => {
      //console.log(data);
      if (data.status == true) {
          Materialize.toast(`Event ${e.name}'s status updated`, 3000, 'green white-text');
          this.loading = false;
      } else {
        Materialize.toast(`Error updating ${e.name}'s status`, 3000, 'red white-text');
        this.loading = false;
      }

    })
  }

  loadBanks(){
    this.eventsService.getBanks().subscribe(
       data => {
         this.myBanks = data;
         if(this.myBanks.length == 0){
           this.noBank = true;
         }
         console.log(data);
       },
       err => console.log(err),
       () => console.log()
    );
  }

  addBank(c){
    const details = {
        account_number: this.accountNumber,
        bank_code: c
    }
    this.addingBank = true;
    this.eventsService.addBank(details).subscribe(
       data => {
         if (data.status == true) {
             Materialize.toast('Bank added', 3000, 'green white-text');
             this.loadBanks();
             this.addingBank = false;
             $('#addBankModal').modal('close');
         } else if(data.status == false) {
            Materialize.toast('Unable to add bank', 3000, 'red white-text');
            this.addingBank = false;
         }
         console.log(data)
       },
       err => console.log(err),
       () => console.log()
    );

  }

  radioSelectChange(b) {
    this.transferBankCode = b.recipient_code;
  }

  getPayed(){
    $('#checkoutModal').modal('close');
    $('#otpModal').modal('open');
    const message = {
      amount: this.checkoutValue,
      recipient_code: this.transferBankCode
    }
    this.eventsService.getPayed(message).subscribe(
       data => {
         console.log(data)
         this.transferCode = data.transfer_code
       },
       err => console.log(err),
       () => console.log()
    );
  }

  passTotalPurchased(e){
    this.checkoutValue = e.total_purchase;
  }

  sendOTP(){
    const message = {
      otp: this.otp,
      transfer_code: this.transferCode
    }
    this.eventsService.sendOTP(message).subscribe(
       data => {
         console.log(data)
       },
       err => console.log(err),
       () => console.log()
    );
  }

}
