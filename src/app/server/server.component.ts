import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: darkgreen
    }
    .offline {
      color: red
    }
  `]
})
export class ServerComponent {
  serverId: number = 2;
  serverStatus: ServerStatus = ServerStatus.Offline;
  
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? ServerStatus.Online : ServerStatus.Offline;
  }
  
  getServerStatusString() {
    return this.serverStatus == ServerStatus.Online ? 'online' : 'offline';
  }
  
  getColor() {
    return this.serverStatus == ServerStatus.Online ? 'lightgreen' : 'pink';
  }
  
  isOnline() {
    return this.serverStatus == ServerStatus.Online;
  }
}
enum ServerStatus {
  Online, Offline
}
