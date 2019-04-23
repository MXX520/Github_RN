import React from 'react'
import {Button,Platform,ScrollView,SafeAreaView} from 'react-native'
import {createStackNavigator,createBottomTabNavigator,createMaterialTopTabNavigator, createDrawerNavigator, DrawerItems, createSwitchNavigator} from 'react-navigation'

//欢迎页，首页，详情页
import WelcomePage from '../page/WelcomePage'
import HomePage from '../page/HomePage'
import DetailPage from '../page/DetailPage'

//底部导航页
import PopularPage from "../page/PopularPage";
import TrendingPage from "../page/TrendingPage";
import FavoritePage from "../page/FavoritePage";
import MyPage from "../page/MyPage";

//icon
import Icon from 'react-native-vector-icons/Ionicons'

//底部导航
const AppBottomNavigator = createBottomTabNavigator({
// const BottomTabBar = createBottomTabNavigator({
    PopularPage:{
        screen:PopularPage,
        navigationOptions:{
            tabBarLabel:'最热',
            tabBarIcon:({tintColor,focused})=>(
                <Icon 
                    name={'logo-designernews'}
                    size={20}
                    style={{color:tintColor}}
                />
            )
        }
    },
    TrendingPage:{
        screen:TrendingPage,
        navigationOptions:{
            tabBarLabel:'趋势',
            tabBarIcon:({tintColor,focused})=>(
                <Icon 
                    name={'ios-trending-up'}
                    size={20}
                    style={{color:tintColor}}
                />
            )
        }
    },
    FavoritePage:{
        screen:FavoritePage,
        navigationOptions:{
            tabBarLabel:'收藏',
            tabBarIcon:({tintColor,focused})=>(
                <Icon 
                    name={'logo-buffer'}
                    size={20}
                    style={{color:tintColor}}
                />
            )
        }
    },
    MyPage:{
        screen:MyPage,
        navigationOptions:{
            tabBarLabel:'我的',
            tabBarIcon:({tintColor,focused})=>(
                <Icon 
                    name={'ios-contact'}
                    size={20}
                    style={{color:tintColor}}
                />
            )
        }
    }
})

const InitNavigator = createStackNavigator({
    WelcomePage:{
        screen:WelcomePage,
        navigationOptions:{
            header:null //隐藏navigator Bar
        }
    }
})

const MainNavigator = createStackNavigator({
    HomePage:{
        screen:HomePage,
        navigationOptions:{
            title:"首页"
        }
    },
    DetailPage:{
        screen:DetailPage,
        navigationOptions:{
            title:"详情页"
        }
    },
    AppBottomNavigator:{
        screen:AppBottomNavigator,
        navigationOptions:{
            header:null
        }
    }
})



export default createSwitchNavigator({
    Auth:InitNavigator,
    App:MainNavigator
},{
    navigationOption:{
        header:null
    },
    initialRouteName:'Auth'
})