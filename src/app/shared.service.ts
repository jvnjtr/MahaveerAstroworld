import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private pageNameSource = new BehaviorSubject<string>('home'); // Set default value
  pageName$ = this.pageNameSource.asObservable();

  setPageName(name: string) {
    this.pageNameSource.next(name);
  }
}
