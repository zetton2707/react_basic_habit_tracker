import React, { memo } from 'react';

const HabitAddForm = memo(props => {
  const formRef = React.createRef();
  const inputRef = React.createRef();
  
  const onSubmit = event => {
    event.preventDefault(); // event 전파 방지
    const name = inputRef.current.value;
    name && props.onAdd(name);
    //inputRef.current.value = "";
    formRef.current.reset();
  };  
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input ref={inputRef} type="text" className="add-input" placeholder="habit" />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
