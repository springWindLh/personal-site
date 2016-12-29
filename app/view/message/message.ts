/**
 * Created by lh on 2016/12/12.
 */
import {Component, OnInit} from "@angular/core";
import {Reply} from "../../domain/Reply";
import {MessageService} from "../../service/messageService";
import {ReplyService} from "../../service/replyService";
import {Message} from "../../domain/Message";
import {Query} from "../../service/util/QueryUtil";
import {Jsonp} from "@angular/http";
declare var Materialize: any;
declare var $: any;
declare var remote_ip_info: any;
@Component({
  moduleId: module.id,
  selector: 'message-page',
  templateUrl: 'message.html',
  providers: [MessageService, ReplyService]
})

export class MessagePage implements OnInit {
  messages: any[] = [];
  message: Message = new Message("", "", "");
  reply: Reply = new Reply("", "", -1);
  query: Query = new Query(0, 10);
  replyMessage: Message = this.message;
  pageState = {
    first: false,
    last: false
  };

  constructor(private messageService: MessageService, private replyService: ReplyService, private jsonp: Jsonp) {

  }

  ngOnInit(): void {
    $(function () {
      $('#modal1').modal();
    });
    this.listMessages(this.query);
  }

  listMessages(query: Query) {
    this.messageService.list(query).subscribe(res=> {
        this.messages = res.content;
        this.pageState.first = res.first;
        this.pageState.last = res.last;
        this.buildAddress();
      },
      error=> {
        Materialize.toast('网络错误', 2000);
      }
    )
  }

  getAddress(message: any) {
    $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip=' + message.ip, function () {
      if (remote_ip_info.ret == 1) {
        message.address = remote_ip_info.province + remote_ip_info.city;
      } else {
        message.address = '未知';
      }
    });
  }

  buildAddress() {
    for (let i = 0; i < this.messages.length; i++) {
      this.messages[i].address = '未知';
      this.getAddress(this.messages[i]);
    }
  }

  openReplyModal(message: any) {
    $('#modal1').modal('open');
    this.replyMessage = message;
    this.reply.messageId = message.id;
  }

  closeReplyModal() {
    $('#modal1').modal('close');
  }

  saveReply() {
    this.replyService.save(this.reply).subscribe(res=> {
        Materialize.toast(res.msg, 2000);
        if (res.code) {
          this.replyMessage.replies.push(res.data);
          this.reply = new Reply("", "", -1);
          this.closeReplyModal();
        }
      },
      error=> {
        Materialize.toast('网络错误', 2000);
      }
    );
  }

  saveMessage() {
    this.messageService.save(this.message).subscribe(res=> {
        Materialize.toast(res.msg, 2000);
        if (res.code) {
          this.messages.unshift(res.data);
          this.message = new Message("", "", "");
        }
      },
      error=> {
        Materialize.toast('网络错误', 2000);
      }
    )
  }

  nextPage() {
    this.query.page += 1;
    this.listMessages(this.query);
  }

  previousPage() {
    this.query.page -= 1;
    this.listMessages(this.query);
  }

}
