import type {AssertRegExp} from "@devtypes/assert"
// Examples automatically extracted from the documentation.
type A = AssertRegExp< RegExp >;  // ✓
type B = AssertRegExp< string >;  // ✗ TS error
// Manually written content.
