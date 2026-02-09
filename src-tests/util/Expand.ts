import type {Expand} from "@devtypes/util"
// Examples from the documentation
type Nested = { a: { b: { c: number } } };
type Expanded = Expand< Nested >;
// { a: { b: { c: number } } }
