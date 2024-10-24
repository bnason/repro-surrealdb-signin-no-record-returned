import { Surreal } from 'surrealdb';
import { surrealdbNodeEngines } from 'surrealdb.node';

// Enable the WebAssembly engines
const db = new Surreal({
	engines: surrealdbNodeEngines(),
});

// Now we can start SurrealDB as an in-memory database
await db.connect('mem://');
