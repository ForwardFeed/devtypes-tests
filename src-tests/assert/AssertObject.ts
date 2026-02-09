import type {AssertObject} from "@devtypes/assert"
// Examples from the documentation
type A = AssertObject< { a: number } >;  // ✓
type B = AssertObject< number >;         // ✗ TS error
