import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { SignInPage  } from './sign-in/sign-in.page'; 

const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'signin', component: SignInPage },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige vers la page de connexion par défaut

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'form',
    loadChildren: () => import('./form-produit-page/form-produit-page.module').then( m => m.FormProduitPagePageModule)
  },
  {
    path: 'form/:id',
    loadChildren: () => import('./form-produit-page/form-produit-page.module').then( m => m.FormProduitPagePageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail-produit-page/detail-produit-page.module').then( m => m.DetailProduitPagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
