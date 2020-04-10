import React, {useContext, useState} from 'react'
import {Button, FormControl, InputGroup, Form} from "react-bootstrap";
import {Context} from "../context";
import "./AddTodo.css";

function useInputValue(defalutValue = '', showErr) {
    const [value, setValue] = useState(defalutValue)
    const [showErrState, setShowErr] = useState(showErr)

    return{
        setValue: {
            value,
            showErrState,
            onChange: e => {
                let inp = e.target.value
                inp.length >= 0 && inp.length < 4
                ?   setShowErr(true)
                :   setShowErr(false)

                setValue(inp)

            }
        },
        clear:  ()=> setValue(''),
        get value (){
            return  value
        }

    }
}



const AddTodo = props => {
    const { AddTodoItem } =  useContext(Context)

    let {setValue, value, showErrState,  clear} = useInputValue('', false)

    function addingTodo(){
        AddTodoItem(value)
        clear()
    }


    return (
        <Form onSubmit={e =>e.preventDefault()} className='mb-4'>
            <InputGroup>
                <FormControl
                    placeholder="Add an todo"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                   {...setValue}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary"
                            onClick={addingTodo}
                            type="submit"
                            disabled={  value=== ""
                                        ?  setValue.showErrState = true
                                        :  setValue.showErrState
                            }
                            className={setValue.showErrState ?  'not-allow-btn' : null}
                    >
                        Button
                    </Button>


                </InputGroup.Append>
            </InputGroup>
            {
                value=== ""
                ?   setValue.showErrState = true
                : setValue.showErrState &&
                    <Form.Text className="text-muted">
                        Enter 4 symbols or greater
                    </Form.Text>
            }
        </Form>
    )
}

/*AddTodo.propTypes = {
    todoItem: PropTypes.func.isRequired
}*/

export default AddTodo
