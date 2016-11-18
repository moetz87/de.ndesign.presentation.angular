import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todo/todo.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
	{ path: '', redirectTo: '/todos', pathMatch: 'full' },
	{ path: 'todos', component: TodoComponent },
	{ path: 'settings', component: SettingsComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }