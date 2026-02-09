import type {AssertMap} from "@devtypes/assert"
// Examples from the documentation
type A = AssertMap< Map< string, number > >;  // ✓
type B = AssertMap< Set< number > >;          // ✗ TS error
