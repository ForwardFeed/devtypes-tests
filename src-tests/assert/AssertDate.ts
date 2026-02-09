import type {AssertDate} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertDate< Date >;    // ✓
// @ts-expect-error
type B = AssertDate< string >;  // ✗ TS error

// Manually written content.
