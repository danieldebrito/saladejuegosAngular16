import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Mensaje } from 'src/app/class/mensaje';
import { User } from 'src/app/auth/models/user';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ChatService } from 'src/app/services/chat.FIRE.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  public userLogged: User = {};
  public messengers: Mensaje[] = [];
  public messenger: Mensaje = {};

  constructor(
    private afAuth: AngularFireAuth,
    private chatSv: ChatService,
    private authSv: AuthService) { }

  public getMessengers() {
    this.chatSv.getItems().subscribe(res => {
      this.messengers = res; // = res.slice(0, 6);
    });
  }

  private getCurretUser() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userLogged.uid = user.uid;
        this.messenger.displayName = user.displayName;
        console.log(user);

      } else {
        this.userLogged.uid = '';
      }
    });
  }
  /////////////////////////////////////////////////////////////////////////////
  public getUserById(id: string){
    this.authSv.getUserByID(id).subscribe( res => {
    } );
  }

  public saveMensaje(msg: string){
    this.messenger.fecha = new Date().getTime();
    this.messenger.mensaje = msg;
    //this.messenger.displayName = '';//this.userLogged.displayName; // this.userLogged.displayName;
    this.messenger.uid = this.userLogged.uid;

    this.chatSv.addItem(this.messenger);
  }

  ngOnInit(): void {
    this.getCurretUser();
    this.getMessengers();
  }
}
