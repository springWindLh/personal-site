import {Query} from "./QueryUtil";
import {URLSearchParams} from "@angular/http";
/**
 * Created by lh on 2016/12/12.
 */
export class PageUtil {
  static getPageParams(query: Query) {
    let params = new URLSearchParams();
    params.append('page', query.page.toString());
    params.append('size', query.size.toString());
    return params;
  }

}
