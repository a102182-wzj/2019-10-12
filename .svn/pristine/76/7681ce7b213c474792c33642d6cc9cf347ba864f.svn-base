import request from '../../../utils/request'

export default {
    namespace: 'onlineDoctor',

    state: {
        messageDetail: []
    },
    reducers: {
        saveDetail(state, { payload: { data } }) {
            return { ...state, messageDetail: data }
        }
    },
    effects: {
        *messageDetail({ payload: { order } }, { call, put }) {
            const data = yield call(() => {
                return request.get("https://api.account.hippokidcare.com/doctor/order/service/" + order, {})
            })
            yield put({ type: 'saveDetail', payload: { data: data.data } })
        }
    }
}