import type {AssertTypeStrong} from "@devtypes/assert"
// Examples from the documentation
type A = AssertTypeStrong< true, true >;               // ✓
type B = AssertTypeStrong< true, boolean >;            // ✗ TS error
type C = AssertTypeStrong< string, string | number >;  // ✗ TS error
