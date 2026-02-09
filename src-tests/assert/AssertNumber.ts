import type {AssertNumber} from "@devtypes/assert"
// Examples from the documentation
type A = AssertNumber< number >;   // ✓
type B = AssertNumber< boolean >;  // ✗ TS error
