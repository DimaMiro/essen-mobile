import React, {Component} from 'react';
import {Image} from 'react-native';
import shorthash from 'shorthash';
import * as FileSystem from 'expo-file-system'

export default class CacheImage extends Component {
    constructor() {
        super()
        this.state = {
            source: null
        }
    }
    componentDidMount = async() => {
        const {uri} = this.props.source
        const name = shorthash.unique(uri)
        const path = `${FileSystem.cacheDirectory}${name}`
        const image = await FileSystem.getInfoAsync(path)
        if (image.exists){
            this.setState({
                source: {
                    uri: image.uri
                }
            })
            return
        } else {
            const newImage = await FileSystem.downloadAsync(uri, path)
            this.setState({
                source: {
                    uri: newImage.uri
                }
            })
            return
        }
        
    }
    
    render() {
        return(<Image style={this.props.style} source={this.state.source} onLoad={this.props.onLoad} />)
    }
}