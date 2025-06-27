import React from "react";

const TodoForm = () => {
  return (
    <div>
      <h2>Criar tarefa</h2>
      <form>
        <input type="text" placeholder="Digite o titulo" />
        <select>
          <option value="">Selecione uma categoria</option>
          <option value="">Trabalho</option>
          <option value="">Pessoal</option>
          <option value="">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
