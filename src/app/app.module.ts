import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { DeletedComponent } from './deleted/deleted.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'fav', component: FavouriteComponent },
    { path: 'del', component: DeletedComponent },
    { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, FavouriteComponent, DeletedComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
