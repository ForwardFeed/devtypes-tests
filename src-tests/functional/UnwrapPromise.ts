import type {UnwrapPromise} from "@devtypes/functional"
// Examples from the documentation
type P = Promise< string >;
type U = UnwrapPromise< P >; // string
