## Installation:

```bash
npm install
```

## Starten: 

```bash
node app.js
```

## Schnittstellen:

### GET todos

Liefert alle Todos als JSON

```
GET http://localhost:3000/todos
```

### POST todos

Fuegt ein neues Todo ein

```
POST http://localhost:3000/todos

Header:
    "Content-Type" = "application/json"
	
Body: Todo als JSON
    {
        description: "DESCRIPTION_HERE"
    }
```