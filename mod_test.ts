import { assertEquals } from "./test_deps.ts";
import { Stream } from "./mod.ts";

Deno.test({
  name: "creation (of)",
  fn(): void {
    let stream = Stream.of(1, 2, 3);
    assertEquals(stream.blockingGet(), [1, 2, 3]);
  },
});

Deno.test({
  name: "creation (fromList)",
  fn(): void {
    let stream = Stream.fromList([1, 2, 3]);
    assertEquals(stream.blockingGet(), [1, 2, 3]);
  },
});


Deno.test({
  name: "rudimentary map",
  fn(): void {
    let stream = Stream.of(1, 2, 3).map((x: number) => x + 1);
    assertEquals(stream.blockingGet(), [2, 3, 4]);
  },
});

Deno.test({
  name: "rudimentary filter",
  fn(): void {
    let stream = Stream.of(1, 2, 3).filter((x: number) => x % 2 == 0);
    assertEquals(stream.blockingGet(), [2]);
  },
});

Deno.test({
  name: "rudimentary reduce",
  fn(): void {
    let stream = Stream.of(1, 2, 3).reduce((x: number, y: number) =>  x + y);
    assertEquals(stream.blockingGet(), 6);
  },
});
