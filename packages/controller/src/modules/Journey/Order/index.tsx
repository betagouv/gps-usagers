// @ts-ignore
import gql from "graphql-tag";
import * as React from "react";
import { Mutation, MutationFn } from "react-apollo";
import {
  OrderJourneysMutation,
  OrderJourneysMutationVariables
} from "../../../schemaTypes";

export const orderJourneysMutation = gql`
  mutation OrderJourneysMutation($input: [OrderJourneysInput]!) {
    orderJourneys(input: $input)
  }
`;

export interface WithOrderJourneys {
  orderJourneys: MutationFn<
    OrderJourneysMutation,
    OrderJourneysMutationVariables
  >;
}

interface Props {
  children: (data: WithOrderJourneys) => JSX.Element | null;
}

export class OrderJourneys extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <Mutation<OrderJourneysMutation, OrderJourneysMutationVariables>
        mutation={orderJourneysMutation}
        // awaitRefetchQueries={true}
        // refetchQueries={() => {
        //   return [
        //     {
        //       query: findJourneysQuery,
        //       fetchPolicy: "cache-and-network"
        //     }
        //   ];
        // }}
      >
        {mutate => {
          return children({
            orderJourneys: mutate
          });
        }}
      </Mutation>
    );
  }
}
