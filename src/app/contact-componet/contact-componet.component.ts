import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-contact-componet',
  templateUrl: './contact-componet.component.html',
  styleUrls: ['./contact-componet.component.css']
})
export class ContactComponetComponent {
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
