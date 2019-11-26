class GDES {
    text //Text to Encrypt
    key //Key for Encrypt

    IPTable = [
        58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4,
        62, 54, 46, 38, 30, 22, 14, 6, 64, 56, 48, 40, 32, 24, 16, 8,
        57, 49, 41, 33, 25, 17, 9, 1, 59, 51, 43, 35, 27, 19, 11, 3,
        61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39, 31, 23, 15, 7
    ]
    FPTable = [
        40,	8 ,	48,	16,	56,	24,	64,	32,	39,	7 ,	47,	15,	55,	23,	63,	31,
        38,	6 ,	46,	14,	54,	22,	62,	30,	37,	5 ,	45,	13,	53,	21,	61,	29,
        36,	4 ,	44,	12,	52,	20,	60,	28,	35,	3 ,	43,	11,	51,	19,	59,	27,
        34,	2 ,	42,	10,	50,	18,	58,	26,	33,	1 ,	41,	9 ,	49,	17,	57,	25
    ]

    Key64To28Table1 = [
        57, 49, 41, 33, 25, 17, 9 , 1 , 58, 50, 42, 34, 26, 18,
        10, 2 , 59, 51, 43, 35, 27, 19, 11, 3 , 60, 52, 44, 36
    ]
    Key64To28Table2 = [
        63, 55, 47, 39, 31, 23, 15, 7 , 62, 54, 46, 38, 30, 22, 
        14, 6 , 61, 53, 45, 37, 29, 21, 13, 5 , 28, 20, 12, 4
    ]
    KeyShiftTable = [
        1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1
    ]
    Key56To48Table = [
        14,	17,	11,	24,	1,	5,	3,	28,	15,	6,	21,	10,	23,	19,	12,	4,
        26,	8,	16,	7,	27,	20,	13,	2,	41,	52,	31,	37,	47,	55,	30,	40,
        51,	45,	33,	48,	44,	49,	39,	56,	34,	53,	46,	42,	50,	36,	29,	32
    ]
    ETable = [
        32,	1 ,	2 ,	3,	4,	5,
        4 , 5 ,	6 ,	7,	8,	9,
        8 ,	9 ,	10,	11,	12,	13,
        12,	13,	14,	15,	16,	17,
        16,	17,	18,	19,	20,	21,
        20,	21,	22,	23,	24,	25,
        24,	25,	26,	27,	28,	29,
        28,	29,	30,	31,	32,	1
    ]
    Sboxes = [
        [ // 0
            [14, 4 , 13, 1 , 2 , 15, 11, 8 , 3 , 10, 6 , 12, 5 , 9 , 0 , 7 ],
            [0 , 15, 7 , 4 , 14, 2 , 13, 1 , 10, 6 , 12, 11, 9 , 5 , 3 , 8 ],
            [4 , 1 , 14, 8 , 13, 6 , 2 , 11, 15, 12, 9 , 7 , 3 , 10, 5 , 0 ],
            [15, 12, 8 , 2 , 4 , 9 , 1 , 7 , 5 , 11, 3 , 14, 10, 0 , 6 , 13],
        ],
        [ // 1
            [15, 1 , 8 , 14, 6 , 11, 3 , 4 , 9 , 7 , 2 , 13, 12, 0 , 5 , 10],
            [3 , 13, 4 , 7 , 15, 2 , 8 , 14, 12, 0 , 1 , 10, 6 , 9 , 11, 5 ],
            [0 , 14, 7 , 11, 10, 4 , 13, 1 , 5 , 8 , 12, 6 , 9 , 3 , 2 , 15],
            [13, 8 , 10, 1 , 3 , 15, 4 , 2 , 11, 6 , 7 , 12, 0 , 5 , 14, 9 ],
        ],
        [ // 2
            [10, 0 , 9 , 14, 6 , 3 , 15, 5 , 1 , 13, 12, 7 , 11, 4 , 2 , 8 ],
            [13, 7 , 0 , 9 , 3 , 4 , 6 , 10, 2 , 8 , 5 , 14, 12, 11, 15, 1 ],
            [13, 6 , 4 , 9 , 8 , 15, 3 , 0 , 11, 1 , 2 , 12, 5 , 10, 14, 7 ],
            [1 , 10, 13, 0 , 6 , 9 , 8 , 7 , 4 , 15, 14, 3 , 11, 5 , 2 , 12],
        ],
        [ // 3
            [7 , 13, 14, 3 , 0 , 6 , 9 , 10, 1 , 2 , 8 , 5 , 11, 12, 4 , 15],
            [13, 8 , 11, 5 , 6 , 15, 0 , 3 , 4 , 7 , 2 , 12, 1 , 10, 14, 9 ],
            [10, 6 , 9 , 0 , 12, 11, 7 , 13, 15, 1 , 3 , 14, 5 , 2 , 8 , 4 ],
            [3 , 15, 0 , 6 , 10, 1 , 13, 8 , 9 , 4 , 5 , 11, 12, 7 , 2 , 14],
        ],
        [ // 4
            [2 , 12, 4 , 1 , 7 , 10, 11, 6 , 8 , 5 , 3 , 15, 13, 0 , 14, 9 ],
            [14, 11, 2 , 12, 4 , 7 , 13, 1 , 5 , 0 , 15, 10, 3 , 9 , 8 , 6 ],
            [4 , 2 , 1 , 11, 10, 13, 7 , 8 , 15, 9 , 12, 5 , 6 , 3 , 0 , 14],
            [11, 8 , 12, 7 , 1 , 14, 2 , 13, 6 , 15, 0 , 9 , 10, 4 , 5 , 3 ],
        ],
        [ // 5
            [12, 1 , 10, 15, 9 , 2 , 6 , 8 , 0 , 13, 3 , 4 , 14, 7 , 5 , 11],
            [10, 15, 4 , 2 , 7 , 12, 9 , 5 , 6 , 1 , 13, 14, 0 , 11, 3 , 8 ],
            [9 , 14, 15, 5 , 2 , 8 , 12, 3 , 7 , 0 , 4 , 10, 1 , 13, 11, 6 ],
            [4 , 3 , 2 , 12, 9 , 5 , 15, 10, 11, 14, 1 , 7 , 6 , 0 , 8 , 13],
        ],
        [ // 6
            [4 , 11, 2 , 14, 15, 0 , 8 , 13, 3 , 12, 9 , 7 , 5 , 10, 6 , 1 ],
            [13, 0 , 11, 7 , 4 , 9 , 1 , 10, 14, 3 , 5 , 12, 2 , 15, 8 , 6 ],
            [1 , 4 , 11, 13, 12, 3 , 7 , 14, 10, 15, 6 , 8 , 0 , 5 , 9 , 2 ],
            [6 , 11, 13, 8 , 1 , 4 , 10, 7 , 9 , 5 , 0 , 15, 14, 2 , 3 , 12],
        ],
        [ // 7
            [13, 2 , 8 , 4 , 6 , 15, 11, 1 , 10, 9 , 3 , 14, 5 , 0 , 12, 7 ],
            [1 , 15, 13, 8 , 10, 3 , 7 , 4 , 12, 5 , 6 , 11, 0 , 14, 9 , 2 ],
            [7 , 11, 4 , 1 , 9 , 12, 14, 2 , 0 , 6 , 10, 13, 15, 3 , 5 , 8 ],
            [2 , 1 , 14, 7 , 4 , 10, 8 , 13, 15, 12, 9 , 0 , 3 , 5 , 6 , 11],
        ]
    ]
    pTable = [
        16,	7 ,	20,	21,	29,	12,	28,	17,
        1 ,	15,	23,	26,	5 ,	18,	31,	10,
        2 ,	8 ,	24,	14,	32,	27,	3 ,	9 ,
        19,	13,	30,	6 ,	22,	11,	4 ,	25
    ]

    binarText //Array which contain Binar Numbers of Text's Letters 
    initialText //Array after Initian Permutation
    binarKey //Array which contain Binar Numbers of Key's Letters 

    key28_1 //Key after method key64to56()
    key28_2 //Key after method key64to56()
    allKeys //16 keys for 16 rounds

    lText //Array which contain fisrt part of text
    rtext //Array which contain second part of text

    encryptedText

    constructor(text, key) {
        this.text = text
        this.key = key
        
        this.encrypt()
    }

    encrypt = () =>{
        this.binarText = this.textToBin(this.text)
        this.initialText = this.initialPermutation()
        this.binarKey = this.textToBin(this.key)

        //Generation Keys
        this.key28_1 = this.key64to28(this.Key64To28Table1)
        this.key28_2 = this.key64to28(this.Key64To28Table2)
        this.allKeys = this.generateAllKeys()

        //Spliting Text
        this.splitText()

        //Encription
        for (let i = 0 ; i < 16 ; i++){//16 Rounds
            if(i !== 15){
                let tmp = this.rText
                let fResult = this.functionFeistel(this.rText , this.allKeys[i])
                this.rText = this.xorReturnArray(this.lText , fResult)
                this.lText = tmp
            }
            else{//Last Round
                let fResult = this.functionFeistel(this.rText , this.allKeys[i])
                this.lText = this.xorReturnArray(this.lText , fResult)
            }
        }

        //Joining parts of text
        let encryptedText = [...this.lText , ...this.rText]

        //Final Permutation
        this.encryptedText = this.finalPermutation(encryptedText)
        this.encryptedText = this.encryptedText.join('')
           
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
            initialText[i] = this.binarText.join("").charAt(this.IPTable[i] - 1)
        }
        return initialText
    }
    finalPermutation = (text) =>{
        let finalText = new Array(64)
        for (let i = 0 ; i < 64 ; i++){
            finalText[i] = text.join('').charAt(this.FPTable[i] -1)
        }
        return finalText
    }
    key64to28 = (table) =>{
        let key28 = new Array(28)
        for (let i = 0 ; i < 28 ; i++){
            key28[i] = this.binarKey.join('').charAt(table[i]-1)
        }
        return key28
    }
    generateAllKeys = () =>{
        let allKeys = new Array(16)
        for (let i = 0 ; i < 16 ; i++){
            this.key28_1 = this.leftShiftKey28(this.key28_1 , this.KeyShiftTable[i])
            this.key28_2 = this.leftShiftKey28(this.key28_2 , this.KeyShiftTable[i])

            let key56 = this.key28_1.join('') + this.key28_2.join('')
            allKeys[i] = this.key56to48(key56)
        }
        return allKeys
    }
    key56to48 = (key56) =>{
        let key48 = new Array(48)
        for (let i = 0 ; i < 48 ; i++){
            key48[i] = key56.charAt(this.Key56To48Table[i] - 1)
        }
        return key48
    }
    leftShiftKey28 = ( key , n) =>{
        for (let i = 0 ; i < n ; i++){
            let tmp = key[0]
            for (let j = 0 ; j < key.length-1 ; j++){
                key[j] = key[j+1]
            }
            key[27] = tmp
        }
        return key
    }

    splitText = () =>{
        this.lText = new Array(32)
        this.rText = new Array(32)

        for (var i = 0; i < 32; i++) {
            this.lText[i] = this.initialText.join("").charAt(i)
        }
        let j = 0
        for (let i = 32; i < 64; i++) {
            this.rText[j] = this.initialText.join("").charAt(i)
            j++
        }
    }

    functionFeistel = ( rText , key) =>{//return array
        let rText48  = this.E(rText)
        let s = this.xorReturnString(rText48 , key)
        let splitedS = s.match(/.{1,6}/g) //split s into 8 chunks 
        let sResult = ''
        
        for (let i = 0 ; i < 8 ; i++){
            let sub = splitedS[i]
            let fisrtAndLast = parseInt(sub.charAt(0) + sub.charAt(5) , 2) 
            let middle = parseInt( sub.charAt(1) + sub.charAt(2) + sub.charAt(3) + sub.charAt(4) , 2) 
            
            let numberFormSbox = this.Sboxes[i][fisrtAndLast][middle]
            let decNum = numberFormSbox.toString(2)

            if(decNum.length % 4 !== 0){ //Adding 0 to start of number if its length is less then 4
                let count = 4 - decNum.length % 4
                let startOfNum = ''
                for (let i = 0 ; i < count ; i++){
                    startOfNum += '0'
                }
                decNum = startOfNum + decNum
            }
            sResult += decNum
        }
        
        //Final permutation
        sResult = this.PPermutation(sResult)
        return sResult
    }

    PPermutation = (text32) =>{
        let newText32 = new Array(32)
        for (let i = 0 ; i < 32 ; i++){
            newText32[i] = text32.charAt(this.pTable[i] - 1)
        }
        return newText32
    }

    E = (rText) =>{
        let text48 = new Array(48)
        for (let i = 0 ; i < 48 ; i++){
            text48[i] = rText.join('').charAt(this.ETable[i] - 1)
        }
        return text48
    }

    xorReturnString = (a , b ) =>{ //a and b are arrays
        let c = ''

        a = a.join('')
        b = b.join('')

        for (let i = 0 ; i < a.length ; i++){
            c += a[i] ^ b[i]
        }

        return c
    }
    xorReturnArray = (a , b ) =>{ //a and b are arrays
        let c = new Array(a.length)

        a = a.join('')
        b = b.join('')

        for (let i = 0 ; i < a.length ; i++){
            c[i] = a[i] ^ b[i]
        }

        return c
    }
}

export default GDES