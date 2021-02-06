import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  //template: `<app-server></app-server>
  //          <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  readonly DEFAULT_NAME = 'InitialName';
  readonly DEFAULT_HOST = 'localhost';
  readonly DEFAULT_PORT = '8080';
  
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverCreated = false;
  serverName = this.DEFAULT_NAME;
  serverHost = this.DEFAULT_HOST;
  serverPort = this.DEFAULT_PORT;
  
  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Server name is ' + this.serverName;
    this.serverCreated = true;
    this.allowNewServer = false;
    //console.log("Server Created: " + this.serverCreated);
  }
  
  onMouseOver() {
    this.serverCreationStatus = 'Are you sure you can create Server with name: ' + this.serverName + '?';
  }
  
  onMouseOut() {
    if (!this.serverCreated) {
      this.serverCreationStatus = "No server was created!";
    } else {
      this.serverCreationStatus = "Server was created! Server name is " + this.serverName;
    }
  }
  
  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  
  resetControls() {
    this.serverName = this.DEFAULT_NAME;
    this.serverHost = this.DEFAULT_HOST;
    this.serverPort = this.DEFAULT_PORT;
  }
 
}
