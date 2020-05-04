import React, { useState, useEffect } from "react";
import * as yup from "yup"; 
import axios from "axios";
import styled from 'styled-components';

export default function Form() {
    
    const initialFormState = {
      name: "",
      email: "",
     password: "",
      positions: "",
      terms: ""
    };
  
   
    const [post, setPost] = useState([]);
  
   
    const [serverError, setServerError] = useState("");
  
   
    const [formState, setFormState] = useState(initialFormState);
  
    
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  
    
    const [errors, setErrors] = useState(initialFormState);
  
    
    const formSchema = yup.object().shape({
      name: yup.string().required("Name is a required field"),
      email: yup
        .string()
        .email("must be a valid email address")
        .required(),
      terms: yup.boolean().oneOf([true], "please agree with us"),
      positions: yup.string().required("Must choose a position"),
      password: yup.string().required("must say why")
    });
  
  
    const validateChange = e => {
      yup
        .reach(formSchema, e.target.name) 
        .validate(e.target.value) 
        .then(valid => {
     
          setErrors({ ...errors, [e.target.name]: "" });
        })
        .catch(err => {
          
          console.log("error!", err);
          setErrors({ ...errors, [e.target.name]: err.errors[0] });
        });
    };
  
   
    useEffect(() => {
      formSchema.isValid(formState).then(valid => {
        console.log("valid?", valid);
        setIsButtonDisabled(!valid);
      });
    }, [formState]);
  
    
    const formSubmit = e => {
      e.preventDefault();
  
      
      axios
        .post("h", formState)
        .then(response => {
        
          setPost(response.data);
  
          
          setFormState({
            name: "",
            email: "",
            password: "",
            positions: "",
            terms: ""
          });
  
          
          setServerError(null);
        })
        .catch(err => {
          
          setServerError("oops! something happened!");
        });
    };
  
    
    const inputChange = e => {
      e.persist(); 
      const newFormData = {
        ...formState,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value
      }; 
      validateChange(e); 
      setFormState(newFormData);
    };
  
    return (
      <form onSubmit={formSubmit}>
        {serverError ? <p className="error">{serverError}</p> : null}
        <label htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            name="name"
            onChange={inputChange}
            value={formState.name}
            data-cy="name"
          
          />
          {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
        </label>
    <br/>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            onChange={inputChange}
            value={formState.email}
            data-cy="email"
          />
          {errors.email.length > 0 ? (
            <p className="error">{errors.email}</p>
          ) : null}
        </label>
        <br></br>

        
  
        <label htmlFor="size">
          What size would you like?
          <select id="size" name="size" onChange={inputChange}>
            <option value="">--Please choose an option--</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
  
            <option value="Large">Large</option>
  
            <option value="Extra Large">Extra Large</option>
          </select>
          {errors.positions.length > 0 ? (
            <p className="error">{errors.positions}</p>
          ) : null}
        </label>
<br></br>
<label> Choice of sauce? -Required-
   <br></br>
        <label class="container">Original Red
            <input type="checkbox" checked="checked"/>
             <span class="checkmark"></span>
             </label>
            <br/>
        <label class="container">Garlic Ranch
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <br></br>
        <label class="container">Spinach Alfredo
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>

          {errors.positions.length > 0 ? (
            <p className="error">{errors.positions}</p>
          ) : null}
</label>

<br></br>
        <label class="switch">Gluten Free Crust (+$1.00)
            <input type="checkbox"/>
            <span class="slider"></span>
            </label>

        <br></br>

 <label> What Would you like on your order? -Required-
   <br></br>
        <label class="container">Pepperoni
            <input type="checkbox" checked="checked"/>
             <span class="checkmark"></span>
             </label>
            <br/>
        <label class="container">Sausage
            <input type="checkbox"/>
            <span class="checkmark"></span>
            </label>

        <label class="container">Canadian Bacon
        <input type="checkbox"/>
        <span class="checkmark"></span>
    </label>

    <label class="container">Grilled Chicken
    <input type="checkbox"/>
    <span class="checkmark"></span>
    </label>

    <label class="container">Spicy Italian Sausage
    <input type="checkbox"/>
    <span class="checkmark"></span>
    </label>

    <label class="container">Onions
    <input type="checkbox"/>
    <span class="checkmark"></span>
    </label>

    <label class="container">Green Pepper
    <input type="checkbox"/>
    <span class="checkmark"></span>
    </label>

    <label class="container">Diced Tomatoes
    <input type="checkbox"/>
    <span class="checkmark"></span>
    </label>

    <label class="container">Black Olives
    <input type="checkbox"/>
    <span class="checkmark"></span>
    </label>

    <label class="container">Roasted Garlic
    <input type="checkbox"/>
    <span class="checkmark"></span>
    </label>

    <label class="container">Artichoke Hearts
    <input type="checkbox"/>
    <span class="checkmark"></span>
    </label>

    <label class="container">Three Cheese
    <input type="checkbox"/>
    <span class="checkmark"></span>
    </label>

    <label class="container">Pineapple
    <input type="checkbox"/>
    <span class="checkmark"></span>
    </label>

    <label class="container">Extra Cheese
    <input type="checkbox"/>
    <span class="checkmark"></span>
    </label>

    <label class="container">Grilled Chicken
    <input type="checkbox"/>
    <span class="checkmark"></span>
    </label>

    <label class="container">Grilled Chicken
    <input type="checkbox"/>
    <span class="checkmark"></span>
    </label>

    <label class="container">Grilled Chicken
    <input type="checkbox"/>
    <span class="checkmark"></span>
    </label>

    <label class="container">Grilled Chicken
    <input type="checkbox"/>
    <span class="checkmark"></span>
    </label>

    {errors.positions.length > 0 ? (
            <p className="error">{errors.positions}</p>
          ) : null}

    </label>

        <pre>{JSON.stringify(post, null, 2)}</pre>

        <label htmlFor="special_instructions">
          Special Instructions
          <textarea
            name="special_instructions"
            onChange={inputChange}
            placeholder='Anything else?'
            value={formState.password}
            data-cy="password"
          />
          {errors.password.length > 0 ? (
            <p className="error">{errors.password}</p>
          ) : null}
        </label>
<br></br>
        <button disabled={isButtonDisabled} type="submit">
         Add to  Order
        </button>

      </form>
    );
  }
  