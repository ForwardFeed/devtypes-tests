import type {AssertPromise} from "@devtypes/assert"
// Examples from the documentation
type A = AssertPromise< Promise< number > >;  // ✓
type B = AssertPromise< number >;             // ✗ TS error
