import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { RecursosCategoriaComponent } from './recursos-categoria/recursos-categoria.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '',component: PaginaPrincipalComponent},
    {path: 'recursos-categoria',component: RecursosCategoriaComponent},
    {path: 'login',component: LoginComponent}
];
