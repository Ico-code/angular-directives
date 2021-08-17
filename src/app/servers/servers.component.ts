import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '.app-servers',
  //selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {


  allowNewServer:boolean = false;
  ServerCreationStatus = "No server was created!";
  ServerName ="Testserver";
  serverCreated:boolean =  false ;
  servers = ['TestServer', 'TestServer2']


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.ServerName);
    this.ServerCreationStatus = 'Server was created! Server name is ' + this.ServerName;
  }

  onUpdateServerName(event:Event){
    this.ServerName = (<HTMLInputElement>event.target).value;
  }

}
