import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styles from './Cryptography.module.css'
import TextField from '@material-ui/core/TextField'
import { FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core'
import { setInputTextAC } from '../redux/appReducer'
import CryptoJS from 'crypto-js'
import GDES from './GDES'

const Cryptography = (props) => {
    const [algorithm, setAlgorithm] = useState('des')
    const [result, setResult] = useState('')
    const [logs, setLogs] = useState('')
    const [key, setKey] = useState('')
    const [needKey, setNeedKey] = useState(true)


    useEffect( ()=>{
        if(algorithm === 'md5' || algorithm === 'sha1' || algorithm === 'sha256'  || algorithm === 'sha512'){
            setNeedKey(false)
        }else{
            setNeedKey(true)
        }   
    })


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
        let duration , newResult

        if (algorithm === 'des') {
            let startTime = performance.now()
            newResult = CryptoJS.DES.encrypt(props.inputText, key)
            let endTime = performance.now() 
            duration = (endTime - startTime).toFixed(2)
        }
        else if(algorithm === 'tripledes'){
            let startTime = performance.now()
            newResult = CryptoJS.TripleDES.encrypt(props.inputText, key)
            let endTime = performance.now() 
            duration = (endTime - startTime).toFixed(2)
        }
        else if(algorithm === 'gdes'){
            let startTime = performance.now()
            let g = new GDES(props.inputText, key)
            let endTime = performance.now() 
            newResult = g.encryptedTextHex
            duration = (endTime - startTime).toFixed(2)
        }
        else if(algorithm === 'aes'){
            let startTime = performance.now()
            newResult = CryptoJS.AES.encrypt(props.inputText, key)
            let endTime = performance.now() 
            duration = (endTime - startTime).toFixed(2)
        }
        else if(algorithm === 'rabbit'){
            let startTime = performance.now()
            newResult = CryptoJS.Rabbit.encrypt(props.inputText, key)
            let endTime = performance.now() 
            duration = (endTime - startTime).toFixed(2)
        }
        else if(algorithm === 'md5'){
            let startTime = performance.now()
            newResult = CryptoJS.MD5(props.inputText)
            let endTime = performance.now() 
            duration = (endTime - startTime).toFixed(2)
        }
        else if(algorithm === 'sha1'){
            let startTime = performance.now()
            newResult = CryptoJS.SHA1(props.inputText)
            let endTime = performance.now() 
            duration = (endTime - startTime).toFixed(2)
        }
        else if(algorithm === 'sha256'){
            let startTime = performance.now()
            newResult = CryptoJS.SHA256(props.inputText)
            let endTime = performance.now() 
            duration = (endTime - startTime).toFixed(2)
        }
        else if(algorithm === 'sha512'){
            let startTime = performance.now()
            newResult = CryptoJS.SHA512(props.inputText)
            let endTime = performance.now() 
            duration = (endTime - startTime).toFixed(2)
        }
   
        setResult(newResult)

        if(needKey)
            setLogs(logs + `${algorithm.toUpperCase()} --> Key:"${key}" Input:"${props.inputText}"   Output:"${newResult}" Duration ${duration}ms \n`)
        else
            setLogs(logs + `${algorithm.toUpperCase()} --> Input:"${props.inputText}"   Hash:"${newResult}" Duration ${duration}ms \n`)
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
                    <MenuItem value={'tripledes'}>TripleDES</MenuItem>
                    <MenuItem value={'gdes'}>GDES</MenuItem>
                    <MenuItem value={'aes'}>AES</MenuItem>
                    <MenuItem value={'rabbit'}>Rabbit</MenuItem>
                    <MenuItem value={'md5'}>MD5</MenuItem>
                    <MenuItem value={'sha1'}>SHA1</MenuItem>
                    <MenuItem value={'sha256'}>SHA256</MenuItem>
                    <MenuItem value={'sha512'}>SHA512</MenuItem>
                </Select>
            </FormControl><br />
            {  
                needKey && <TextField id="standard-basic" label="Input Key" value={key} onChange={handleKeyInputChange} />
            }<br />
            <Button style={{ margin: '15px' }} onClick={handleButtonClick}>{needKey ? "Encrypt" : "Hash"}</Button><br />
            <TextField
                id="outlined-read-only-input"
                label="Result"
                value={result}
                margin="normal"
                multiline
                InputProps={{
                    readOnly: true,
                }}
                variant="outlined"
            /><br />
            <TextField
                id="outlined-read-only-input"
                label="Logs"
                value={logs}
                style={{marginTop:'50px'}}
                margin="normal"
                multiline
                fullWidth
                rowsMax={18}
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