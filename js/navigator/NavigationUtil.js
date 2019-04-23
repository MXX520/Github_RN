// 全局导航跳转工具类
export default class NavigationUtil {
    //1.返回到上一页
    static resetToGoBack(navigation){
        navigation.goBack();
    }

    //重置到首页
    static resetToHomePage(params){
        const {navigation} = params;
        navigation.navigate('AppBottomNavigator');
    }
}