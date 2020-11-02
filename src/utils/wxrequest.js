import wepy from 'wepy';
import tip from './tip'
import utils from './utils'

const wxRequest = (params = {}, url) => {
    return new Promise(function (resolve, reject) {
        let data = params.query || {};
        wepy.request({
            url: url,
            method: params.method || 'POST',
            data: data,
            header: { 'Content-Type': 'application/json' },
            success: function(res) {
              console.log('结果',res);
              if(res.data.returnCode == "AAAAAAA"){
                resolve(res)
              }else if(res.data.returnCode=='1000009'){
                console.log('登录超时')
                wx.clearStorage()
                utils.toLogin();
              }else{
                wx.showToast({
                  title: res.data.returnMsg,
                  icon: "none",
                  mask: true,
                  duration: 2000
                });
                reject(res)
              }
            },
            fail: function(err){
                // console.log('请求出错',err)
            },
            complete:function(res) {
              // console.log(res)
              if(res.statusCode==404){
                tip.error('请求报错');
              }
            }
        });
    });
}

module.exports = {
    wxRequest
}
