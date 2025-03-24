import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty route to Home
    { path: 'home', component: AboutUsComponent },
    { path: 'events', component: EventsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
