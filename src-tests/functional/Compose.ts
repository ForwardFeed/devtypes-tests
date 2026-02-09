import type {Compose} from "@devtypes/functional"
// Examples from the documentation
type F = ( x: number ) => string;
type G = ( y: string ) => boolean;
type Composed = Compose< F, G >;
// ( arg: number ) => boolean
