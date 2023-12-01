import { Component } from '@angular/core';
import { FaceShare } from '../models/face-share.model';
import { FaceShareService } from '../services/face-share.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-share',
  templateUrl: './single-face-share.component.html',
  styleUrls: ['./single-face-share.component.scss']
})
export class SingleFaceShareComponent {
  faceShare!: FaceShare;

  constructor(private faceShareServices: FaceShareService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const snapId = +this.route.snapshot.params['id']

    this.faceShareServices.getSnapById(snapId)
  }

  onQalf() {

    if (this.faceShare.snapped === false) {
      this.faceShareServices.onSnap(this.faceShare.id, 'snap')
      this.faceShare.snapped = true
    } else {
      this.faceShareServices.onSnap(this.faceShare.id, 'unsnap')

      this.faceShare.snapped = false
    }
  }

}
