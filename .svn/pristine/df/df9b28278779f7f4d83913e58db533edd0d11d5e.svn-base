import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Input, Button, Icon } from 'antd';
import { Tabs, Badge } from 'antd-mobile'
import { connect } from 'dva'
import OnlineDoctorMessageList from './components/message/list'
import OnlineDoctorMessageDetail from './components/message/detail'
import style from './index.less'

import request from '../../../utils/request'
const { SubMenu } = Menu;
const { Footer, Content, Sider } = Layout;
const { Search, TextArea } = Input;

class OnlineDoctor extends Component {

    state = {
        list_service: [],
        message: ''
    }

    componentWillMount() {
        document.title = "线上咨询"
        // 查询订单信息
        request.get("https://api.account.hippokidcare.com/doctor/order/new").then(res => {
            this.setState({
                list_service: res.data
            })
        })
    }

    render() {
        const message_detail = this.props.state.onlineDoctor.messageDetail
        const message_detail_order = message_detail.order
        console.log("message_detail", message_detail)
        return (
            <Layout style={{ height: '100%', borderTop: '1px solid #ccc' }}>
                <Sider width={240} style={{ background: '#fff', borderRight: "1px solid #ccc" }}>
                    <div style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                        <Search placeholder="姓名/手机号" />
                    </div>
                    <div style={{ cursor: "pointer" }}>
                        <Tabs tabs={
                            [
                                { title: <Badge text={''}>进行中</Badge> },
                                { title: <Badge text={''}>历史咨询</Badge> }
                            ]
                        }
                            initialPage={0}
                            onChange={(tab, index) => { console.log('onChange', index, tab); }}
                            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        >
                            <OnlineDoctorMessageList data={this.state.list_service} {...this.props} />
                        </Tabs>
                    </div>
                </Sider>
                <Layout>
                    <div style={{ padding: '10px' }}>
                        <div style={{ float: 'left' }}>患者姓名</div>
                        <div style={{ float: 'right' }} className={style.ContentTitleButtons}>
                            <Button size="small" icon="redo1" type="danger">退款</Button>
                            <Button size="small">加入白名单</Button>
                            <Button size="small" icon="phone"></Button>
                        </div>
                    </div>
                    <Content onScroll={(event) => {
                        console.log("event", event)
                    }}
                        style={{
                            background: '#fff',
                            padding: 10,
                            margin: 0,
                            overflow: 'auto'
                        }}

                    >
                        <OnlineDoctorMessageDetail detail={message_detail === undefined ? [] : message_detail} />
                    </Content>
                    <Footer style={{ height: "200px", padding: '0' }}>
                        <div style={{ height: "40px", lineHeight: "40px" }} className={style.InputButtons}>
                            {/* <Icon style={{fontSize:'22px'}} text="图片" type="file-image" theme="twoTone" /> */}
                            <Button size="small">图片</Button>
                            <Button icon="download" size="small">优惠券</Button>
                            <Button icon="download" size="small">转医生</Button>
                            <Button icon="download" size="small">快捷提问</Button>
                        </div>
                        <TextArea onChange={(e) => { this.setState({ message: e.target.value }) }} style={{ height: "160px", border: 'none', borderRadius: '0' }} />
                        <Button onClick={() => {
                            // 获取文本框的值
                            console.log("object", this.state.message)
                            let tmp_order = message_detail_order[0]
                            request.post("https://api.account.hippokidcare.com/doctor/order/service", {
                                attach: [],
                                content: this.state.message,
                                doctor: tmp_order["doctor"],
                                form_id: "",
                                msgtype: "",
                                order: 2646,
                                superior: message_detail.data[0].no,
                            }).then(res => {
                                console.log("post service res", res)
                            })
                        }} style={{ position: 'absolute', bottom: 10, right: 330 }} type="primary">发送</Button>
                    </Footer>
                </Layout>
                <Sider width={320} style={{ background: '#fff', borderLeft: "1px solid #ccc" }}>
                    <div style={{ cursor: "pointer" }}>
                        <Tabs style={{ lineHeight: '64px' }} tabs={
                            [
                                { title: '用户信息' },
                                { title: '知识库' },
                                { title: '更多>>' }
                            ]
                        }
                            initialPage={0}
                            onChange={(tab, index) => { console.log('onChange', index, tab); }}
                            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        ></Tabs>
                    </div>
                </Sider>
            </Layout>
        )
    }
}
export default connect((state) => {
    return { state }
})(OnlineDoctor)