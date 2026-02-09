import type {AssertTypeWeak} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertTypeWeak< string, string | number >;  // ✓
type B = AssertTypeWeak< 42, number >;               // ✓

type C = AssertTypeWeak< number, string >;           // ✗ TS error

// Superset behavior (intentional)
type D = AssertTypeWeak< string, unknown >;          // ✓

// Test automatically generated from examples.
const A: A = ✓
const B: B = ✓
const C: C = ✗ TS error
const D: D = ✓

// Manually written content.
