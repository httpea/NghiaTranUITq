import React from 'react';
import { connect } from 'react-redux'
import { MapMode } from '../constants'

export const MapSelection = React.createClass({
  propTypes: {
    mapMode: React.PropTypes.string,

    // Weird why dispatch props didn't working
    // Temporary solution
    selectModeFunc: React.PropTypes.func,
    stopTimerFunc: React.PropTypes.func,
  },

  _handleChangeChk(evt, mode) {
    const { mapMode } = this.props
    if (mode === mapMode) {
      this.props.selectModeFunc(MapMode.NONE)
      return
    }
    this.props.selectModeFunc(mode)
  },

  render() {
    const { mapMode, stopTimerFunc } = this.props
    console.log("render MapSelection = ", mapMode)
    return (
      <div id="overlay-map-control">
        <div className='title-label'>Mode Selection</div>
        <div className='selection'>
          <input type="checkbox" checked={mapMode === MapMode.TREES} onChange={(evt)=>{this._handleChangeChk(evt, MapMode.TREES)}}/>
          Trees in New York
        </div>
        <div className='selection'>
          <input type="checkbox" checked={mapMode === MapMode.TREES_HEATMAP} onChange={(evt)=>{this._handleChangeChk(evt, MapMode.TREES_HEATMAP)}}/>
          Trees in New York (HeatMap)
        </div>
        <div className='selection'>
          <input type="checkbox" checked={mapMode === MapMode.FLIGHT} onChange={(evt)=>{this._handleChangeChk(evt, MapMode.FLIGHT)}}/>
          Flight Record
        </div>
        <div className='selection'>
          <input type="checkbox" checked={mapMode === MapMode.FLIGHT_GLSL} onChange={(evt)=>{this._handleChangeChk(evt, MapMode.FLIGHT_GLSL)}}/>
          Flight Record (GLSL)
          <button onClick={stopTimerFunc}>Stop timer</button>
        </div>
      </div>
    )
  },
})
