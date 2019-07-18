import {AsyncStorage} from 'react-native';

export const loadState = async() => {
    try {
        let result
        await AsyncStorage.getItem('listState').then((value)=>{
            result = JSON.parse(value)
        })
        return result
    } catch (error) {
      console.log(error)
      return undefined
    }
  }
  
  export const saveState = (state) => {
    try {
    const serializedState = JSON.stringify(state)
    AsyncStorage.setItem('listState', serializedState)
    } catch (error) {
      console.log(error)
    }
  }
