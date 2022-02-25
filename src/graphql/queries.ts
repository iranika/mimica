/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMimiCa = /* GraphQL */ `
  query GetMimiCa($id: ID!) {
    getMimiCa(id: $id) {
      id
      title
    }
  }
`;
export const listMimiCas = /* GraphQL */ `
  query ListMimiCas(
    $filter: TableMimiCaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMimiCas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
      }
      nextToken
    }
  }
`;
