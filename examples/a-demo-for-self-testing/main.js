// import { foo as fooFromComponent } from "./component";
import { foo as originalFoo } from "./foo";
import { foo as fakeFoo } from "data:text/javascript, export const foo = 'fake-foo'";

console.log(originalFoo, fakeFoo);

// console.log(fooFromComponent, originalFoo);
