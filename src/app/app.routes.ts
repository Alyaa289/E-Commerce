import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/products/product-details/product-details.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login.component';
import { RegisterComponent } from './pages/auth/register.component';

export const routes: Routes = [
    { path: '',  redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent, pathMatch: 'full' },
    { path: 'products', component: ProductsComponent , pathMatch: 'full' },
    { path: 'products/:id', component: ProductDetailsComponent , pathMatch: 'full' },
    { path: 'products/:id/edit', component: ProductFormComponent , pathMatch: 'full' },
    { path: 'login', component: LoginComponent , pathMatch: 'full' },
    { path: 'register', component: RegisterComponent , pathMatch: 'full' },
    { path: '**', component: NotFoundComponent , pathMatch: 'full' },
];
