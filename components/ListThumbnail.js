import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import Colors from '../constants/Colors';

function ListThumbnail(props){

    // const list = {
    //   id: 0,
    //   name: "Fdfd",
    //   dishes: [
    //     {
    //       name: "First",
    //       id: 1,
    //       imageurl: "https://firebasestorage.googleapis.com/v0/b/essen-653ac.appspot.com/o/recipe-photos%2F1.jpg?alt=media&token=9422a275-b7f7-405d-8136-4387807dce90",
    //     },
    //     {
    //       name: "Second",
    //       id: 2,
    //       imageurl: "https://firebasestorage.googleapis.com/v0/b/essen-653ac.appspot.com/o/recipe-photos%2F2.jpg?alt=media&token=c4055d89-44cf-401d-9fd2-774d4641ff69",
    //     },
    //     {
    //       name: "Third",
    //       id: 3,
    //       imageurl: "https://firebasestorage.googleapis.com/v0/b/essen-653ac.appspot.com/o/recipe-photos%2F3.jpg?alt=media&token=9a5c69ae-d7bc-42a6-9e17-4ad595ea6360",
    //     },
    //     {
    //       name: "Fourth",
    //       id: 4,
    //       imageurl: "https://firebasestorage.googleapis.com/v0/b/essen-653ac.appspot.com/o/recipe-photos%2F4.jpg?alt=media&token=044141cd-f15b-49b5-bbdc-11fb92fffe7c",
    //     },
    //   ],
    //   ingredients: []
    // }
    const list = props.list

    let listBg
    if (props.isActive){
      listBg = Colors.cardColors[Math.floor(Math.random()*Colors.cardColors.length)]
    } else {
      listBg = 'white'
    }

    let dishImageContainerLayout
    if (list.dishes.length == 0) {
      <View style={styles.dishImageContainerHalf}/>
    } else if (list.dishes.length < 3) {
      dishImageContainerLayout = (
      <View style={styles.dishImageContainerHalf}>
          {list.dishes.map((dish) => {
            return <Image key={dish.id} style={styles.dishImage} source={{uri: dish['image-url']}}></Image>
          })}
      </View>
      )
    } else {
      dishImageContainerLayout = (
      <View style={styles.dishImageContainerFull}>
          <Image style={styles.dishImage} source={{uri: list.dishes[0]['image-url']}}></Image>
          <Image style={styles.dishImage} source={{uri: list.dishes[1]['image-url']}}></Image>
          <Image style={styles.dishImage} source={{uri: list.dishes[2]['image-url']}}></Image>
      </View>
      )
    }

    return (
      <TouchableOpacity onPress={props.onPressAction}>
        <View style={[styles.listContainerOuter, {marginBottom: props.marginBottom}]}>
            <View style={[styles.listContainerInner, {backgroundColor: listBg}]}>
                <View style={styles.listTitleContainer}>
                    <Text style={styles.listTitle}>{list.name}</Text>
                    <Text style={styles.listSubitle}>{list.dishes.length} dishes · {Object.keys(list.ingredients).length} ingredients</Text>
                </View>
                {dishImageContainerLayout}
            </View>
        </View>
      </TouchableOpacity>
    );
};
export default ListThumbnail

const styles = StyleSheet.create({
    listContainerOuter: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 20,
    },
    listContainerInner: {
      flexDirection: 'row',
      overflow: 'hidden',
      borderRadius: 20,
      paddingLeft: 16,
      paddingRight: 8,
      paddingTop: 16,
      paddingBottom: 16,
    },
    listTitleContainer: {
      flexDirection: 'column',
      flexBasis: "45%"
    },
    listTitle: {
      textAlign: 'left',
      fontSize: 18,
      color: 'black',
      fontFamily: "montserrat"
    },
    listSubitle: {
      marginTop: 4,
      textAlign: 'left',
      fontSize: 13,
      color: 'rgba(0,0,0,0.4)',
    },
    dishImageContainerFull: {
        flexDirection: 'row',
    },

    dishImageContainerHalf:{
      flexBasis: "55%",
      flexDirection: 'row-reverse',
    },

    dishImage: {
        marginRight: 8,
        borderRadius: 10,
        width: 68,
        height: 68,
        backgroundColor: 'gray',
    },
})