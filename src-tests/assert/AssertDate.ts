import type {AssertDate} from "@devtypes/assert"
// Examples from the documentation
type A = AssertDate< Date >;    // ✓
type B = AssertDate< string >;  // ✗ TS error
