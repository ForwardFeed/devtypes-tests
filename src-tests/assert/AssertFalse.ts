import type {AssertFalse} from "@devtypes/assert"
// Examples from the documentation
type A = AssertFalse< false >;  // ✓
type B = AssertFalse< true >;   // ✗ TS error
