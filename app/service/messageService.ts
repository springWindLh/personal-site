/**
 * Created by lh on 2016/12/12.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {PageUtil} from "./util/PageUtil";
import {Query} from "./util/QueryUtil";
import {Message} from "../domain/Message";
@Injectable()
export class MessageService {
  HTTP_URL = 'http://192.168.4.90:8080/rest';

  constructor(private http: Http) {
  }

  list(query: Query) {
    return this.http.get(this.HTTP_URL + '/message/list', PageUtil.getPageParams(query))
      .map(res=>res.json().data);
  }

  save(message: Message) {
    return this.http.post(this.HTTP_URL + '/message/add', message).map(res=>res.json());
  }
}
