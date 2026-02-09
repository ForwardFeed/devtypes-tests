import type {AssertSymbol} from "@devtypes/assert"
// Examples from the documentation
type A = AssertSymbol< symbol >;  // ✓
type B = AssertSymbol< string >;  // ✗ TS error
