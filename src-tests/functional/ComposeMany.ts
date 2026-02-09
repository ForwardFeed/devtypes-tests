import type {ComposeMany} from "@devtypes/functional"
// Examples from the documentation
type F1 = ( x: number ) => string;
type F2 = ( y: string ) => boolean;
type F3 = ( z: boolean ) => Date;
type ComposedMany = ComposeMany< [ F1, F2, F3 ] >;
// ( arg: number ) => Date
