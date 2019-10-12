import React, { Component } from 'react'


export default class OnlineWechat extends Component{

    componentWillMount(){
        document.title = "微信客服"
    }

    render(){
        return(
            <div>公众号咨询</div>
        )
    }
}