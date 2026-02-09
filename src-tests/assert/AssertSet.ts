import type {AssertSet} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertSet< Set< number > >;  // ✓
type B = AssertSet< number[] >;       // ✗ TS error

// Manually written content.
