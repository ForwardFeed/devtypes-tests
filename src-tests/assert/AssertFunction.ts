import type {AssertFunction} from "@devtypes/assert"
// Examples from the documentation
type A = AssertFunction< () => void >;  // ✓
type B = AssertFunction< {} >;          // ✗ TS error
