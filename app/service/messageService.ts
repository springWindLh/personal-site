/**
 * Created by lh on 2016/12/12.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {PageUtil} from "./util/PageUtil";
import {Query} from "./util/QueryUtil";
import {Message} from "../domain/Message";
import {Observable} from "rxjs";
@Injectable()
export class MessageService {
  HTTP_URL = 'http://192.168.1.8:8085/rest';

  constructor(private http: Http) {
  }

  list(query: Query):Observable<any> {
    return this.http.get(this.HTTP_URL + '/message/list', {search:PageUtil.getPageParams(query)})
      .map(res=>res.json().data);
  }

  save(message: Message):Observable<any> {
    return this.http.post(this.HTTP_URL + '/message/add', message).map(res=>res.json());
  }
}
