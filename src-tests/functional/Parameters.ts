import type {Parameters} from "@devtypes/functional"
// Examples from the documentation
type Fn = ( a: string, b: number, c: boolean ) => void;
type Params = Parameters< Fn >;
// [ a: string, b: number, c: boolean ]
