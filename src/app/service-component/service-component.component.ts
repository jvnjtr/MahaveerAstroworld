import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent {
 pageName:any='';
  constructor(private route: ActivatedRoute,
    private sharedService: SharedService) {}
  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      this.pageName = segments.map(segment => segment.path).join('/');
      console.log('Page Name:', this.pageName);
      this.sharedService.setPageName(this.pageName);
    });
  }
}
