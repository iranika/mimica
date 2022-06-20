/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRenkaList = /* GraphQL */ `
  query GetRenkaList($id: ID!) {
    getRenkaList(id: $id) {
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
export const listRenkaLists = /* GraphQL */ `
  query ListRenkaLists(
    $filter: ModelRenkaListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRenkaLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        auther
        text
        category
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        renkaListUserDashbordModelId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRenkaLists = /* GraphQL */ `
  query SyncRenkaLists(
    $filter: ModelRenkaListFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRenkaLists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        auther
        text
        category
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        renkaListUserDashbordModelId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserDashbordModel = /* GraphQL */ `
  query GetUserDashbordModel($id: ID!) {
    getUserDashbordModel(id: $id) {
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
export const listUserDashbordModels = /* GraphQL */ `
  query ListUserDashbordModels(
    $filter: ModelUserDashbordModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserDashbordModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserDashbordModels = /* GraphQL */ `
  query SyncUserDashbordModels(
    $filter: ModelUserDashbordModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserDashbordModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMileyPersonModel = /* GraphQL */ `
  query GetMileyPersonModel($id: ID!) {
    getMileyPersonModel(id: $id) {
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
export const listMileyPersonModels = /* GraphQL */ `
  query ListMileyPersonModels(
    $filter: ModelMileyPersonModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMileyPersonModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMileyPersonModels = /* GraphQL */ `
  query SyncMileyPersonModels(
    $filter: ModelMileyPersonModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMileyPersonModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
