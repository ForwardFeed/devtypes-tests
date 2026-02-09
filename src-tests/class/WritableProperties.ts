import type {WritableProperties} from "@devtypes/class"
// Examples from the documentation
class Profile { readonly id: number; bio: string; avatarUrl: string; }
type WritablePropsObj = WritableProperties< Profile >;
// { bio: string; avatarUrl: string; }
