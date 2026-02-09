import type {AssertString} from "@devtypes/assert"
// Examples from the documentation
type A = AssertString< '42' >;  // ✓
type B = AssertString< 42 >;    // ✗ TS error
