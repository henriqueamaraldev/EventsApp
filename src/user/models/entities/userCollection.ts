import mongoose from "mongoose";
import { IUser } from "./User";
import { UserSchema } from "./userSchema";

export const UserCollection = mongoose.model<IUser>("User", UserSchema);