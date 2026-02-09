import type {AssertTypeWeak} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertTypeWeak< string, string | number >;  // ✓
type B = AssertTypeWeak< 42, number >;               // ✓
// @ts-expect-error
type C = AssertTypeWeak< number, string >;           // ✗ TS error

// Superset behavior (intentional)
type D = AssertTypeWeak< string, unknown >;          // ✓

// Manually written content.
