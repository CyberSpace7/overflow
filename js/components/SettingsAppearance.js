// components/Home.js
import React from 'react';
let Paper = require('material-ui/lib/paper');
let Tabs = require('material-ui/lib/tabs');
let Tab = require('material-ui/lib/tabs/tab');
let Avatar = require('material-ui/lib/avatar');
let DropDownMenu = require('material-ui/lib/drop-down-menu');
let RaisedButton = require('material-ui/lib/raised-button');
let FlatButton = require('material-ui/lib/flat-button');
let Checkbox = require('material-ui/lib/checkbox');
let RadioButton = require('material-ui/lib/radio-button');
let RadioButtonGroup = require('material-ui/lib/radio-button-group');
let Toggle = require('material-ui/lib/toggle');
let Dialog = require('material-ui/lib/dialog');
let Snackbar = require('material-ui/lib/snackbar');
let TextField = require('material-ui/lib/text-field');
let DatePicker = require('material-ui/lib/date-picker/date-picker');
let Slider = require('material-ui/lib/slider');
let Colors = require('material-ui/lib/styles/colors');
let ColorsPicker = require('react-colors-picker');
import FontIcon from 'material-ui/lib/font-icon';

let optionsThemes = [
   { payload: '1', text: 'Light (Default)' },
   { payload: '2', text: 'Dark' },
   { payload: '3', text: 'Awake' },
   { payload: '4', text: 'Neon Nights' },
];

let optionsTimeFormat = [
   { payload: '1', text: '12/31/2016 (Default)' },
   { payload: '2', text: '31/12/2016' },
   { payload: '3', text: '2016/12/31' },
   { payload: '4', text: '2016/31/12' },
];

function changeHandler (colors) {
  console.log(colors);
}

class SettingsAppearance extends React.Component {
  render() {
    return (
      <Paper zDepth={1} className="page settings">
        <div className="contents appearance">
          <div className="cols">
            <h2>Appearance</h2>
            <div className="left">
              <h3>Theme</h3>
              <DropDownMenu menuItems={optionsThemes} /><br />
              <h3>Text Size</h3>
              <h4>Global</h4>
              <div className="settings-field-row">
                <span>Text</span>
                <div className="settings-slider">
                  <Slider name="slider2" defaultValue={0.50} step={0.25} />
                </div>
                </div>

              <div className="cols">
                <div className="left">
                  <span>Text</span>
                </div>
                <div className="right">
                  <div className="settings-slider">
                    <Slider name="slider2" defaultValue={0.50} step={0.25} />
                  </div>
                </div>
              </div>
              <h4>Articles</h4>
              <span>Text</span>
              <div className="settings-slider">
                <Slider name="slider2" defaultValue={0.50} step={0.25} />
                <Checkbox
                  name="checkboxName1"
                  value="checkboxValue1"
                  label="Condensed"/>
              </div>
              <span>Titles</span>
              <div className="settings-slider">
                <Slider name="slider2" defaultValue={0.50} step={0.25} />
                <Checkbox
                  name="checkboxName1"
                  value="checkboxValue1"
                  label="Bold"/>
                <Checkbox
                  name="checkboxName1"
                  value="checkboxValue1"
                  label="Condensed"/>
              </div>
              <span>Subtitles</span>
              <div className="settings-slider">
                <Slider name="slider2" defaultValue={0.50} step={0.25} />
              </div>
              <h4>Lists</h4>
              <span>Titles</span>
              <div className="settings-slider">
                <Slider name="slider2" defaultValue={0.50} step={0.25} />
                <Checkbox
                  name="checkboxName1"
                  value="checkboxValue1"
                  label="Bold"/>
                <Checkbox
                  name="checkboxName1"
                  value="checkboxValue1"
                  label="Condensed"/>
              </div>
              <span>Subtitles and Metadata</span>
              <div className="settings-slider">
                <Slider name="slider2" defaultValue={0.50} step={0.25} />
              </div>
              <span>Preview Text</span>
              <div className="settings-slider">
                <Slider name="slider2" defaultValue={0.50} step={0.25} />
                <Checkbox
                  name="checkboxName1"
                  value="checkboxValue1"
                  label="Condensed"/>
              </div>
            </div>
            <div className="right">
            <h3>Options</h3>
              <div className="settings-field-row">
                <span>Primary Color</span>
                  <ColorsPicker
                      animation="slide-down"
                      defaultColor={'#36c'}
                      onChange={changeHandler}
                      trigger={<span className='react-colorpicker-trigger align-right'></span>}
                    />
                </div>
                <div className="settings-field-row">
                  <span>Secondary Color</span>
                    <ColorsPicker
                        animation="slide-down"
                        defaultColor={'#36c'}
                        onChange={changeHandler}
                        trigger={<span className='react-colorpicker-trigger align-right'></span>}
                      />
                  </div>
                  <div className="settings-field-row">
                    <span>Primary Text Color</span>
                      <ColorsPicker
                          animation="slide-down"
                          defaultColor={'#36c'}
                          onChange={changeHandler}
                          trigger={<span className='react-colorpicker-trigger align-right'></span>}
                        />
                    </div>
                    <div className="settings-field-row">
                      <span>Secondary Text Color</span>
                        <ColorsPicker
                            animation="slide-down"
                            defaultColor={'#36c'}
                            onChange={changeHandler}
                            trigger={<span className='react-colorpicker-trigger align-right'></span>}
                          />
                      </div>
                <h3>Background</h3>
                    <Checkbox
                      name="checkboxName1"
                      value="checkboxValue1"
                      label="Solid Color"
                      style={{marginBottom:22}}/>
                      <div className="settings-field-row">
                        <span>Color</span>
                          <ColorsPicker
                              animation="slide-down"
                              defaultColor={'#36c'}
                              onChange={changeHandler}
                              trigger={<span className='react-colorpicker-trigger align-right'></span>}
                            />
                        </div>
                      <Checkbox
                        name="checkboxName1"
                        value="checkboxValue1"
                        label="Gradient"
                        style={{marginBottom:16}}/>
                        <div className="settings-field-row">
                          <span>Color 1</span>
                            <ColorsPicker
                                animation="slide-down"
                                defaultColor={'#36c'}
                                onChange={changeHandler}
                                trigger={<span className='react-colorpicker-trigger align-right'></span>}
                              />
                          </div>
                          <div className="settings-field-row">
                            <span>Color 2</span>
                              <ColorsPicker
                                  animation="slide-down"
                                  defaultColor={'#36c'}
                                  onChange={changeHandler}
                                  trigger={<span className='react-colorpicker-trigger align-right'></span>}
                                />
                            </div>
                      <Checkbox
                        name="checkboxName1"
                        value="checkboxValue1"
                        label="Image"
                        style={{marginBottom:16}}/>
                        <div className="settings-bg-img-preview">
                          <div className="image"></div>
                        </div>
                    <TextField hintText="Image URL" className="settings-field"/><br />
                    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                      <RadioButton
                        value="light"
                        label="Scale"
                        style={{marginBottom:16}} />
                      <RadioButton
                        value="not_light"
                        label="Fill"
                        style={{marginBottom:16}}/>
                      <RadioButton
                        value="ludicrous"
                        label="Stretch"
                        style={{marginBottom:16}}/>
                    </RadioButtonGroup>
            </div>
            <div className="savebar">
              <RaisedButton label="Cancel" />
              <RaisedButton label="Save" secondary={true} />
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

export default SettingsAppearance;
