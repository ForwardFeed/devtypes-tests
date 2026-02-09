import type {AssertFalse} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertFalse< false >;  // ✓
// @ts-expect-error
type B = AssertFalse< true >;   // ✗ TS error

// Manually written content.
