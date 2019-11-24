import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from './Cryptography.module.css'
import TextField from '@material-ui/core/TextField'
import { FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core'
import { setInputTextAC } from '../redux/appReducer'

const Cryptography = (props) => {

    const handleInputChange = event => {
        props.setInputText(event.target.value)
    }

    return (
        <div className={styles.mainDiv}>
            <TextField id="standard-basic" label="Input Text" value={props.inputText} onChange={handleInputChange} />
        </div>
    )
}
let mapStateToProps = state => ({
    inputText: state.app.inputText
})

let mapDispatchToProps = dispatch => ({
    setInputText: (text) => {
        dispatch(setInputTextAC(text))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cryptography)