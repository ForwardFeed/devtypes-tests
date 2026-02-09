import type {AssertError} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertError< Error >;      // ✓
type B = AssertError< TypeError >;  // ✓
type C = AssertError< string >;     // ✗ TS error

// Manually written content.
