import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RenkaListMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserDashbordModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MileyPersonModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class RenkaList {
  readonly id: string;
  readonly auther: string;
  readonly text: string;
  readonly category?: string | null;
  readonly date?: string | null;
  readonly UserDashbordModel?: UserDashbordModel | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly renkaListUserDashbordModelId?: string | null;
  constructor(init: ModelInit<RenkaList, RenkaListMetaData>);
  static copyOf(source: RenkaList, mutator: (draft: MutableModel<RenkaList, RenkaListMetaData>) => MutableModel<RenkaList, RenkaListMetaData> | void): RenkaList;
}

export declare class UserDashbordModel {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserDashbordModel, UserDashbordModelMetaData>);
  static copyOf(source: UserDashbordModel, mutator: (draft: MutableModel<UserDashbordModel, UserDashbordModelMetaData>) => MutableModel<UserDashbordModel, UserDashbordModelMetaData> | void): UserDashbordModel;
}

export declare class MileyPersonModel {
  readonly id: string;
  readonly name: string;
  readonly kana?: string | null;
  readonly born?: string | null;
  readonly rip?: string | null;
  readonly job?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MileyPersonModel, MileyPersonModelMetaData>);
  static copyOf(source: MileyPersonModel, mutator: (draft: MutableModel<MileyPersonModel, MileyPersonModelMetaData>) => MutableModel<MileyPersonModel, MileyPersonModelMetaData> | void): MileyPersonModel;
}