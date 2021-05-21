import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../Screens/Movies';
import TV from '../Screens/TV';
import Search from '../Screens/Search';
import Favs from '../Screens/Favs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

//니꼬의 코드 참고
//const getHeaderName = (route) => route?.state?.routeNames[route.state.index] || 'Movies'; //이 코드 역시 warning issue가 존재함
//아마도 니꼬가 손수 만들었던 getHeaderName가 이후 바로 사용이 가능한 getFocusedRouteNameFromRoute으로 만들어진듯함.

const Tabs = createBottomTabNavigator();
// #region Access Issue
// Accessing the 'state' property of the 'route' object is not supported.
// If you want to get the focused route name,
// use the 'getFocusedRouteNameFromRoute' helper
// instead: https://reactnavigation.org/docs/screen-options-resolution/#setting-parent-screen-options-based-on-child-navigators-stat
// #endregion

export default ({ navigation, route }) => {
  //useLayouteffect: 모든 그래픽이 렌더링된 후 실행된다. (useEffect와의 유일한 차이점)
  useLayoutEffect(() => {
    // solution of access issue -> route로 바로 접근 하지 말고, getFocusedRouteNameFromRoute를 활용해서 접근.
    // || 'Movie'의 사용 이유: 가장 초기화면이 movie로 뜨게되는데, route change issue가 없기 때문에 undefined로 올라옴.
    // 따라서 초기 진입시 header의 이름을 movies로 설정해주기 위함.
    const routeName = getFocusedRouteNameFromRoute(route) || 'Movies';
    //Stack navigation(부모)-Tab navigation(자식)관계에서 자식 네비게이션이 직접 부모의 네비게이션 헤더를 변경할 수 있는 옵션(setOptions)이 존재함.
    navigation.setOptions({
      title: routeName,
      // headerStyle: {
      //   backgroundColor: 'tomato',
      // },
    });
    console.log(routeName); //디버깅용. 콘솔창에 로그 출력
  }, [route]);

  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Movies' component={Movies} />
      <Tabs.Screen name='TV' component={TV} />
      <Tabs.Screen name='Search' component={Search} />
      <Tabs.Screen name='Favorites' component={Favs} />
    </Tabs.Navigator>
  );
};
