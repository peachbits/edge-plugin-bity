// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import { StartScene } from '../scenes/StartScene.js'
import { THANK_YOU_ROUTE } from '../constants/index'
import { connect } from 'react-redux'
import { initInfo } from '../actions/indexActions'

const mapStateToProps = (state: State) => {
  return {
    accountStatus: state.Bity.status,
    poweredBy: {
      email: 'support@wyre.com',
      logo: require('../assets/poweredByLogo.png')
    }
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (history: Object) => {
    history.push(THANK_YOU_ROUTE)
  },
  initInfo: () => dispatch(initInfo())
})
export const StartSceneConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScene)
