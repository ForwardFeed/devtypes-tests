import type {Brand} from "@devtypes/util"
// Examples from the documentation
type UserID = Brand< number, 'UserID' >;
const id: UserID = 123 as UserID;
