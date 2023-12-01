import { Component } from '@angular/core';
import { FaceShare } from '../models/face-share.model';
import { FaceShareService } from '../services/face-share.service';

@Component({
  selector: 'app-face-share-list',
  templateUrl: './face-share-list.component.html',
  styleUrls: ['./face-share-list.component.scss']
})
export class FaceShareListComponent {
  faceShares!: FaceShare[]

  constructor(private faceShareService: FaceShareService) { }


  ngOnInit() {
    this.faceShares = this.faceShareService.getAllFaceShares()
  }
}
