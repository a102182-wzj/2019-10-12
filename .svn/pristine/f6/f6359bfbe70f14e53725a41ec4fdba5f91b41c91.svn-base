import React from 'react'
import { Modal, Toast, Button, List, InputItem, Picker, Pagination, Icon, WhiteSpace } from 'antd-mobile';
import { Descriptions } from 'antd';
import { createForm } from 'rc-form';
import Highlighter from 'react-highlight-words';
import index from './index.less'
import request from '../../../utils/request'
class WechatQRcode extends React.Component {
    state = {
        QRcodes: '',
        searchText: '',
        addNewCode: false,
        key: '',
        status: '',
        optionArray: [],
        detailModal: false,
        QRcodeImage: '',
        ticker: '',
        pageNumber: 1
    }
    componentWillMount() {
        document.title = "二维码管理"
        //请求所有二维码 和 与之对应的公众号
        request.get('http://account.hippokidcare.com/wechat/qrcode', true, false).then(res => {
            this.setState({
                QRcodes: res.data
            }, () => {
                console.log('QRcodes', this.state.QRcodes)
            })
        })
        //请求所有的公众号
        request.get('http://account.hippokidcare.com/wechat/config', true, false).then(res => {
            this.setState({
                optionArray: res.data
            })
            // this.setState({
            //     QRcodes:res.data
            // })
        })
    }
    // //antd Table 搜索框
    // getColumnSearchProps = dataIndex => ({
    //     filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
    //         <div style={{ padding: 8 }}>
    //             <Input
    //                 ref={node => {
    //                     this.searchInput = node;
    //                 }}
    //                 placeholder={`Search ${dataIndex}`}
    //                 value={selectedKeys[0]}
    //                 onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
    //                 onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
    //                 style={{ width: 188, marginBottom: 8, display: 'block' }}
    //             />
    //             <Button
    //                 type="primary"
    //                 onClick={() => this.handleSearch(selectedKeys, confirm)}
    //                 icon="search"
    //                 size="small"
    //                 style={{ width: 90, marginRight: 8 }}
    //             >
    //                 Search
    //         </Button>
    //             <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
    //                 Reset
    //         </Button>
    //         </div>
    //     ),
    //     filterIcon: filtered => (
    //         <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    //     ),
    //     onFilter: (value, record) =>
    //         record[dataIndex]
    //             .toString()
    //             .toLowerCase()
    //             .includes(value.toLowerCase()),
    //     onFilterDropdownVisibleChange: visible => {
    //         if (visible) {
    //             setTimeout(() => this.searchInput.select());
    //         }
    //     },
    //     render: text => (
    //         <Highlighter
    //             highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
    //             searchWords={[this.state.searchText]}
    //             autoEscape
    //             textToHighlight={text.toString()}
    //         />
    //     ),
    // });
    //搜索函数
    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };
    //重置函数
    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };
    //展示详细的模态框并 带参数
    showDetail(record) {
        this.setDetailTrue()
        this.setState({
            QRcodeImage: record.result.url,
            ticker: record.result.ticket
        })
    }
    //展示添加新码的模态框
    setAddModaTrue() {
        this.setState({
            addNewCode: true
        })
    }
    //关闭添加新码的模态框
    setAddModaFalse() {
        this.setState({
            addNewCode: false
        })
    }
    //关闭详细模态框
    setDetailFalse() {
        this.setState({
            detailModal: false
        })
    }
    //展示详细模态框
    setDetailTrue() {
        this.setState({
            detailModal: true
        })
    }
    //勿删
    getApp(app) {
        this.setState({
            key: app.key
        }, () => {
        })
    }
    getStatus(status) {
        console.log('status',status)
        this.setState({
            status: status
        })
    }
    //a标签复制ticker
    getTicker() {
        let ticker = this.refs.ticker
        ticker.select();
        document.execCommand('Copy');
    }
    //a标签复制url
    getUrl() {
        let url = this.refs.url
        url.select();
        document.execCommand('Copy');
    }
    getPageNumber(e) {
        this.setState({
            pageNumber: e
        })
    }
    //表单提交
    handleSubmit(e) {
        console.log('执行了提交')
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('values',values)
            let name = values.name
            let params = {}
            //value ==1时为临时 value==2时为永久
            if (this.state.status == '2') {
                params.wechat = name
                params.status = '2'
                params.scene = values.key
                params.expire = 0
            } else {
                params.wechat = name
                params.scene = values.key
                params.expire = values.usefulTime
            }
            // request.post('http://account.hippokidcare.com/wechat/qrcode', params, true, false).then(res => {
            //     this.setAddModaFalse();
            //     Toast.loading('Loading...', 0, () => {
            //         console.log('加载中');
            //     });
            //     this.setState({
            //         QRcodeImage: params.resuslt.url,
            //         ticker: params.result.ticket
            //     }, () => {
            //         Toast.hide()
            //         this.setDetailTrue()
            //     })
            // }).catch(err => {
            //     console.log('err', err)
            // })
        });
    }
    render() {
        const { getFieldProps } = this.props.form;
        // const columns = [
        //     {
        //         title: '公众号',
        //         dataIndex: 'title',
        //         key: 'title',
        //         width: 150,
        //         render: (text, record) => (
        //             <span>
        //                 <span>{text.title}</span>
        //             </span>

        //         )
        //     },
        //     {
        //         title: '说明',
        //         dataIndex: 'notice',
        //         key: 'notice',
        //         width: 150,
        //         ...this.getColumnSearchProps('notice'),
        //     },
        //     {
        //         title: 'key',
        //         dataIndex: 'key',
        //         key: 'key',
        //         width: 150,
        //         ...this.getColumnSearchProps('key'),
        //     },
        //     {
        //         title: '状态',
        //         key: 'status',
        //         dataIndex: 'status',
        //         width: 150,
        //         render: (text, record) => {
        //             if (text == 1) {
        //                 return <span>有效</span>

        //             }
        //             return <span>无效</span>
        //         }

        //     },
        //     {
        //         title: 'no',
        //         key: 'no',
        //         dataIndex: 'no',
        //         className: index.cloum,
        //         width: 150,
        //     },
        //     {
        //         title: 'result',
        //         key: 'result',
        //         dataIndex: 'result',
        //         className: index.cloum,
        //         width: 150,
        //     },
        //     {
        //         title: '操作',
        //         key: 'operating',
        //         dataIndex: 'operating',
        //         width: 150,
        //         render: (text, record) => (
        //             <span>
        //                 <a onClick={this.showDetail.bind(this, record)}>详细</a>
        //                 <a>     </a>
        //                 <a>日志</a>
        //             </span>
        //         )
        //     }
        // ];
        let dataArray = []
        let QRcodes = this.state.QRcodes
        if (QRcodes != null && QRcodes != '') {
            for (let i = 0; i < QRcodes.length; i++) {
                let data = {}
                data.title = QRcodes[i].wechat
                data.notice = QRcodes[i].notice
                data.key = QRcodes[i].key
                data.status = QRcodes[i].status
                data.result = QRcodes[i].result
                dataArray.push(data)
            }

        }
        console.log('dataArray', dataArray)
        let addModalPickers = []
        let addModalPickersValue = []
        let optionArray = this.state.optionArray
        if (optionArray != '' && optionArray != null) {
            for (let i = 0; i < optionArray.length; i++) {
                let picker = {
                    label: optionArray[i].title,
                    value: optionArray[i].name
                }
                addModalPickersValue.push(optionArray[i].name)
                addModalPickers.push(picker)
            }
        }
        let effectiveStatus = [
            {
                label:'临时二维码',
                value: '1'
            },
            {
                label:'永久二维码',
                value: '2'
            }
        ]
        return (
            <div>
                <Modal
                    visible={this.state.addNewCode}
                    transparent
                    maskClosable={false}
                    onClose={this.setAddModaFalse.bind(this)}
                    footer={[{ text: '保存', onPress: () => { this.handleSubmit.bind(this) } }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <div style={{height:200}}>
                    <List>
                       
                        <Picker extra="请选择(可选)"
                            data={addModalPickers}
                            {...getFieldProps('name')}
                             cols={1} 
                            className="forss"
                        >
                            <List.Item arrow="horizontal">公众号</List.Item>
                        </Picker>
                        <InputItem
                            {...getFieldProps('key')}
                            type='text'
                            clear
                        >key</InputItem>
                        <Picker ref='pickerStatus' extra="请选择(可选)"
                            data={effectiveStatus}
                            {...getFieldProps('status')}
                             cols={1} 
                            className="forss"
                            onChange={this.getStatus.bind(this)}
                            value={this.state.status}
                        >
                            <List.Item arrow="horizontal">类型</List.Item>
                        </Picker>
                        {this.state.status == '1' ?
                            <InputItem
                                maxLength={2592000}
                                {...getFieldProps('usefulTime')}
                                clear
                                placeholder="输入有效时长"
                                ref={el => this.autoFocusInst = el}
                            >有效时长</InputItem>
                            : ''}
                    </List>
                    </div>
                </Modal>








                {/* <Modal
                    title="生成新码"
                    visible={this.state.addNewCode}
                    onClose={this.setAddModaFalse.bind(this)}
                    footer={[{ text: '保存', onPress: () => { this.handleSubmit.bind(this) } }]}
                >
                    <List>
                        <Picker extra="请选择(可选)"
                            data={addModalPickers}
                            {...getFieldProps('name')}
                        >
                            <List.Item arrow="horizontal">公众号</List.Item>
                        </Picker>
                        <InputItem
                            {...getFieldProps('key')}
                            type='text'
                            clear
                        >key</InputItem>
                        <Picker extra="请选择(可选)"
                            data={addModalPickers}
                            {...getFieldProps('status')}
                            onChange={this.getStatus.bind(this)}
                        >
                            <List.Item arrow="horizontal">类型</List.Item>
                        </Picker>
                        {this.state.status == '1' ?
                            <InputItem
                                maxLength={2592000}
                                {...getFieldProps('usefulTime')}
                                clear
                                placeholder="输入有效时长"
                                ref={el => this.autoFocusInst = el}
                            >有效时长</InputItem>
                            : ''}
                    </List>
                </Modal> */}
                {/* <Modal
                    title="详细"
                    visible={this.state.detailModal}
                    okText='ok'
                    onCancel={this.setDetailFalse.bind(this)}
                    cancelText='取消'
                    footer={null}>
                    <img src={'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' + this.state.ticker}></img>
                    <div></div>
                    <label>ticker</label>
                    <Input ref="ticker" value={this.state.ticker} /><a onClick={this.getTicker.bind(this)}>复制</a>
                    <div></div>
                    <label>url</label>
                    <Input ref='url' value={this.state.QRcodeImage} /><a onClick={this.getUrl.bind(this)}>复制</a>
                </Modal> */}
                <h3>二维码管理</h3>
                <div style={{ marginLeft: '2%', marginTop: '1%' }}> <Button type="primary" onClick={this.setAddModaTrue.bind(this)}>生成新码</Button></div>


                {dataArray != null && dataArray.length > 0 ?
                    <Descriptions
                        title="Responsive Descriptions"
                        bordered
                        column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
                        layout="vertical"
                    >
                        {console.log('dataArray[this.state.pageNumber-1].notice', dataArray[this.state.pageNumber - 1])}
                        <Descriptions.Item label="公众号" value={dataArray[this.state.pageNumber - 1].title.name}>{dataArray[this.state.pageNumber - 1].title.title}</Descriptions.Item>
                        <Descriptions.Item label="说明">{dataArray[this.state.pageNumber - 1].notice}</Descriptions.Item>
                        <Descriptions.Item label="key">{dataArray[this.state.pageNumber - 1].key}</Descriptions.Item>
                        <Descriptions.Item label="状态">{dataArray[this.state.pageNumber - 1].status == '1' ? '有效' : '无效'}</Descriptions.Item>
                        {/* <Descriptions.Item label="result">{dataArray[this.state.pageNumber-1].result}</Descriptions.Item> */}
                        <Descriptions.Item label="操作"><a >详细</a><a>日志</a></Descriptions.Item>
                    </Descriptions>

                    : ''}


                <Pagination total={dataArray.length}
                    className="custom-pagination-with-icon"
                    current={this.state.pageNumber}
                    locale={{
                        prevText: (<span className="arrow-align"><Icon type="left" />上一步</span>),
                        nextText: (<span className="arrow-align">下一步<Icon type="right" /></span>),
                    }}
                    onChange={this.getPageNumber.bind(this)}
                />






                {/* 
                <Table columns={columns} dataSource={dataArray != null && dataArray.length > 0 ? dataArray : ''} /> */}
            </div>
        )
    }
}
export default createForm()(WechatQRcode)
