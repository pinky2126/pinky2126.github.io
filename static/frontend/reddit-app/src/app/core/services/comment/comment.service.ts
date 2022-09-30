import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@reddit/env/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = `${environment.serverUrl}${environment.baseUrl}`;

  constructor(public http: HttpClient) {}

  getComments(uuid: string, page: number = 1, children = false, parent = 0) {
    if (children) {
      return this.http.get(this.baseUrl + 'posts/' + uuid + '/comments/' + parent + '/children/?page=' + page);
    } else {
      return this.http.get(this.baseUrl + 'posts/' + uuid + '/comments/?page=' + page);
    }
  }

  createComment(uuid: string, comment) {
    return this.http.post(this.baseUrl + 'posts/' + uuid + '/comments/', comment);
  }

  updateComment(uuid: string, comment_pk: number, comment) {
    return this.http.put(this.baseUrl + 'posts/' + uuid + '/comments/' + comment_pk + '/', comment);
  }

  removeComment(uuid: string, comment_pk: number) {
    return this.http.delete(this.baseUrl + 'posts/' + uuid + '/comments/' + comment_pk + '/');
  }

  addCommentVote(uuid: string, comment_pk: number, data) {
    return this.http.post(this.baseUrl + 'posts/' + uuid + '/comments/' + comment_pk + '/votes/', data);
  }

  updateCommentVote(uuid: string, comment_pk: number, vote_id: number, data) {
    return this.http.put(this.baseUrl + 'posts/' + uuid + '/comments/' + comment_pk + '/votes/' + vote_id + '/', data);
  }

  removeCommentVote(uuid: string, comment_pk: number, vote_id: number) {
    return this.http.delete(this.baseUrl + 'posts/' + uuid + '/comments/' + comment_pk + '/votes/' + vote_id + '/');
  }

}