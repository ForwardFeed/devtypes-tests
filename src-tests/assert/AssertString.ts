import type {AssertString} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertString< '42' >;  // ✓
// @ts-expect-error
type B = AssertString< 42 >;    // ✗ TS error

// Manually written content.
