import type {AssertSymbol} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertSymbol< symbol >;  // ✓
// @ts-expect-error
type B = AssertSymbol< string >;  // ✗ TS error

// Manually written content.
