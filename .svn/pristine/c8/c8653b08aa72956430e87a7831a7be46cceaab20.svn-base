import style from '../detail/index.less'
import { Card, Avatar } from 'antd';

import { HCText, HCImage, HCVoice } from '../type/index'

const { Meta } = Card;
export const HCItem = (props) => {
    const avatar = props.avatar
    const data = props.data
    const Obj = () => {
        switch (data.type) {
            case 1:
                return <HCText data={data} />
            case 2:
                return <HCImage data={data} />
            case 3:
                return <HCVoice data={data} />
            default:
                return null
        }
    }
    return (
        <div className="messageDetail">
            <div className={!data.my ? style.left : style.right} >
                <Card>
                    <Meta
                        avatar={
                            <Avatar src={avatar} />
                        }
                        description={
                            <Obj data={data} />
                        }
                    />
                </Card>
            </div>
            <div style={{ clear: "both" }}></div>
        </div>
    )
}
