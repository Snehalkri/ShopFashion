import { Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { SignUpComponent } from '../user/sign-up/sign-up.component';
import { SignInComponent } from '../user/sign-in/sign-in.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductComponent } from '../product/product.component';
import { ProductdetailComponent } from '../productdetail/productdetail.component';
import { CartComponent } from '../cart/cart.component';
import { AuthGuard } from '../auth/auth.guard';

export const routes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'cart', component: CartComponent
    },
    {
        path: 'product', component: ProductComponent
    },
    {
        path: 'productdetail', component: ProductdetailComponent
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }
];