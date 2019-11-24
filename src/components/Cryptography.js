import React from 'react'
import { connect } from 'react-redux'
import styles from './Cryptography.module.css'

const Cryptography = (props) => {
    return(
        <div className={styles.mainDiv}>
            {props.text}
        </div>
    )
}
let mapStateToProps = state => ({
    text : state.app.inputText
})
export default connect(mapStateToProps , undefined)(Cryptography)