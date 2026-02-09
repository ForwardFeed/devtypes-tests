import type {AssertPromiseLike} from "@devtypes/assert"
// Examples from the documentation
type A = AssertPromiseLike< Promise< number > >;  // ✓
type B = AssertPromiseLike< { then(): void } >;   // ✓
type C = AssertPromiseLike< number >;             // ✗ TS error
