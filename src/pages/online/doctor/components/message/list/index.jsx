import React from 'react'
import { List } from 'antd-mobile';
import { connect } from 'dva'
import styles from './index.less'


const Item = List.Item;
const Brief = Item.Brief;

class OnlineDoctorMessageList extends React.Component {
    render() {
        const data = this.props.data === undefined ? [] : this.props.data
        const list_service = data.map(
            x => {
                return (
                    <Item
                        key={x.number}
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => {
                            this.props.dispatch({
                                type: 'onlineDoctor/messageDetail',
                                payload: { order: x.order }
                            })
                        }}
                    >
                        {x.baby.name} {x.baby.gender} {x.baby.age} <Brief>{x.content}</Brief>
                    </Item>
                )
            }
        )
        
        return (
            <section>
                <List className={styles.list}>
                    {list_service}
                    {/* <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        extra="10:30" align="top"

                        activeStyle={styles.avtive}
                    >
                        Title 123 321 <Brief>分类大数据了副科级的萨克拉发动机散了</Brief>
                    </Item>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine

                    >
                        Title 123 321 <Brief>范德萨发范德萨范德萨范德萨</Brief>
                    </Item>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine

                    >
                        Title 123 321 <Brief>图片</Brief>
                    </Item>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine

                    >
                        Title 123 321 <Brief>语音</Brief>
                    </Item> */}
                </List>
            </section>
        )
    }
}
export default connect((state) => {
    return { state }
})(OnlineDoctorMessageList)
