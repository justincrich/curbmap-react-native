import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import MenuIcon from '../MenuIcon'
import Map from '../components/Map'

const styles = StyleSheet.create({
  full: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})

class MapContainer extends Component {
  static navigationOptions = {
    drawerLabel: 'Map Home',
    drawerIcon: ({ tintColor }) => <Image style={[styles.icon, { tintColor }]} />,
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { navigate } = this.props.navigation
    const map = <Map {...this.props} />
    return (
      <View style={styles.full}>
        <MenuIcon onPress={() => navigate('DrawerOpen')} />
        {map}
      </View>
    )
  }
}

export default MapContainer
