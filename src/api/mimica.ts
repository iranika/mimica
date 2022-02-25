/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMimiCaInput = {
  title?: string | null,
};

export type MimiCa = {
  __typename: "MimiCa",
  id: string,
  title?: string | null,
};

export type UpdateMimiCaInput = {
  id: string,
  title?: string | null,
};

export type DeleteMimiCaInput = {
  id: string,
};

export type TableMimiCaFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
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
};

export type TableStringFilterInput = {
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
};

export type MimiCaConnection = {
  __typename: "MimiCaConnection",
  items?:  Array<MimiCa | null > | null,
  nextToken?: string | null,
};

export type CreateMimiCaMutationVariables = {
  input: CreateMimiCaInput,
};

export type CreateMimiCaMutation = {
  createMimiCa?:  {
    __typename: "MimiCa",
    id: string,
    title?: string | null,
  } | null,
};

export type UpdateMimiCaMutationVariables = {
  input: UpdateMimiCaInput,
};

export type UpdateMimiCaMutation = {
  updateMimiCa?:  {
    __typename: "MimiCa",
    id: string,
    title?: string | null,
  } | null,
};

export type DeleteMimiCaMutationVariables = {
  input: DeleteMimiCaInput,
};

export type DeleteMimiCaMutation = {
  deleteMimiCa?:  {
    __typename: "MimiCa",
    id: string,
    title?: string | null,
  } | null,
};

export type GetMimiCaQueryVariables = {
  id: string,
};

export type GetMimiCaQuery = {
  getMimiCa?:  {
    __typename: "MimiCa",
    id: string,
    title?: string | null,
  } | null,
};

export type ListMimiCasQueryVariables = {
  filter?: TableMimiCaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMimiCasQuery = {
  listMimiCas?:  {
    __typename: "MimiCaConnection",
    items?:  Array< {
      __typename: "MimiCa",
      id: string,
      title?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMimiCaSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
};

export type OnCreateMimiCaSubscription = {
  onCreateMimiCa?:  {
    __typename: "MimiCa",
    id: string,
    title?: string | null,
  } | null,
};

export type OnUpdateMimiCaSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
};

export type OnUpdateMimiCaSubscription = {
  onUpdateMimiCa?:  {
    __typename: "MimiCa",
    id: string,
    title?: string | null,
  } | null,
};

export type OnDeleteMimiCaSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
};

export type OnDeleteMimiCaSubscription = {
  onDeleteMimiCa?:  {
    __typename: "MimiCa",
    id: string,
    title?: string | null,
  } | null,
};
