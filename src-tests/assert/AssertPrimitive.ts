import type {AssertPrimitive} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertPrimitive< string >;  // ✓
// @ts-expect-error
type B = AssertPrimitive< {} >;      // ✗ TS error

// Manually written content.
