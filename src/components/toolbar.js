import React from 'react';
import '../css/toolbar.css';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

var showCreateDelete = function (selectedMenuItem) {
    if (selectedMenuItem != 0 && selectedMenuItem != 4)
        return true;
    else
        return false;
};

var showImportExportSettings = function (selectedMenuItem) {
    if (selectedMenuItem == 4)
        return true;
    else
        return false;
};

const ToolBar = (props) => {

    return (
        <Toolbar>
            <ToolbarGroup firstChild={true}>
                <DropDownMenu value={props.selectedMenuItem}
                    onChange={props.handleChange}
                    >
                    <MenuItem value={0} primaryText="Home" />
                    <MenuItem value={1} primaryText="Plans" />
                    <MenuItem value={2} primaryText="Plan Datas" />
                    <MenuItem value={3} primaryText="Value Series" />
                    <MenuItem value={4} primaryText="Settings" />
                </DropDownMenu>
            </ToolbarGroup>
            <ToolbarGroup>
                <ToolbarTitle text="Options" />
                <FontIcon className="muidocs-icon-custom-sort" />
                <ToolbarSeparator />
                { showCreateDelete(props.selectedMenuItem) ? <RaisedButton id="raisedButtonCreate" label="Create" primary={true} /> : null}
                { showCreateDelete(props.selectedMenuItem) ? <RaisedButton id="raisedButtonDelete" label="Delete" secondary={true} disabled={true} /> : null}
                { showImportExportSettings(props.selectedMenuItem) ? <RaisedButton id="raisedButtonImportSettings" label="Import Settings" primary={true} /> : null}
                { showImportExportSettings(props.selectedMenuItem) ? <RaisedButton id="raisedButtonExportSettings" label="Export Settings" secondary={true} /> : null}
            </ToolbarGroup>
        </Toolbar>
    );
};

export default ToolBar;