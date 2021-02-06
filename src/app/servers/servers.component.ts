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
  serverCreated = false;
  mouseOver = false;
  serverName = this.DEFAULT_NAME;
  serverHost = this.DEFAULT_HOST;
  serverPort = this.DEFAULT_PORT;
  servers = ['Testserver', 'Testserver 2'];
  
  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    //this.allowNewServer = false;
    this.mouseOver = false;
  }
  
  /*onMouseOver() {
    this.mouseOver = true;
  }
  
  onMouseOut() {
    this.mouseOver = false;
  }*/
  
  /*onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }*/
  
  isSetDefaultsEnabled() {
    return !this.allowNewServer || 
      (this.serverName == this.DEFAULT_NAME 
        && this.serverHost == this.DEFAULT_HOST 
        && this.serverPort == this.DEFAULT_PORT)
  }
  
  setDefaults() {
    this.serverName = this.DEFAULT_NAME;
    this.serverHost = this.DEFAULT_HOST;
    this.serverPort = this.DEFAULT_PORT;
  }
  
  isClearEnabled() {
    return !this.allowNewServer || !this.serverName && !this.serverHost && !this.serverPort;
  }
  
  clearControls() {
    this.serverName = '';
    this.serverHost = '';
    this.serverPort = '';
  }
}
