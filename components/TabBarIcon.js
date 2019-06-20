// import React from 'react';
// import { Ionicons } from '@expo/vector-icons';

// import Colors from '../constants/Colors';

// export default function TabBarIcon(props) {
//   return (
//     <Ionicons
//       name={props.name}
//       size={26}
//       style={{ marginBottom: -3 }}
//       color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
//     />
//   );
// }
import React from 'react';
import Colors from '../constants/Colors';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

export default function TabBarIcon(props) {
  return (
    <Icon
      name={props.name}
      size={26}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}