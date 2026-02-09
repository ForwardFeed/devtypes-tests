import type {AssertPromise} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertPromise< Promise< number > >;  // ✓
// @ts-expect-error
type B = AssertPromise< number >;             // ✗ TS error

// Manually written content.
