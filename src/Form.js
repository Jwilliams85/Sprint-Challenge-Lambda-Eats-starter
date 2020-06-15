import React, {useState} from 'react'
import { Card, CardImg, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, Label, Button} from 'reactstrap'
import axios from 'axios'
import * as yup from 'yup'

const OrderForm = () => {
    const [dropdownOpen, setdropdownOpen] = useState (false)
    const [formData, setFormData] = useState ({
        name: "",
        number: 0,
        sauce: "",
        chicken: false,
        peperoni: false,
        extraCheese: false,
        spinach: false,
        pineapple: false,
        sausage: false,
        mushrooms: false,
        special: ""

    })

    const schema = yup.object().shape({
        name: yup.string().required().min(2),
        number: yup.number().required().positive().integer().min(1),
        sauce: yup.string().required(),
        special: yup.string(),
        chicken: yup.boolean(),
        peperoni: yup.boolean(),
        extraCheese: yup.boolean(),
        pineapple: yup.boolean(),
        mushrooms: yup.boolean()

    })
    const submit = () => {
        schema.validate(formData).then( () => {
            axios.post('https://reqres.in/api/users', formData).then((res) => {
                console.log(res.data, 'This is posted data')
            })
        })
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleToppings = (e) => {
        setFormData({...formData, [e.target.name]: e.target.checked})
    }
    const toggle = () => setdropdownOpen((prevState) => !prevState)

    return (
        <>
        <Card color='info'>
            <h2 style = {{color: 'white', margin: '0 auto'}}>
                Build Your Own Pizza!
            </h2>
        <CardImg style = {{width: '80%', margin: '0 auto'}} src = {require('./Assets/Pizza.jpg')}/>
        </Card>
        <Form data-cy='submit' onSubmit = {(e) => {
            e.preventDefault()
            submit()
        }} 
        style={{margin:'5%'}}>
            <FormGroup>
                <legend>Name</legend>
                <Input type = 'name' name= 'name' data-cy='name' value = {formData.name} onChange= {handleChange}/>
            </FormGroup>
            <FormGroup>
                <Dropdown isOpen = {dropdownOpen} toggle = {toggle}>
                    <DropdownToggle caret>
                        {formData.number === 0 ? 'Size' : formData.number}
                    </DropdownToggle>
                    <DropdownMenu>
                        <div onClick = {() => {
                            toggle();
                            setFormData({...formData, number: 0})
                        }}>0</div>
                        <div onClick = {() => {
                            toggle();
                            setFormData({...formData, number: 1})
                        }}>1</div>
                        <div onClick = {() => {
                            toggle();
                            setFormData({...formData, number: 2})
                        }}>2</div>
                        <div onClick = {() => {
                            toggle();
                            setFormData({...formData, number: 3})
                        }}>3</div>
                        <div onClick = {() => {
                            toggle();
                            setFormData({...formData, number: 4})
                        }}>4</div>
                        <div onClick = {() => {
                            toggle();
                            setFormData({...formData, number: 5})
                        }}>5</div>
                    </DropdownMenu>
                </Dropdown>
            </FormGroup>
            <FormGroup tag = 'fieldset'>
                <legend>Sauce</legend>
                <FormGroup check>
                    <Label check>
                        <Input type = 'radio' name = 'sauce' value = 'red' onChange = {handleChange}/>
                        Original Red
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type = 'radio' name = 'sauce' value = 'ranch' onChange = {handleChange}/>
                        Garlic Ranch
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type = 'radio' name = 'sauce' value = 'bb1' onChange = {handleChange}/>
                        BBQ Sauce
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type = 'radio' name = 'sauce' value = 'alfredo' onChange = {handleChange}/>
                        Alfredo Sauce
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type = 'radio' name = 'sauce' value = 'none' onChange = {handleChange}/>
                        None
                    </Label>
                </FormGroup>

            </FormGroup>
            <FormGroup tag = 'fieldset'>
                <legend>Toppings</legend>
                <FormGroup check>
                    <Label check>
                        <Input type = 'checkbox' name= 'chicken' data-cy ='checkbox1' checked = {formData.chicken}  onChange = {handleToppings}/>
                        Chicken
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type = 'checkbox' name= 'peperoni' data-cy ='checkbox2' checked = {formData.peperoni}  onChange = {handleToppings} />
                        Peperoni
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type = 'checkbox' name= 'extraCheese' data-cy ='checkbox3' checked = {formData.extraCheese}  onChange = {handleToppings}/>
                        Extra Cheese
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type = 'checkbox' name= 'spinach' data-cy ='checkbox4' checked = {formData.spinach}  onChange = {handleToppings}/>
                        Spinach
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                    <Input type = 'checkbox' name= 'pineapple' data-cy ='checkbox5' checked = {formData.pineapple}  onChange = {handleToppings}/>
                        Pineapple
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                    <Input type = 'checkbox' name= 'sausage' data-cy ='checkbox6' checked = {formData.sausage}  onChange = {handleToppings}/>
                        Sausage
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                    <Input type = 'checkbox' name= 'mushrooms' data-cy ='checkbox7' checked = {formData.mushrooms}  onChange = {handleToppings} />
                        Mushrooms
                    </Label>
                </FormGroup> 
            </FormGroup>

            <FormGroup>
                <legend> Special Instruction </legend>
                <Input type = 'textarea' name = 'special' value = {formData.special} onChange ={handleChange}/>
            </FormGroup>
            <Button>Submit </Button>    

        </Form>
        </>
    )
}

export default OrderForm