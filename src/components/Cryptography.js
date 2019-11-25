import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from './Cryptography.module.css'
import TextField from '@material-ui/core/TextField'
import { FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core'
import { setInputTextAC } from '../redux/appReducer'
import CryptoJS from 'crypto-js'

const Cryptography = (props) => {
    const [algorithm, setAlgorithm] = useState('des')
    const [result, setResult] = useState('')
    const [key, setKey] = useState('')


    const handleInputChange = event => {
        props.setInputText(event.target.value)
    }

    const handleSelectChange = event => {
        setAlgorithm(event.target.value)
    }

    const handleKeyInputChange = event => {
        setKey(event.target.value)
    }

    const handleButtonClick = () => {
        if (algorithm === 'des') {
            let encryptedText = CryptoJS.DES.encrypt(props.inputText, key)
            setResult(encryptedText)
        }
    }

    return (
        <div className={styles.mainDiv}>
            <TextField id="standard-basic" label="Input Text" value={props.inputText} onChange={handleInputChange} />
            <FormControl >
                <InputLabel id="demo-simple-select-label">Algorithm</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={algorithm}
                    onChange={handleSelectChange}
                >
                    <MenuItem value={'des'}>DES</MenuItem>
                    <MenuItem value={'gdes'}>GDES</MenuItem>
                </Select>
            </FormControl><br />
            <TextField id="standard-basic" label="Input Key" value={key} onChange={handleKeyInputChange} /><br />
            <Button style={{ margin: '15px' }} onClick={handleButtonClick}>Encrypt</Button><br />
            <TextField
                id="outlined-read-only-input"
                label="Result"
                value={result}
                // className={classes.textField}
                margin="normal"
                multiline
                InputProps={{
                    readOnly: true,
                }}
                variant="outlined"
            />
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