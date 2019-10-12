import React, { Component } from 'react'
import router from 'umi/router'

export default class OnlineChoose extends Component {




    componentWillMount() {

        // 这里要创建socket连接，保存dva中

        console.log("choose props", this.props)
        const sub_menu = this.props.location.query.menu
        console.log("sub_menu", sub_menu)
        if (sub_menu !== undefined && sub_menu.length > 0) {
            router.push(sub_menu[0].url)
        }
    }

    render() {
        return (
            <div></div>
        )
    }
}