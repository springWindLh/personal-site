/**
 * Created by lh on 2016/12/12.
 */
import {Component, ViewChild, ElementRef, OnInit} from "@angular/core";
import {Reply} from "../../domain/Reply";
import {MessageService} from "../../service/messageService";
import {ReplyService} from "../../service/replyService";
import {Message} from "../../domain/Message";
import {Query} from "../../service/util/QueryUtil";
declare var Materialize:any;
@Component({
  moduleId: module.id,
  selector: 'message-page',
  templateUrl: 'message.html',
  providers: [MessageService, ReplyService]
})

export class MessagePage implements OnInit {
  @ViewChild('replyArea') replyArea: ElementRef;
  messages:any[] = [];
  message: Message;
  reply: Reply;
  query: Query = new Query(1, 10);

  constructor(private messageService: MessageService, private replyService: ReplyService) {

  }


  ngOnInit(): void {
    this.messageService.list(this.query).subscribe(res=> {
        if (res.code) {
          this.messages = res.content;
        }
      },
      error=> {
        Materialize.toast('网络错误', 2000);
      }
    )
  }

  showReplyArea() {
    var replyStyle = this.replyArea.nativeElement.css('display');
    if (replyStyle == 'none') {
      this.replyArea.nativeElement.css('display', 'block');
    } else {
      this.replyArea.nativeElement.css('display', 'none');
    }
  }

  saveReply(replies:any) {
    this.replyService.save(this.reply).subscribe(res=> {
        Materialize.toast(res.msg, 2000);
        if (res.code) {
          replies.push(res.data);
          // this.reply = new Reply();
          this.replyArea.nativeElement.css('display', 'none');
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
          // this.message = new Message();
        }
      },
      error=> {
        Materialize.toast('网络错误', 2000);
      }
    )
  }

}
