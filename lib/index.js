var _reactNativeUniversal=require('react-native-universal');

var BlurView=function BlurView(){return null;};
var VibrancyView=function VibrancyView(){return null;};
if(_reactNativeUniversal.Platform.OS==='ios'){
BlurView=require('./BlurView');
VibrancyView=require('./VibrancyView');}


module.exports={BlurView:BlurView,VibrancyView:VibrancyView};