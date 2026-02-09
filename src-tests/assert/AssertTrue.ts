import type {AssertTrue} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertTrue< true >;   // ✓
// @ts-expect-error
type B = AssertTrue< false >;  // ✗ TS error

// Manually written content.
