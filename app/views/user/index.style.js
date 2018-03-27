import {StyleSheet} from 'react-native';

import Util from '../../utils';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
    },
    user:{
        width:Util.screen.width
    },
    userItem:{
        width:Util.screen.width,
        height:50,
        flexDirection:'row',
        alignItems:'center',
    },
    iconStyle:{
        marginLeft:10
    },
    userText:{
        flex:1,
        height:50,
        marginLeft:10,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:Util.pixel,
        borderColor:'#ddd'
    },
    textStyle:{
        fontSize:15,
        color:'#333'
    },
    numStyle:{
        fontSize:12,
        color:'#999',
        marginLeft:5
    },
    userSong:{
        width:Util.screen.width
    },
    songTop:{
        width:Util.screen.width,
        backgroundColor:'#f5f5f5',
        height:30,
        justifyContent:'center'
    },
    songTopTitle:{
        fontSize:14,
        color:'#333',
        marginLeft:10
    },
    songItem:{
        width:Util.screen.width,
        height:70,
        flexDirection:'row',
        alignItems:'center',
    },
    songImg:{
        width:50,
        height:50,
        marginLeft:10
    },
    song:{
        marginLeft:10,
        flex:1,
        height:70,
        borderColor:'#ddd',
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:Util.pixel
    },
    songLeft:{
        flex:1,
    },
    songTitle:{
        fontSize:14,
        color:'#333'
    },
    songNum:{
        fontSize:12,
        color:'#999'
    },
    iconStyle2:{
        marginRight:20
    }
});