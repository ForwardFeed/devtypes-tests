import type {AssertTypeWeak} from "@devtypes/assert"
// Examples from the documentation
type A = AssertTypeWeak< string, string | number >;  // ✓
type B = AssertTypeWeak< 42, number >;               // ✓

type C = AssertTypeWeak< number, string >;           // ✗ TS error

// Superset behavior (intentional)
type D = AssertTypeWeak< string, unknown >;          // ✓
