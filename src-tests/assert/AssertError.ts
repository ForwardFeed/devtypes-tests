import type {AssertError} from "@devtypes/assert"
// Examples from the documentation
type A = AssertError< Error >;      // ✓
type B = AssertError< TypeError >;  // ✓
type C = AssertError< string >;     // ✗ TS error
