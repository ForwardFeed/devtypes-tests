import type {CurriedParameters} from "@devtypes/functional"
// Examples from the documentation
type CurriedFn = ( a: string ) => ( b: number ) => ( c: boolean ) => void;
type Params = CurriedParameters< CurriedFn >;  // [ string, number, boolean ]
