import type {AssertArray} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertArray< number[] >;           // ✓
type B = AssertArray< readonly string[] >;  // ✓
type C = AssertArray< string >;             // ✗ TS error

// Manually written content.
