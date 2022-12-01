import AES from 'crypto-js/aes';
import enc from 'crypto-js/enc-utf8'

const key = '2676c7fe0140735ede3edb0968349021e9fc28761e3cc4cd814b099541930de3dd6abd8126ad7eaa104b9fc9a30c9553a06fb99dc1e80cfb389978cb1f7466ed';

const decryptData = (data) => {
    let bytes = AES.decrypt(data, key);
    let decryptedData = JSON.parse(bytes.toString(enc))
    return decryptedData
}

const decryptString = (data) => {
    let bytes = AES.decrypt(data, key);
    let decryptedData = bytes.toString(enc)
    return decryptedData
}

const encryptData = (data) => {

    return AES.encrypt(JSON.stringify(data), key).toString();
}

const encryptString = (data) => {

    return AES.encrypt(data, key).toString();
}

export {decryptData, encryptData, decryptString, encryptString}