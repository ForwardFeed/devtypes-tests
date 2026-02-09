import type {AssertObject} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertObject< { a: number } >;  // ✓
type B = AssertObject< number >;         // ✗ TS error

// Manually written content.
