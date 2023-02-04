import {
  Button,
  Checkbox,
  UnorderedList,
  ListItem,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, CheckIcon } from "@chakra-ui/icons";

import React from "react";

export const Task = (props) => {
  const { tarea, onBorrarTarea, completarTarea } = props;

  return (
    <div>
      <UnorderedList spacing={2} mt={4}>
        <ListItem
          si="lg"
          border="1px"
          backgroundColor={"gray.100"}
          borderRadius={10}
          style={{ textDecoration: tarea.completado ? "line-through" : null }}
        >
          {tarea.completado ? <>{tarea.tarea}</> : <>{tarea.tarea}</>}

          <Button
            as={CheckIcon}
            colorScheme="green"
            onClick={(e) => {
              completarTarea(tarea);
            }}
          ></Button>
          <Button as={EditIcon} colorScheme="yellow">
            Actualizar
          </Button>
          <Button
            as={DeleteIcon}
            onClick={() => {
              onBorrarTarea(tarea.id);
            }}
            colorScheme="red"
          >
            Borrar
          </Button>
        </ListItem>
        <br></br>
      </UnorderedList>
    </div>
  );
};
