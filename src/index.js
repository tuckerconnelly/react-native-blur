import { Platform } from 'react-native-universal'

let BlurView = () => null
let VibrancyView = () => null

switch (Platform.OS) {
  case 'ios':
    BlurView = require('./BlurView.ios')
    VibrancyView = require('./VibrancyView.ios')
    break
  case 'android':
    BlurView = require('./BlurView.android')
    VibrancyView = require('./VibrancyView.android')
    break
}

module.exports = { BlurView, VibrancyView }
