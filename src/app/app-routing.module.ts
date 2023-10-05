import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/guard/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // auth ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  { path: 'sign-in', loadChildren: () => import('./auth/pages/sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'sign-up', loadChildren: () => import('./auth/pages/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'forgot-password', loadChildren: () => import('./auth/pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: 'verify-email', loadChildren: () => import('./auth/pages/verify-email/verify-email.module').then(m => m.VerifyEmailModule) },
  // juegos ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  { path: 'scores', loadChildren: () => import('./pages/juegos/scores/scores.module').then(m => m.ScoresModule) },
  { path: 'juegos', loadChildren: () => import('./pages/juegos/juegos.module').then(m => m.JuegosModule) },
  { path: 'juegos/ahorcado', loadChildren: () => import('./pages/juegos/ahorcado/ahorcado.module').then(m => m.AhorcadoModule) },
  { path: 'juegos/mayormenor', loadChildren: () => import('./pages/juegos/mayormenor/mayormenor.module').then(m => m.MayormenorModule) },
  { path: 'juegos/preguntados', loadChildren: () => import('./pages/juegos/preguntados/preguntados.module').then(m => m.PreguntadosModule) },
  { path: 'juegos/preguntadosdos', loadChildren: () => import('./pages/juegos/preguntadosdos/preguntadosdos.module').then(m => m.PreguntadosdosModule) },
  { path: 'juegos/tragamonedas', loadChildren: () => import('./pages/juegos/tragamonedas/tragamonedas.module').then(m => m.TragamonedasModule) },
  // pages ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'chat', loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatModule), canActivate: [AuthGuard] },
  { path: 'error404', loadChildren: () => import('./pages/error404/error404.module').then(m => m.Error404Module) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  { path: 'denegado', loadChildren: () => import('./pages/denegado/denegado.module').then(m => m.DenegadoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
