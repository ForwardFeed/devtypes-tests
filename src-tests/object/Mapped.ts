import type {Mapped} from "@devtypes/object"
// Examples from the documentation
type IsInformationPublic = Mapped< 'username' | 'email', boolean >;
// { username: true, email: false }
