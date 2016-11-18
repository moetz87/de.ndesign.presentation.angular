import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { SettingsComponent } from './settings/settings.component';

import {TodoService} from './shared/todo.service';
import { MenuComponent } from './menu/menu.component';

@NgModule({
	declarations: [
		AppComponent,
		TodoComponent,
		SettingsComponent,
		MenuComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [TodoService],
	bootstrap: [AppComponent]
})
export class AppModule { }
