import React, {useState} from 'react'
import { Card, CardImg, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, Label, Button, CustomInput} from 'reactstrap'
import axios from 'axios'
import * as yup from 'yup'

const OrderForm = () => {
    const [dropdownOpen, setdropdownOpen] = useState (false)
    const [formData, setFormData] = useState ({
        name: "",
        email: "",
        value: "",
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
        name: yup.string().required("Name is a required field").min(2),
        email: yup.string().required().min(1),
        value: yup.string().required(),
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
        <Card color='warning'>
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
                <legend>Email</legend>
                <Input type = 'email' name= 'email' data-cy='email' value = {formData.email} onChange= {handleChange}/>
            </FormGroup>

            <FormGroup>
                <Dropdown isOpen = {dropdownOpen} toggle = {toggle}>
                    <DropdownToggle caret>
                        {formData.value === '' ? 'Size' : formData.value}

                    </DropdownToggle>
                    <DropdownMenu>
                        <div onClick = {() => {
                            toggle();
                            setFormData({...formData, value: "Extra-Small" })
                        }}>Extra-Small</div>
                        <div onClick = {() => {
                            toggle();
                            setFormData({...formData, value: "Small"})
                        }}>Small</div>
                        <div onClick = {() => {
                            toggle();
                            setFormData({...formData, value: "Medium"})
                        }}>Medium</div>
                        <div onClick = {() => {
                            toggle();
                            setFormData({...formData, value: "Large"})
                        }}>Large</div>
                        <div onClick = {() => {
                            toggle();
                            setFormData({...formData, value: "Extra-Large"})
                        }}>Extra-Large</div>
                        <div onClick = {() => {
                            toggle();
                            setFormData({...formData, value: "Super"})
                        }}>Super</div>
                    </DropdownMenu>
                </Dropdown>
            </FormGroup>
            <FormGroup tag = 'fieldset'>
                <legend>Choice of Sauce</legend>
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
                <legend>Add Toppings</legend>
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
        <Label for="exampleCheckbox">Switches</Label>
        <div>
          <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Gluten Free Crust (+$1.00)" />
        </div>
      </FormGroup>

            <FormGroup>
                <legend> Special Instruction </legend>
                <Input type = 'textarea' name = 'special' value = {formData.special} onChange ={handleChange}/>
            </FormGroup>
            <Button>Add To Order</Button>    

        </Form>
        </>
    )
}

export default OrderForm