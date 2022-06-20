/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRenkaListInput = {
  id?: string | null,
  auther: string,
  text: string,
  category?: string | null,
  date?: string | null,
  _version?: number | null,
  renkaListUserDashbordModelId?: string | null,
};

export type ModelRenkaListConditionInput = {
  auther?: ModelStringInput | null,
  text?: ModelStringInput | null,
  category?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelRenkaListConditionInput | null > | null,
  or?: Array< ModelRenkaListConditionInput | null > | null,
  not?: ModelRenkaListConditionInput | null,
  renkaListUserDashbordModelId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type RenkaList = {
  __typename: "RenkaList",
  id: string,
  auther: string,
  text: string,
  category?: string | null,
  date?: string | null,
  UserDashbordModel?: UserDashbordModel | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  renkaListUserDashbordModelId?: string | null,
  owner?: string | null,
};

export type UserDashbordModel = {
  __typename: "UserDashbordModel",
  id: string,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateRenkaListInput = {
  id: string,
  auther?: string | null,
  text?: string | null,
  category?: string | null,
  date?: string | null,
  _version?: number | null,
  renkaListUserDashbordModelId?: string | null,
};

export type DeleteRenkaListInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserDashbordModelInput = {
  id?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelUserDashbordModelConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUserDashbordModelConditionInput | null > | null,
  or?: Array< ModelUserDashbordModelConditionInput | null > | null,
  not?: ModelUserDashbordModelConditionInput | null,
};

export type UpdateUserDashbordModelInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteUserDashbordModelInput = {
  id: string,
  _version?: number | null,
};

export type CreateMileyPersonModelInput = {
  id?: string | null,
  name: string,
  kana?: string | null,
  born?: string | null,
  rip?: string | null,
  job?: string | null,
  _version?: number | null,
};

export type ModelMileyPersonModelConditionInput = {
  name?: ModelStringInput | null,
  kana?: ModelStringInput | null,
  born?: ModelStringInput | null,
  rip?: ModelStringInput | null,
  job?: ModelStringInput | null,
  and?: Array< ModelMileyPersonModelConditionInput | null > | null,
  or?: Array< ModelMileyPersonModelConditionInput | null > | null,
  not?: ModelMileyPersonModelConditionInput | null,
};

export type MileyPersonModel = {
  __typename: "MileyPersonModel",
  id: string,
  name: string,
  kana?: string | null,
  born?: string | null,
  rip?: string | null,
  job?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMileyPersonModelInput = {
  id: string,
  name?: string | null,
  kana?: string | null,
  born?: string | null,
  rip?: string | null,
  job?: string | null,
  _version?: number | null,
};

export type DeleteMileyPersonModelInput = {
  id: string,
  _version?: number | null,
};

export type ModelRenkaListFilterInput = {
  id?: ModelIDInput | null,
  auther?: ModelStringInput | null,
  text?: ModelStringInput | null,
  category?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelRenkaListFilterInput | null > | null,
  or?: Array< ModelRenkaListFilterInput | null > | null,
  not?: ModelRenkaListFilterInput | null,
  renkaListUserDashbordModelId?: ModelIDInput | null,
};

export type ModelRenkaListConnection = {
  __typename: "ModelRenkaListConnection",
  items:  Array<RenkaList | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserDashbordModelFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserDashbordModelFilterInput | null > | null,
  or?: Array< ModelUserDashbordModelFilterInput | null > | null,
  not?: ModelUserDashbordModelFilterInput | null,
};

export type ModelUserDashbordModelConnection = {
  __typename: "ModelUserDashbordModelConnection",
  items:  Array<UserDashbordModel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMileyPersonModelFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  kana?: ModelStringInput | null,
  born?: ModelStringInput | null,
  rip?: ModelStringInput | null,
  job?: ModelStringInput | null,
  and?: Array< ModelMileyPersonModelFilterInput | null > | null,
  or?: Array< ModelMileyPersonModelFilterInput | null > | null,
  not?: ModelMileyPersonModelFilterInput | null,
};

export type ModelMileyPersonModelConnection = {
  __typename: "ModelMileyPersonModelConnection",
  items:  Array<MileyPersonModel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateRenkaListMutationVariables = {
  input: CreateRenkaListInput,
  condition?: ModelRenkaListConditionInput | null,
};

export type CreateRenkaListMutation = {
  createRenkaList?:  {
    __typename: "RenkaList",
    id: string,
    auther: string,
    text: string,
    category?: string | null,
    date?: string | null,
    UserDashbordModel?:  {
      __typename: "UserDashbordModel",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    renkaListUserDashbordModelId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateRenkaListMutationVariables = {
  input: UpdateRenkaListInput,
  condition?: ModelRenkaListConditionInput | null,
};

export type UpdateRenkaListMutation = {
  updateRenkaList?:  {
    __typename: "RenkaList",
    id: string,
    auther: string,
    text: string,
    category?: string | null,
    date?: string | null,
    UserDashbordModel?:  {
      __typename: "UserDashbordModel",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    renkaListUserDashbordModelId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteRenkaListMutationVariables = {
  input: DeleteRenkaListInput,
  condition?: ModelRenkaListConditionInput | null,
};

export type DeleteRenkaListMutation = {
  deleteRenkaList?:  {
    __typename: "RenkaList",
    id: string,
    auther: string,
    text: string,
    category?: string | null,
    date?: string | null,
    UserDashbordModel?:  {
      __typename: "UserDashbordModel",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    renkaListUserDashbordModelId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateUserDashbordModelMutationVariables = {
  input: CreateUserDashbordModelInput,
  condition?: ModelUserDashbordModelConditionInput | null,
};

export type CreateUserDashbordModelMutation = {
  createUserDashbordModel?:  {
    __typename: "UserDashbordModel",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserDashbordModelMutationVariables = {
  input: UpdateUserDashbordModelInput,
  condition?: ModelUserDashbordModelConditionInput | null,
};

export type UpdateUserDashbordModelMutation = {
  updateUserDashbordModel?:  {
    __typename: "UserDashbordModel",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserDashbordModelMutationVariables = {
  input: DeleteUserDashbordModelInput,
  condition?: ModelUserDashbordModelConditionInput | null,
};

export type DeleteUserDashbordModelMutation = {
  deleteUserDashbordModel?:  {
    __typename: "UserDashbordModel",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMileyPersonModelMutationVariables = {
  input: CreateMileyPersonModelInput,
  condition?: ModelMileyPersonModelConditionInput | null,
};

export type CreateMileyPersonModelMutation = {
  createMileyPersonModel?:  {
    __typename: "MileyPersonModel",
    id: string,
    name: string,
    kana?: string | null,
    born?: string | null,
    rip?: string | null,
    job?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMileyPersonModelMutationVariables = {
  input: UpdateMileyPersonModelInput,
  condition?: ModelMileyPersonModelConditionInput | null,
};

export type UpdateMileyPersonModelMutation = {
  updateMileyPersonModel?:  {
    __typename: "MileyPersonModel",
    id: string,
    name: string,
    kana?: string | null,
    born?: string | null,
    rip?: string | null,
    job?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMileyPersonModelMutationVariables = {
  input: DeleteMileyPersonModelInput,
  condition?: ModelMileyPersonModelConditionInput | null,
};

export type DeleteMileyPersonModelMutation = {
  deleteMileyPersonModel?:  {
    __typename: "MileyPersonModel",
    id: string,
    name: string,
    kana?: string | null,
    born?: string | null,
    rip?: string | null,
    job?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetRenkaListQueryVariables = {
  id: string,
};

export type GetRenkaListQuery = {
  getRenkaList?:  {
    __typename: "RenkaList",
    id: string,
    auther: string,
    text: string,
    category?: string | null,
    date?: string | null,
    UserDashbordModel?:  {
      __typename: "UserDashbordModel",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    renkaListUserDashbordModelId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListRenkaListsQueryVariables = {
  filter?: ModelRenkaListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRenkaListsQuery = {
  listRenkaLists?:  {
    __typename: "ModelRenkaListConnection",
    items:  Array< {
      __typename: "RenkaList",
      id: string,
      auther: string,
      text: string,
      category?: string | null,
      date?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      renkaListUserDashbordModelId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRenkaListsQueryVariables = {
  filter?: ModelRenkaListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRenkaListsQuery = {
  syncRenkaLists?:  {
    __typename: "ModelRenkaListConnection",
    items:  Array< {
      __typename: "RenkaList",
      id: string,
      auther: string,
      text: string,
      category?: string | null,
      date?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      renkaListUserDashbordModelId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserDashbordModelQueryVariables = {
  id: string,
};

export type GetUserDashbordModelQuery = {
  getUserDashbordModel?:  {
    __typename: "UserDashbordModel",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserDashbordModelsQueryVariables = {
  filter?: ModelUserDashbordModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserDashbordModelsQuery = {
  listUserDashbordModels?:  {
    __typename: "ModelUserDashbordModelConnection",
    items:  Array< {
      __typename: "UserDashbordModel",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserDashbordModelsQueryVariables = {
  filter?: ModelUserDashbordModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserDashbordModelsQuery = {
  syncUserDashbordModels?:  {
    __typename: "ModelUserDashbordModelConnection",
    items:  Array< {
      __typename: "UserDashbordModel",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMileyPersonModelQueryVariables = {
  id: string,
};

export type GetMileyPersonModelQuery = {
  getMileyPersonModel?:  {
    __typename: "MileyPersonModel",
    id: string,
    name: string,
    kana?: string | null,
    born?: string | null,
    rip?: string | null,
    job?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMileyPersonModelsQueryVariables = {
  filter?: ModelMileyPersonModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMileyPersonModelsQuery = {
  listMileyPersonModels?:  {
    __typename: "ModelMileyPersonModelConnection",
    items:  Array< {
      __typename: "MileyPersonModel",
      id: string,
      name: string,
      kana?: string | null,
      born?: string | null,
      rip?: string | null,
      job?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMileyPersonModelsQueryVariables = {
  filter?: ModelMileyPersonModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMileyPersonModelsQuery = {
  syncMileyPersonModels?:  {
    __typename: "ModelMileyPersonModelConnection",
    items:  Array< {
      __typename: "MileyPersonModel",
      id: string,
      name: string,
      kana?: string | null,
      born?: string | null,
      rip?: string | null,
      job?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateRenkaListSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateRenkaListSubscription = {
  onCreateRenkaList?:  {
    __typename: "RenkaList",
    id: string,
    auther: string,
    text: string,
    category?: string | null,
    date?: string | null,
    UserDashbordModel?:  {
      __typename: "UserDashbordModel",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    renkaListUserDashbordModelId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateRenkaListSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateRenkaListSubscription = {
  onUpdateRenkaList?:  {
    __typename: "RenkaList",
    id: string,
    auther: string,
    text: string,
    category?: string | null,
    date?: string | null,
    UserDashbordModel?:  {
      __typename: "UserDashbordModel",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    renkaListUserDashbordModelId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteRenkaListSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteRenkaListSubscription = {
  onDeleteRenkaList?:  {
    __typename: "RenkaList",
    id: string,
    auther: string,
    text: string,
    category?: string | null,
    date?: string | null,
    UserDashbordModel?:  {
      __typename: "UserDashbordModel",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    renkaListUserDashbordModelId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateUserDashbordModelSubscription = {
  onCreateUserDashbordModel?:  {
    __typename: "UserDashbordModel",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserDashbordModelSubscription = {
  onUpdateUserDashbordModel?:  {
    __typename: "UserDashbordModel",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserDashbordModelSubscription = {
  onDeleteUserDashbordModel?:  {
    __typename: "UserDashbordModel",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMileyPersonModelSubscription = {
  onCreateMileyPersonModel?:  {
    __typename: "MileyPersonModel",
    id: string,
    name: string,
    kana?: string | null,
    born?: string | null,
    rip?: string | null,
    job?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMileyPersonModelSubscription = {
  onUpdateMileyPersonModel?:  {
    __typename: "MileyPersonModel",
    id: string,
    name: string,
    kana?: string | null,
    born?: string | null,
    rip?: string | null,
    job?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMileyPersonModelSubscription = {
  onDeleteMileyPersonModel?:  {
    __typename: "MileyPersonModel",
    id: string,
    name: string,
    kana?: string | null,
    born?: string | null,
    rip?: string | null,
    job?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
