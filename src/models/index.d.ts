import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserModel {
  readonly id: string;
  readonly name: string;
  readonly twitter_id?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserModel, UserModelMetaData>);
  static copyOf(source: UserModel, mutator: (draft: MutableModel<UserModel, UserModelMetaData>) => MutableModel<UserModel, UserModelMetaData> | void): UserModel;
}