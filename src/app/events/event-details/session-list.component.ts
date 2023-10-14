import {Component, Input, OnChanges, Output} from '@angular/core';
import {ISession} from "../shared/event.model";

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {

  @Input() sessions: ISession[] = [];
  @Input() filterBy: string = '';
  @Input() sortBy: string = '';
  visibleSessions: ISession[] = [];

  ngOnChanges() {
    if(this.sessions.length == 0) {
      return;
    }

    this.filterSessions(this.filterBy);
    this.sortSessions(this.sortBy);
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
      return;
    }

    this.visibleSessions = this.sessions.filter(session => {
      return session.level.toLocaleLowerCase() === filter;
    })
  }

  sortSessions(sortBy: string) {
    if (sortBy === 'name') {
      this.visibleSessions.sort((s1, s2) => this.sortByNameAsc(s1, s2));
    }
    if (sortBy === 'votes') {
      this.visibleSessions.sort((s1, s2) => this.sortByVotesDesc(s1, s2));
    }
  }

  private sortByNameAsc(s1: ISession, s2: ISession): number {
    if (s1.name > s2.name) return 1;
    else if (s1.name === s2.name) return 0;
    return -1;
  }

  private sortByVotesDesc(s1: ISession, s2: ISession): number {
    return s2.voters.length - s1.voters.length;
  }

}
