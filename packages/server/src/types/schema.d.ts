// tslint:disable
// graphql typescript definitions

declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IQuery {
    __typename: 'Query';
    currentDate: any;
    findDescendantJourneys: IJourney | null;
    findRootJourneys: Array<IJourney>;
    readJourney: IJourney | null;
    me: IUser | null;
  }

  interface IFindDescendantJourneysOnQueryArguments {
    parentJourneyId?: string | null;
  }

  interface IFindRootJourneysOnQueryArguments {
    parentJourneyId?: string | null;
  }

  interface IReadJourneyOnQueryArguments {
    journeyId: string;
  }

  interface IJourney {
    __typename: 'Journey';
    id: string;
    type: string;
    name: string;
    title: string | null;
    description: string | null;
    icon: string | null;
    order: number;
    data: Array<IDataJourney> | null;
    parent: IJourney | null;
    ancestors: Array<IJourney> | null;
    color: string;
    isActive: boolean;
    children: Array<IJourney> | null;
  }

  interface IDataJourney {
    __typename: 'DataJourney';
    type: string;
    value: string;
    link: string | null;
    address: string | null;
    zip: string | null;
    city: string | null;
  }

  interface IUser {
    __typename: 'User';
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  }

  interface IMutation {
    __typename: 'Mutation';
    createJourney: IJourney;
    deleteJourney: IJourney;
    orderJourneys: boolean;
    updateJourney: IJourney;
    sendForgotPasswordEmail: boolean | null;
    forgotPasswordChange: Array<IError>;
    login: ILoginResponse;
    logout: boolean | null;
    register: Array<IError>;
  }

  interface ICreateJourneyOnMutationArguments {
    input: ICreateJourneyInput;
  }

  interface IDeleteJourneyOnMutationArguments {
    journeyId: string;
  }

  interface IOrderJourneysOnMutationArguments {
    input?: Array<IOrderJourneysInput> | null;
  }

  interface IUpdateJourneyOnMutationArguments {
    input: IUpdateJourneyInput;
  }

  interface ISendForgotPasswordEmailOnMutationArguments {
    email: string;
  }

  interface IForgotPasswordChangeOnMutationArguments {
    newPassword: string;
    key: string;
  }

  interface ILoginOnMutationArguments {
    email: string;
    password: string;
  }

  interface IRegisterOnMutationArguments {
    email: string;
    password: string;
  }

  /**
   * Journey create input
   */
  interface ICreateJourneyInput {
    name: string;
    title?: string | null;
    description?: string | null;
    type: string;
    icon?: string | null;
    parent?: string | null;
    color: string;
    isActive: boolean;
  }

  interface IOrderJourneysInput {
    id: string;
    order: number;
  }

  /**
   * Journey update input
   */
  interface IUpdateJourneyInput {
    id?: string | null;
    name?: string | null;
    title?: string | null;
    description?: string | null;
    data?: Array<IDataJourneyInput> | null;
    icon?: string | null;
    type?: string | null;
    color?: string | null;
    isActive?: boolean | null;
  }

  interface IDataJourneyInput {
    type: string;
    value: string;
    link?: string | null;
    address?: string | null;
    zip?: string | null;
    city?: string | null;
  }

  interface IError {
    __typename: 'Error';
    path: string;
    message: string;
  }

  interface ILoginResponse {
    __typename: 'LoginResponse';
    errors: Array<IError>;
    sessionId: string | null;
  }

  const enum JourneyTypeEnum {
    journey = 'journey',
    choice = 'choice',
    final = 'final'
  }

  const enum JourneyColorEnum {
    blue = 'blue',
    gray = 'gray',
    green = 'green',
    red = 'red'
  }
}

// tslint:enable
