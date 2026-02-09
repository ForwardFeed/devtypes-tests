import type {AssertPromiseLike} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertPromiseLike< Promise< number > >;  // ✓
type B = AssertPromiseLike< { then(): void } >;   // ✓
// @ts-expect-error
type C = AssertPromiseLike< number >;             // ✗ TS error

// Manually written content.
