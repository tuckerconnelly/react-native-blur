import { Platform } from 'react-native-universal'

let BlurView = () => null
let VibrancyView = () => null
if (Platform.OS === 'ios') {
  BlurView = require('./BlurView')
  VibrancyView = require('./VibrancyView')
}

module.exports = { BlurView, VibrancyView }
