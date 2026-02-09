import type {AssertArray} from "@devtypes/assert"
// Examples from the documentation
type A = AssertArray< number[] >;           // ✓
type B = AssertArray< readonly string[] >;  // ✓
type C = AssertArray< string >;             // ✗ TS error
