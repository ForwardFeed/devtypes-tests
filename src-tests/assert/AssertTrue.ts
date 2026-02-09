import type {AssertTrue} from "@devtypes/assert"
// Examples from the documentation
type A = AssertTrue< true >;   // ✓
type B = AssertTrue< false >;  // ✗ TS error
