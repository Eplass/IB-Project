import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShopComponent } from './shop/shop.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty route to Home
    { path: 'home', component: AboutUsComponent },
    { path: 'events', component: EventsComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'item/:id', component: ItemDetailComponent }, // Dynamic route for item details
    { path: 'sponsors', component: SponsorsComponent },
    { path: 'portfolio', component: PortfolioComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
