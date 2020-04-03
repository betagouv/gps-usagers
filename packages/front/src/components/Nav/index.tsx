// import { FindDescendantJourneysQuery_findDescendantJourneys } from "@gpsu/controller";
import * as React from "react";
import * as Icons from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Box, Flex } from "rebass";
import { Badge } from "../Badge";

const Nav: React.FunctionComponent<any> = ({ parent, ancestors }) => {
  return (
    <Flex m={3}>
      <Flex alignItems="center" width={2 / 12}>
        <Icons.MdKeyboardArrowLeft size={16} />
        <NavLink to={parent === null ? "/" : `/journeys/${parent.id}`}>
          Retour
        </NavLink>
      </Flex>
      <Box width={10 / 12}>
        <Badge variant="gray">
          {ancestors.map((ancestor: any, index: number) => (
            <React.Fragment key={`ancestorLink${index}`}>
              {!!index && " > "}
              <NavLink to={`/journeys/${ancestor.id}`}>{ancestor.name}</NavLink>
            </React.Fragment>
          ))}
        </Badge>
      </Box>
    </Flex>
  );
};

export default Nav;
