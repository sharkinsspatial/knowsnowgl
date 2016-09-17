import React from 'react'
import mapboxgl from 'mapbox-gl'

const ReportMap = React.createClass({
    componentDidMount() {
        mapboxgl.accessToken = process.env.MAPBOX_TOKEN

        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9'
        })
        const navigation = new mapboxgl.Navigation()
        this.map.addControl(navigation)
        this.map.resize()
    },
    render() {
        const mapStyle = {
            position: 'absolute',
            top: 56,
            bottom: 0,
            width: '75%'
        }
        return (
            <div id="map" style={mapStyle} />
        )
    }
})
export default ReportMap
