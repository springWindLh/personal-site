/**
 * Created by lh on 2016/12/12.
 */
export class Message {
  nickName: string;
  email: string;
  content: string;


  constructor(nickName: string, email: string, content: string) {
    this.nickName = nickName;
    this.email = email;
    this.content = content;
  }
}
