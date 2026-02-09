import type {AssertBoolean} from "@devtypes/assert"
// Examples from the documentation
type A = AssertBoolean< true >;    // ✓
type B = AssertBoolean< string >;  // ✗ TS error
