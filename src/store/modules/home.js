import axios from 'axios'
import axiosJsonp from 'axios-jsonp'
const state = {
    feedList:[],
    skip:0
}

const mutations = { 
    loadMore (state,payload) {
        state.skip += 3
        state.feedList = state.feedList.concat(payload.res)
    }
}

const actions = {
    loadMore({commit,state}){
        // loc:城市代号
        axios({
            url:'https://api.douban.com/v2/event/list?loc=108288&start=' +state.skip + '&count=3',
            method:"GET",
            adapter:axiosJsonp
        })
        .then(res => {
            commit({
                type:'loadMore',
                res: res.data.events
            })
            // console.log(res.data.events)
        })
        .catch(err => {
            console.log('*error:'+err);
        })
        // jsonp('/api/v2/event/list?loc=108288&start=' +state.skip + '&count=3',null,(err,data)=>{
        //     if(!err){
        //         commit({
        //             type:'loadMore',
        //             res:data.events
        //         })
        //     }
        //     else{
        //         console.log(err)
        //     }
        // })
    }
}

export default{
    state,
    mutations,
    actions
}