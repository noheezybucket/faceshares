import { Component, Input, OnInit } from '@angular/core';
import { FaceShare } from '../models/face-share.model';
import { FaceShareService } from '../services/face-share.service';

@Component({
  selector: 'app-face-share',
  templateUrl: './face-share.component.html',
  styleUrls: ['./face-share.component.scss']
})

export class FaceShareComponent implements OnInit {
  @Input() faceShare!: FaceShare;

  constructor(private faceShareServices: FaceShareService) {

  }

  ngOnInit(): void {

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
