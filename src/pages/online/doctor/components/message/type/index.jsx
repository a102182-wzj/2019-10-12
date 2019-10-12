import style from '../detail/index.less'

export const HCText = (props) => {
    const data = props.data
    return (
        <div>
            <p>{data.content}</p>
            <span className={style.readStatus}>{data.status === 1 ? "已读" : "未读"}</span>
        </div>
    )
}

export const HCImage = (props) => {
    const data = props.data
    const imgUrl = data.content.url
    const noFound = ""
    return (
        <div>
            <a target="_blank" href={imgUrl !== undefined && imgUrl !== "" ? imgUrl : noFound}><img
                alt=""
                src={imgUrl !== undefined && imgUrl !== "" ? imgUrl : noFound} />
            </a>
            <span className={style.readStatus}>{data.status === 1 ? "已读" : "未读"}</span>
        </div>
    )
}

export const HCVoice = (props) => {
    const data = props.data
    const content = data.content
    return (
        <div>
            <div className={style.voice} onClick={() => {

            }}>
                <span>{content.long}″</span>
            </div>
            {/* 
            <audio>
                
                <source src="https://hippo-doctor-1258520047.cos.ap-beijing.myqcloud.com/audio/tmp_3b332cc56624a1fad70c63c9bf226404110ca03930999c00.m4a" type="audio/mpeg" />
            </audio> */}
            {/* <audio autoplay src="https://hippo-doctor-1258520047.cos.ap-beijing.myqcloud.com/audio/tmp_3b332cc56624a1fad70c63c9bf226404110ca03930999c00.m4a">123</audio> */}
            <span className={style.readStatus}>{data.status === 1 ? "已读" : "未读"}</span>
        </div>
    )
}

export const HCVideo = (props) => {
    return (
        <div>123</div>
    )
}