import type {AssertRegExp} from "@devtypes/assert"
// Examples from the documentation
type A = AssertRegExp< RegExp >;  // ✓
type B = AssertRegExp< string >;  // ✗ TS error
