import React from "react";
import { Task } from "./Task";
import { Button, Box, Container, VStack } from "@chakra-ui/react";

export const TaskList = (props) => {
  const {
    tareas,
    onBorrarTarea,
    completarTarea,
    onBorrarTareas,
    onEditarTarea,
  } = props;
  return (
    <VStack mt={5}>
      <Container mt={5} border="2px" borderRadius={15}>
        {tareas.map((tarea, index) => (
          <Task
            key={index}
            tarea={tarea}
            onBorrarTarea={onBorrarTarea}
            completarTarea={completarTarea}
            onEditarTarea={onEditarTarea}
          />
        ))}
      </Container>
      <Box mt={5} textAlign="center">
        Tu tienes aun {tareas.length} sin realizar
        <Button marginLeft={10} colorScheme="red" onClick={onBorrarTareas}>
          Borrar tareas
        </Button>
      </Box>
    </VStack>
  );
};
