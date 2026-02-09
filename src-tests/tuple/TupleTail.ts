import type {TupleTail} from "@devtypes/tuple"
// Examples from the documentation
type H = TupleTail< [ number, string, boolean ] >;
// [ string, boolean ]
