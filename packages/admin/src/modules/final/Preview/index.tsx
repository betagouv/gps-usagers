import * as React from "react";
import { Button, Flex, Heading, Text } from "rebass";
import LayoutFront from "../../../components/Layout/Front";

const FinalPreview: React.FunctionComponent<any> = ({
  data
}: {
  data: any;
}) => {
  return (
    <LayoutFront>
      <Flex width={1} flexDirection="column">
        {data &&
          data.map(
            ({
              type,
              value,
              link,
              address,
              zip,
              city
            }: {
              type: string;
              value: string;
              link: string;
              address: string;
              zip: string;
              city: string;
            }) => {
              if (type === "title") {
                return (
                  <Heading mb={4} fontWeight={1} color="green" fontSize="3rem">
                    {value}
                  </Heading>
                );
              }
              if (type === "description") {
                return (
                  <Text lineHeight="1.8" my={3} fontWeight={1}>
                    {value}
                  </Text>
                );
              }
              if (type === "address") {
                return (
                  <Flex
                    my={3}
                    width={1}
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Text fontWeight="bold" fontSize={6}>
                      {value}
                    </Text>
                    <Text fontWeight={5}>{address}</Text>
                    <Text fontWeight={5}>{zip}</Text>
                    <Text fontWeight={5}>{city}</Text>
                  </Flex>
                );
              }
              if (type === "phone") {
                return (
                  <a href={`tel:${value}`} target="_top">
                    <Text
                      color="green"
                      lineHeight="1.8"
                      my={3}
                      fontSize={7}
                      fontWeight="bold"
                    >
                      {value}
                    </Text>
                  </a>
                );
              }
              if (type === "link") {
                return (
                  <a href={link} target="_top">
                    <Text
                      color="green"
                      lineHeight="1.8"
                      my={3}
                      fontSize={7}
                      fontWeight="bold"
                    >
                      {value}
                    </Text>
                  </a>
                );
              }
              if (type === "button") {
                return (
                  <a href={link} target="_top">
                    <Button variant="green" my={3}>
                      {value}
                    </Button>
                  </a>
                );
              }
              if (type === "space") {
                return <br />;
              }
              return <></>;
            }
          )}
      </Flex>
    </LayoutFront>
  );
};

export default FinalPreview;
