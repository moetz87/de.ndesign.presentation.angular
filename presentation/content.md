# AngularJS


[//]:H
## AngularJS?


[//]:V
### AngularJS!

* Clientseitiges Javascript Framework
* Entwicklung von Single-Page-Webapps
* MVM: Model-View-ViewModel
* Typescript
  * Klassen, Interfaces, Vererbung, Generics
  * Modularisierung
  * Kompatibel zu Plain-Javascript
  * Wird zu Plain-Javascript kompiliert
* Dependency Injection 


[//]:V
### Architektur

* https://angular.io/docs/ts/latest/guide/architecture.html
* `Component`
  * Bilden Teile der UI ab
  * Angular Applikation = Menge von Components
  * Definieren Aussehen und Verhalten
* `Module`
  * Jede Angular-App hat mindestens ein Modul: `AppModule` (per Konvention)
  * *Modules consolidate components, directives and pipes into cohesive blocks of functionality [...] Modules can also add services*
  * Binden Components: Eine Component gehoert immer zu einem Module
  * Bieten Services an
* `Service`
  * Services koennen injiziert werden
  * Stehen in der gesamten App zur Verfuegung





[//]:H
## Entwicklungsumgebung


[//]:V
### Einrichten einer Entwicklungsumgebung

* NodeJS
* NodeJS-Plugins:
  * `lodash`: Javascript-Utilities (Vergleichbar mit Apache Commons)
  * `gulp`: Automatisierung sich wiederholender Tasks (Bundling, Refreshing, Running, ...)
  * `angular-cli`

```bash
npm init .
npm install --save lodash
npm install --save-dev gulp
npm install
npm install -g angular-cli
```

* `init` erstellt initiale `package.json`
* `--save` speichert Abhaengigkeit und schreibt sie zusaetzlich in `package.json`
* `-g` = *global*: Eine Abhaengigkeit wird systemweit installiert


[//]:V
### Angular-CLI

* NodeJS-Plugin
* Hilfe bei Erstellung, Entwicklung, Deployment
* "Hello World"-Angular-Applikation ohne angular-cli: https://angular.io/docs/ts/latest/quickstart.html
* Konsolenbefehl: `ng`





[//]:H
## Erstellen eines Angular-Projekts


[//]:V
### Erstellen eines Projekts

```bash
ng help
ng new APPLICATIONNAME
cd APPLICATIONNAME
ng serve
```


[//]:V
### Dateistruktur

* Komplex!
  * Viele unterschiedliche Technologien
  * Viele Konfigurationsdateien
  * Wer versteht das?!

```
.
|   angular-cli.json
|   karma.conf.js
|   package.json
|   protractor.conf.js
|   README.md
|   tslint.json
|   
+---e2e
|       app.e2e-spec.ts
|       app.po.ts
|       tsconfig.json
|       
+---node_modules
|
...
|
\---src
    |   favicon.ico
    |   index.html
    |   main.ts
    |   polyfills.ts
    |   styles.css
    |   test.ts
    |   tsconfig.json
    |   typings.d.ts
    |   
    +---app
    |       app.component.css
    |       app.component.html
    |       app.component.spec.ts
    |       app.component.ts
    |       app.module.ts
    |       index.ts
    |       
    +---assets
    |       
    \---environments
            environment.prod.ts
            environment.ts
```

* Dank angular-cli muss man das nicht verstehen!





[//]:H
## Entwicklung #1: Components und Modules


[//]:V
### Angular Applikation

```
\---src
    |   index.html
    |   main.ts
    |   
    +---app
    |       app.component.css
    |       app.component.html
    |       app.component.ts
    |       app.module.ts
```


[//]:V
### `app.component.ts`

```typescript
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    ...
}
```

* `@Component`-Decorator
  * Metadaten: Markiert eine Klasse als "Angular Component"
  * Beschreibt, wie/wann/wo eine Klasse prozessiert, instanziiert und verwendet wird
  * Component-Klasse wird exportiert
* `selector`: Element im DOM, das durch das Template ersetzt werden soll
* `templateUrl`: Angabe des Templates
* `styleUrl`: Angabe des Stylesheets fuer das Template


[//]:V
### `app.module.ts`

```typescript
@NgModule({
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [  ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
```
* `@NgModule` 
* `declarations`: Definiert eine Component als Member eines Moduls
* `imports`: Exportierte Deklarationen (z.B. Services) aus anderen Modulen werden importiert
* `providers`: Definiert fuer Dependency Injection verwendbare Services
* `bootstrap`: Angegebene Components werden in den DOM eingehangen, wenn das Modul beim Startup erstellt wird


[//]:V
### Component, Module, Class erzeugen

```bash
ng generate module MODULENAME
```

* Erzeugt:
    * `MODULENAME.module.ts`
    * `MODULENAME.component.ts`
    * `MODULENAME.component.html`
    * `MODULENAME.component.css`

```bash
ng generate component COMPONENTNAME
```
* Erweitert: `app.module.ts`
* Erzeugt (in eigenem Unterordner):
    * `MODULENAME.component.ts`
    * `MODULENAME.component.html`
    * `MODULENAME.component.css`

```bash
ng generate class CLASSNAME
```
* Erzeugt: `CLASSNAME.ts`





[//]:H
## Entwicklung #2: UI


[//]:V
### Databinding

* One-way: Component => UI
    * `{{VARIABLE}}`
```html
<p>{{werIstSchuld}} ist schuld!</p>
```
    * `werIstSchuld` ist ein Klassenmember von *.component.ts

* Two-Way: Component <=> UI
    * `[(ngModel)]='VARIABLE'`
```html
<textarea [(ngModel)]='werIstSchuld'></textarea>
``` 
    * `werIstSchuld` ist ein Klassenmember von *.component.ts


[//]:V
### Directives

* `*ngIf`
```
*ngIf="list > 5"
```
* `*ngSwitch`
* `*ngFor`
```
*ngFor="let element of list"
```
* `(click)`
```
(click)="onNewElementClick()"
```
* But wait, there is more!
https://angular.io/docs/ts/latest/api/#!?type=directive


[//]:V
### Routing

* Mapping zwischen URL <> Component
* Routing-Module anlegen:

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'settings', component: SettingsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
```

* Anpassen der `app.component.html`:
```html
<router-outlet></router-outlet>
```
* Verwendung:
```html
<a routerLink="/main">Show Main</a>
```





[//]:H
## Entwicklung #3: Services


[//]:V
### Erzeugung eines Services

```bash
ng generate service SERVICENAME
```
* Erzeugt: `SERVICENAME.service.ts`
* `@Injectable()`-Decorator
* Muss *provided* werden: @NgModule.providers





[//]:H
## Entwicklung #4: Backend


[//]:V
### RxJS

* https://github.com/Reactive-Extensions/RxJS
* *asynchronous and event-based programs using observables*
* Reaktive Programmierung
* Asynchrone Antworten
* Aufruf von Webschnittstellen


[//]:V
### Beispiel

```typescript
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

httpService: Http;

public addTodo(todo: Todo): Observable<boolean> {
	let body = JSON.stringify(todo);
	let headers = new Headers();
	headers.append("Content-Type", "application/json");
	return this.httpService.post('http://localhost:3000/todos', body, { headers: headers })
		.map(resp => resp.json() as boolean);

}

public getTodos(): Observable<Todo[]> {
	return this.httpService.get('http://localhost:3000/todos')
		.map(resp => resp.json() as Todo[]);
}
```





[//]:H
## Deployment

[//]:V
### via angular-cli

```bash
ng build
```

* Optimiert, Minifiziert und Packt
* Ausgabe ins `dist/` Verzeichnis
  * `index.html`
  * `main.bundle.js`: Alle Abhaengigkeiten minifiziert und in einem js-File gepackt
  * `styles.bundle.js`: Alle Styles minifiziert und in einem js-File gepackt
  * `inline.bundle.js`
* Kann auf jedem beliebigen Webserver deployed werden!


