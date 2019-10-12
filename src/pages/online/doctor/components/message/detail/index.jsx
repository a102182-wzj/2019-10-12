import React, { Component } from 'react'
import { Skeleton, Switch, Card, Icon, Avatar } from 'antd';

import { HCItem } from '../item/index'

import style from './index.less'
import { object } from 'prop-types';

const { Meta } = Card;
export default class OnlineDoctorMessageDetail extends Component {
    render() {
        const detail = this.props.detail
        const doctor = detail.doctor
        const user = detail.user
        const data = [
            { no: 1, type: 1, content: "abcde", status: 1, my: true },
            { no: 2, type: 2, content: { url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570702761518&di=cb21ee90229bf66496812aaf95fdf6a9&imgtype=0&src=http%3A%2F%2Fimage.wyhnn.com%2Fuploads%2F20190126%2F20%2F1548505372-XUzZfwoWju.jpg" }, status: 0, my: false },
            { no: 3, type: 3, content: { path: "", long: 15, play: false }, status: 1, my: false },
            { no: 3, type: 3, content: { path: "", long: 25, play: false }, status: 1, my: true },
            { no: 4, type: 1, content: "分类可计算的安抚了看见了房价阿斯利康", status: 0, my: true },
        ]
        return (
            <div>
                {
                    detail.data !== undefined ? detail.data.map(
                        (x, index) => {
                            x.my = x.is_doctor
                            if (typeof x.content === object) {
                                console.log("aaavobjectobjectobject")
                                x.content_type = 2
                                x.content = {
                                    url:x.content[0]
                                }
                            }
                            
                            return <HCItem
                                key={index}
                                avatar={
                                    x.is_doctor ?
                                        doctor["doctor" + x.doctor]["headimg"] :
                                        user["headimg"]
                                }
                                data={x} />
                        }
                    ) : ""
                }
                {/* <div className={style.left} >
                    <Card>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            description={
                                <HCText content="弗兰克的三就了副科级的萨利防静电撒了看发就的撒离开家发电量扩散丽枫酒店三丽枫酒店三了发来的沙基里付款的撒发记录卡打伞就弗兰克的三就发来的就仨了开发的时间啊了开发大" status="已读"></HCText>
                            }
                        />
                    </Card>
                </div>
                <div style={{ clear: "both" }}></div>
                <div className={style.left} >
                    <Card>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            description={
                                <HCImage content="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570702761518&di=cb21ee90229bf66496812aaf95fdf6a9&imgtype=0&src=http%3A%2F%2Fimage.wyhnn.com%2Fuploads%2F20190126%2F20%2F1548505372-XUzZfwoWju.jpg" status={1} />
                            }
                        />
                    </Card>
                </div>
                <div style={{ clear: "both" }}></div>
                <div className={style.right} >
                    <Card>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            description={
                                <HCImage content="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570702761518&di=cb21ee90229bf66496812aaf95fdf6a9&imgtype=0&src=http%3A%2F%2Fimage.wyhnn.com%2Fuploads%2F20190126%2F20%2F1548505372-XUzZfwoWju.jpg" status={1} />
                            }
                        />
                    </Card>
                </div>
                <div style={{ clear: "both" }}></div>
                <div className={style.right} >
                    <Card>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            description={
                                <HCText content="谢" status="已读"></HCText>
                            }
                        />
                    </Card>
                </div>
                <div style={{ clear: "both" }}></div>
                <div className={style.right} >
                    <Card>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            description={
                                <HCText content="谢" status="已读"></HCText>
                            }
                        />
                    </Card>
                </div> */}
                <div style={{ clear: "both" }}></div>
            </div>
        )
    }
}