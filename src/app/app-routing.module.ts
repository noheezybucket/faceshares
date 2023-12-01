import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceShareListComponent } from "./face-share-list/face-share-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleFaceShareComponent } from "./single-face-share/single-face-share.component";

const routes: Routes = [
    { path: 'faceshares/:id', component: SingleFaceShareComponent },
    { path: 'faceshares', component: FaceShareListComponent },
    { path: '', component: LandingPageComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }