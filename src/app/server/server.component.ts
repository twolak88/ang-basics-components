import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 2;
  serverStatus: ServerStatus = ServerStatus.Offline;
  
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? ServerStatus.Online : ServerStatus.Offline;
  }
  
  getServerStatus() {
    return this.serverStatus;
  }
  
  getColor() {
    return this.serverStatus == ServerStatus.Online ? 'lightgreen' : 'pink';
  }
}
enum ServerStatus {
  Online, Offline
}