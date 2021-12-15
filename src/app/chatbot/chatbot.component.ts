import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js/types/src/core/pusher';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  // username = 'username';
  // message = '';
  // messages = [];
  disableScrollDown: any;
  myScrollContainer: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  //   Pusher.logToConsole = true;

  //   const pusher = new Pusher('a79e5ab7d1f25655156a', {
  //     cluster: 'ap1'
  //   });

  //   const channel = pusher.subscribe('chat');
  //   channel.bind('message', data => {
  //     this.messages.push(data);
  //   });
  // }

  // submit(): void {
  //   this.http.post('http://localhost:8080/api/messages', body {
  //     username: this.username,
  //     messages. this.messages 
  //   }).subscribe(() => this.message = '');
  // }

}
}