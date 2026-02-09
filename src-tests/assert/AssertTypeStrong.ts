import type {AssertTypeStrong} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertTypeStrong< true, true >;               // ✓
// @ts-expect-error
type B = AssertTypeStrong< true, boolean >;            // ✗ TS error
// @ts-expect-error
type C = AssertTypeStrong< string, string | number >;  // ✗ TS error

// Manually written content.
