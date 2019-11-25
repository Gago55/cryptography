class GDES {
    text //Text to Encrypt
    key //Key for Encrypt

    IPTable = [
        58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4,
        62, 54, 46, 38, 30, 22, 14, 6, 64, 56, 48, 40, 32, 24, 16, 8,
        57, 49, 41, 33, 25, 17, 9, 1, 59, 51, 43, 35, 27, 19, 11, 3,
        61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39, 31, 23, 15, 7
    ]

    binarText //Array which contain Binar Numbers of Letters 
    initialText //Array after Initian Permutation

    constructor(text, key) {
        this.text = text
        this.key = key

        this.encrypt()
    }

    encrypt = () =>{
        this.binarText = this.textToBin(this.text)
        this.initialText = this.initialPermutation()
    }

    textToBin = text => {
        let binText = new Array(text.length)
        for (let i = 0; i < text.length; i++) {
            binText[i] = 0 + "" + text.charCodeAt(i).toString(2) //text.charCodeAt(i) return ASCII code of letter
        }
        
        if(binText.length % 8 !== 0){
            let count = 8 - (8%5)
            for (let i = 0 ; i < count ; i++){
                binText.push('00000000')
            }
        }

        return binText
    }
    initialPermutation = () =>{
        let initialText = new Array(64)
        for (let i = 0; i < 64; i++) {
            initialText[i] = this.binarText.join("").charAt(this.IPTable[i] - 1);
        }
        return initialText
    }
}

export default GDES