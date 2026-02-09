import type {AssertPrimitive} from "@devtypes/assert"
// Examples from the documentation
type A = AssertPrimitive< string >;  // ✓
type B = AssertPrimitive< {} >;      // ✗ TS error
