const axios = require('axios')
const serviceTypes = require("./constants/services");
const baseUrl = "https://gateway.spendoware.com";


/**
 * @description initialize the Spendoware wrapper function
 * @param {object} param =>  apiKey, data, serviceType
 * @return {function} request function
 */
async function Spendo(param) {
    if (!param) return console.log('Error: apiKey, are required!')

    const { apiKey, data, serviceType } = param
    
    /**
   * makes an encrypted call to Spendo API
   * @param {object} params => apiKey, data, serviceType 
   * @param {function} callback gets called with the result(data) object
   * @return {object} data return decrypted data response object
   */
    
    if (!apiKey) return console.log('Error: apikey, data are required!')
    if (!serviceType) return console.log('Error: serviceType are required!')
    if (!data) return console.log('Error: data are required!')
          
    var axiosConfig = {
        method: 'POST',
        url: `${baseUrl}/gateway/api/v1/${serviceType}`,
        headers: {
            'Content-Type': 'application/json',
            'apiKey': apiKey
        },
        data: data
    };
          
    const response = axios(axiosConfig)
        .then(function (response) {
            if (response.status === 200) {
                return JSON.stringify(response.data)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
          
    return await response??console.log('Error: no data returned!')
}


module.exports={Spendo,serviceTypes}