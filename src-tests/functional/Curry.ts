import type {Curry} from "@devtypes/functional"
// Examples automatically extracted from the documentation.
type Fn = ( a: string, b: number, c: boolean ) => void;
type CurriedFn = Curry< Fn >;
// ( arg: string ) => ( arg: number ) => ( arg: boolean ) => void
// Manually written content.
