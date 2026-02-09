import type {AssertMap} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertMap< Map< string, number > >;  // ✓
// @ts-expect-error
type B = AssertMap< Set< number > >;          // ✗ TS error

// Manually written content.
