const axios = require('axios')
const shortid = require('shortid')
const serviceTypes = require("./constants/services");
const config = require('config.json');

const baseUrl = "https://gateway.spendoware.com";


function Spendo(param) {
    if (!param) return console.log('Error: apiKey, are required!')

    const { apiKey, data, serviceType } = param

     /**
   * makes an encrypted call to Spendo API
   * @param {object} params => serviceType, apiKey, data
   * @param {function} callback gets called with the result(data) object
   * @return {object} data return data response object
   */
    
      async function request (params, callback) {
          if (!params) return console.log('Error: serviceType, data are required!')
          
    
        var payload = data
        
          
        const { data: Response } = await axios.post(`${baseUrl}/gateway/api/v1/${serviceType}`, {
            data: payload
          }, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': apiKey
            }
        })
          
          if (callback) {
        
              callback(Response)
          }
          
          return Response
        }
          
          
          return request;

}


module.exports={Spendo,serviceTypes}