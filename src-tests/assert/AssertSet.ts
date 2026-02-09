import type {AssertSet} from "@devtypes/assert"
// Examples from the documentation
type A = AssertSet< Set< number > >;  // ✓
type B = AssertSet< number[] >;       // ✗ TS error
