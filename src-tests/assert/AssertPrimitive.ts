import type {AssertPrimitive} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertPrimitive< string >;  // ✓
type B = AssertPrimitive< {} >;      // ✗ TS error

// Manually written content.
