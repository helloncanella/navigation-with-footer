import React from 'react';
import { StackNavigator } from 'react-navigation';
import Restaurant from './screens/Restaurant';
import Menu from './screens/Menu';
import Home from './index';

export const restaurantStack = StackNavigator({ 
  Restaurant: { screen: Restaurant },
  Menu: { screen: Menu }
});
