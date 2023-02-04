import React, { useState } from "react";
import { TaskList } from "./TaskList.jsx";
import {
  Box,
  Button,
  Center,
  Container,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

export const Header = (props) => {
  const {
    tareas,
    onBorrarTarea,
    agregarTarea,
    completarTarea,
    onBorrarTareas,
  } = props;
  const [nuevaTarea, setNuevaTarea] = useState("");
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (nuevaTarea !== "") {
      agregarTarea(nuevaTarea);
    }
    setNuevaTarea("");
  };

  return (
    <Container
      padding={30}
      fontSize={15}
      border="4px"
      mt={20}
      borderRadius="20"
      borderColor={"blue"}
    >
      <Box textAlign={"center"} fontSize={25}>
        Todo App
      </Box>
      <form onSubmit={onHandleSubmit}>
        <InputGroup>
          <Input
            border={"2px"}
            type="text"
            value={nuevaTarea}
            onChange={(e) => {
              setNuevaTarea(e.target.value);
            }}
          />
          <InputRightElement width="0.5rem">
            <Button colorScheme="blue" onClick={onHandleSubmit}>
              +
            </Button>
          </InputRightElement>
        </InputGroup>
        <TaskList
          tareas={tareas}
          onBorrarTarea={onBorrarTarea}
          completarTarea={completarTarea}
          onBorrarTareas={onBorrarTareas}
        />
      </form>
    </Container>
  );
};
