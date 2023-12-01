import { Injectable } from "@angular/core";
import { FaceShare } from '../models/face-share.model';

@Injectable({
    providedIn: 'root'
})

export class FaceShareService {
    faceShares: FaceShare[] = [
        {
            id: 1,
            title: "Nwaar",
            description: "The greatest nwa of all time",
            imageUrl: "../../assets/noir.jpg",
            createdAt: new Date(),
            snaps: 200,
            snapped: false,
            location: "Dakar"
        },
        {
            id: 2,
            title: "Doum",
            description: "The greatest nwa of all time",
            imageUrl: "../../assets/noir.jpg",
            createdAt: new Date(),
            snaps: 0,
            snapped: false,
            location: "Au Radisson"
        },

        {
            id: 3,
            title: "Grass",
            description: "The greatest nwa of all time",
            imageUrl: "../../assets/noir.jpg",
            createdAt: new Date(),
            snaps: 1,
            snapped: false
        },
        {
            id: 4,
            title: "Nwaar",
            description: "The greatest nwa of all time",
            imageUrl: "../../assets/noir.jpg",
            createdAt: new Date(),
            snaps: 20,
            snapped: false,
            location: "Dakar"
        },
        {
            id: 5,
            title: "Doum",
            description: "The greatest nwa of all time",
            imageUrl: "../../assets/noir.jpg",
            createdAt: new Date(),
            snaps: 2,
            snapped: false,
            location: "Au Radisson"
        },

        {
            id: 6,
            title: "Grass",
            description: "The greatest nwa of all time",
            imageUrl: "../../assets/noir.jpg",
            createdAt: new Date(),
            snaps: 14,
            snapped: false
        }

    ]

    getAllFaceShares(): FaceShare[] {
        return this.faceShares
    }

    getSnapById(id: number): FaceShare {
        const faceShare = this.faceShares.find(faceShare => faceShare.id === id)
        if (faceShare) {
            return faceShare
        } else {
            throw new Error("Faceshare not found");
        }
    }

    onSnap(id: number, snapType: 'snap' | 'unsnap'): void {
        const faceShare = this.getSnapById(id);

        snapType === 'snap' ? faceShare.snaps++ : faceShare.snaps--

    }
}