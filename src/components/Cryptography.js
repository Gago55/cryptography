import React from 'react'
import { connect } from 'react-redux'

const Cryptography = (props) => {
    return(
        <div>
            {props.text}
        </div>
    )
}
let mapStateToProps = state => ({
    text : state.app.inputText
})
export default connect(mapStateToProps , undefined)(Cryptography)