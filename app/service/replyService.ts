/**
 * Created by lh on 2016/12/12.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Reply} from "../domain/Reply";
@Injectable()
export class ReplyService{
  HTTP_URL = 'http://192.168.4.90:8085/rest';

  constructor(private http: Http) {
  }

  save(reply:Reply){
    return this.http.post(this.HTTP_URL + '/reply/add', reply).map(res=>res.json());
  }
}
