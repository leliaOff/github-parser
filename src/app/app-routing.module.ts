import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchStringComponent } from './search-string/search-string.component';
import { UserRepositoriesComponent } from './user-repositories/user-repositories.component';

const routes: Routes = [
    { path: 'user/:login', component: UserRepositoriesComponent },
    { path: 'string', component: SearchStringComponent },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
