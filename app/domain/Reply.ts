/**
 * Created by lh on 2016/12/12.
 */
export class Reply{
  nickName:string;
  content:string;
  messageId:number;


  constructor(nickName: string, content: string, messageId: number) {
    this.nickName = nickName;
    this.content = content;
    this.messageId = messageId;
  }
}
