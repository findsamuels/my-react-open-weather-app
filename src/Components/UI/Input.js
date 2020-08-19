import React from 'react'
import {FaSearch} from 'react-icons/fa'
import classes from './Input.module.scss'
import { Form, FormGroup } from 'react-bootstrap'

const Input = (props) => {

    switch (props.type) {
        case 'search':
            return <FormGroup className={classes.FormGroup}>
              <FaSearch className={classes.inputSearch}/>
<input className={classes.Input} type="text" value={props.value} onFocus={props.onFocus} onChange={props.onChange} name={props.name} placeholder={props.placeholder || 'Search'} id={props.id} />
            </FormGroup>
            
        case 'textArea':
            return <textarea  className={classes.TextArea} cols='30'  onFocus={props.onFocus} onChange={props.onChange} rows='30' value={props.value} name={props.name} placeholder={props.placeholder} id={props.id}/>
    
        default:
            return <input  className={classes.Input} type="text"  onFocus={props.onFocus} onChange={props.onChange} value={props.value} name={props.name} placeholder={props.placeholder} id={props.id}/>
    }

}

export default Input
