/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRenkaList = /* GraphQL */ `
  subscription OnCreateRenkaList($owner: String) {
    onCreateRenkaList(owner: $owner) {
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
export const onUpdateRenkaList = /* GraphQL */ `
  subscription OnUpdateRenkaList($owner: String) {
    onUpdateRenkaList(owner: $owner) {
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
export const onDeleteRenkaList = /* GraphQL */ `
  subscription OnDeleteRenkaList($owner: String) {
    onDeleteRenkaList(owner: $owner) {
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
export const onCreateUserDashbordModel = /* GraphQL */ `
  subscription OnCreateUserDashbordModel {
    onCreateUserDashbordModel {
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
export const onUpdateUserDashbordModel = /* GraphQL */ `
  subscription OnUpdateUserDashbordModel {
    onUpdateUserDashbordModel {
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
export const onDeleteUserDashbordModel = /* GraphQL */ `
  subscription OnDeleteUserDashbordModel {
    onDeleteUserDashbordModel {
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
export const onCreateMileyPersonModel = /* GraphQL */ `
  subscription OnCreateMileyPersonModel {
    onCreateMileyPersonModel {
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
export const onUpdateMileyPersonModel = /* GraphQL */ `
  subscription OnUpdateMileyPersonModel {
    onUpdateMileyPersonModel {
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
export const onDeleteMileyPersonModel = /* GraphQL */ `
  subscription OnDeleteMileyPersonModel {
    onDeleteMileyPersonModel {
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
