import type {AssertRegExp} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertRegExp< RegExp >;  // ✓
// @ts-expect-error
type B = AssertRegExp< string >;  // ✗ TS error

// Manually written content.
