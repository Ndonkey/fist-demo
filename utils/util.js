// const formatTime = date => {
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()
//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()

//   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }

// const formatNumber = n => {
//   n = n.toString()
//   return n[1] ? n : '0' + n
// }

// module.exports = {
//   formatTime: formatTime
// }
let fetchdata = (url,data={},method='get') => {
  return new Promise((resolve,reject)=>{
    wx.request({
      url,
      data,
      method,
      success: res => resolve(res.data),
      fail:reject
    })
  })
}


// 一堆文章的数据
let articleData = [
  { title: "文章1", roating: 5, content: "文章1的内容文", id: 1 },
  { title: "文章2", roating: 4, content: "文章2的内容", id: 2 },
  { title: "文章3", roating: 3, content: "文章3的内容", id: 3 },
  { title: "文章4", roating: 3, content: "文章4的内容", id: 4 },
  { title: "文章5", roating: 5, content: "文章5的内容", id: 5 },
  { title: "文章6", roating: 4, content: "文章6的内容", id: 6 },
  { title: "文章7", roating: 3, content: "文章1的内容文", id: 7 }
]


// 把数字转成数组 数组里面放0和1 表示有亮的星星 0表示暗的星星
let StartoArray = (count) => {
  let starArray = [];
  for(let i=0;i<5;i++){
    if(i<count){
      starArray.push(1)
    }else{
      starArray.push(0)
    }
  }
  return starArray
}

export { fetchdata, articleData, StartoArray }