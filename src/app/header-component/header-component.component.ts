import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent {
  currentPage: string = '';
  activePage = 'home';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.pageName$.subscribe(pageName => {
      console.log('Current Page:', pageName); // Debugging
      this.currentPage = pageName;
      this.triggerFunction();
    });
  }

  triggerFunction() {
    console.log('Triggering function for:', this.currentPage); // Debugging
    this.activePage = this.currentPage;
  }
}
