import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import '../css/category.css';



const Category = (props) => (
    <div>
        {/* Load the folder root from here.
            If the id is null then use the default Plan categories as root.
            <div>Id={props.params.id}</div>*/}
        <List>
            <Subheader className="categorySubheader" inset={true}>Folders</Subheader>
            <ListItem className="categoryListItem"
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<ActionInfo />}
                primaryText="2016"
                secondaryText="Jan 9, 2016"
                />
            <ListItem className="categoryListItem"
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<ActionInfo />}
                primaryText="2015"
                secondaryText="Jan 17, 2015"
                />
            <ListItem className="categoryListItem"
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<ActionInfo />}
                primaryText="2014"
                secondaryText="Jan 28, 2014"
                />
        </List>
        <Divider inset={true} />
        <List>
            <Subheader className="categorySubheader" inset={true}>Files</Subheader>
            <ListItem className="categoryListItem"
                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
                rightIcon={<ActionInfo />}
                primaryText="Plan pre 2016"
                secondaryText="Jan 20, 2016"
                />
            <ListItem className="categoryListItem"
                leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
                rightIcon={<ActionInfo />}
                primaryText="Plan pre 2017"
                secondaryText="Jan 30, 2016"
                />
        </List>
    </div>
);

export default Category;