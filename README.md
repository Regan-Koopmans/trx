# TRX

Reactive programming primitives written in TypeScript for Deno.

## Usage

Here is a short example of stream processing using trx.

```typescript
import {Stream} from "https://raw.githubusercontent.com/Regan-Koopmans/trx/master/mod.ts";

let result =
    Stream.of("Amy", "Bob", "Charles")
        .map(name => name.toUpperCase())
        .filter(name => name.includes("A"))
        .blockingGet();

console.log(result); // [ "AMY", "CHARLES" ]
```
