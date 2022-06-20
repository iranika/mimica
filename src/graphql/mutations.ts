/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRenkaList = /* GraphQL */ `
  mutation CreateRenkaList(
    $input: CreateRenkaListInput!
    $condition: ModelRenkaListConditionInput
  ) {
    createRenkaList(input: $input, condition: $condition) {
      id
      auther
      text
      category
      date
      UserDashbordModel {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      renkaListUserDashbordModelId
      owner
    }
  }
`;
export const updateRenkaList = /* GraphQL */ `
  mutation UpdateRenkaList(
    $input: UpdateRenkaListInput!
    $condition: ModelRenkaListConditionInput
  ) {
    updateRenkaList(input: $input, condition: $condition) {
      id
      auther
      text
      category
      date
      UserDashbordModel {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      renkaListUserDashbordModelId
      owner
    }
  }
`;
export const deleteRenkaList = /* GraphQL */ `
  mutation DeleteRenkaList(
    $input: DeleteRenkaListInput!
    $condition: ModelRenkaListConditionInput
  ) {
    deleteRenkaList(input: $input, condition: $condition) {
      id
      auther
      text
      category
      date
      UserDashbordModel {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      renkaListUserDashbordModelId
      owner
    }
  }
`;
export const createUserDashbordModel = /* GraphQL */ `
  mutation CreateUserDashbordModel(
    $input: CreateUserDashbordModelInput!
    $condition: ModelUserDashbordModelConditionInput
  ) {
    createUserDashbordModel(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserDashbordModel = /* GraphQL */ `
  mutation UpdateUserDashbordModel(
    $input: UpdateUserDashbordModelInput!
    $condition: ModelUserDashbordModelConditionInput
  ) {
    updateUserDashbordModel(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserDashbordModel = /* GraphQL */ `
  mutation DeleteUserDashbordModel(
    $input: DeleteUserDashbordModelInput!
    $condition: ModelUserDashbordModelConditionInput
  ) {
    deleteUserDashbordModel(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createMileyPersonModel = /* GraphQL */ `
  mutation CreateMileyPersonModel(
    $input: CreateMileyPersonModelInput!
    $condition: ModelMileyPersonModelConditionInput
  ) {
    createMileyPersonModel(input: $input, condition: $condition) {
      id
      name
      kana
      born
      rip
      job
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMileyPersonModel = /* GraphQL */ `
  mutation UpdateMileyPersonModel(
    $input: UpdateMileyPersonModelInput!
    $condition: ModelMileyPersonModelConditionInput
  ) {
    updateMileyPersonModel(input: $input, condition: $condition) {
      id
      name
      kana
      born
      rip
      job
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMileyPersonModel = /* GraphQL */ `
  mutation DeleteMileyPersonModel(
    $input: DeleteMileyPersonModelInput!
    $condition: ModelMileyPersonModelConditionInput
  ) {
    deleteMileyPersonModel(input: $input, condition: $condition) {
      id
      name
      kana
      born
      rip
      job
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
