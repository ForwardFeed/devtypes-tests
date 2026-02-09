import type {PartialClass} from "@devtypes/class"
// Examples from the documentation
class User { id: number; name: string; email: string; }
type PartialUser = PartialClass< User >;
// { id?: number; name?: string; email?: string; }
