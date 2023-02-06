export const environment = {
  maxAudioFileSize:1024*1024*10,//10 mb
  production: false,
  appTitle:'girls2talk2',
  apiUrl:'https://admin.girls2talk2.com',
  socketUrl:'https://admin.girls2talk2.com',
  ccbill_mode:'TEST',
  baseUrl:"https://girls2talk2.com",
  ccbill_endpoint:'https://api.ccbill.com/wap-frontflex/flexforms/',
  reCaptchaSiteKey:'6Lc0OZIeAAAAAOUVBXxZSNcQLudrII6zarbrKpCE',
  reCaptchaSecretKey:'6Lc0OZIeAAAAAMwWJe2bOLjfQhsaMMLxXQKf95Tc',
  maxLenghtText:255,
  maxLenghtPhone:15,
  minLengthPass:8,
  uploadUrl:'https://admin.girls2talk2.com/api/v1/upload/',
  imageSize:{
    thumbnail:{
      width:200,
      height:250,
    },
    medium:{
      width:250,
      height:350,
    },
    big:{
      width:350,
      height:450,
    },
  }
};
