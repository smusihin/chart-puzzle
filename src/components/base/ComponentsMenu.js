import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from './MenuItem'

const styles = theme => ({    
    tabRoot: {
      minWidth: 10,
    },
  });




class ComponentsMenu extends React.Component{ 

    state = {
        menu:0
    };


    renderMenu = (items)=>{
        return <List>
        {items.map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <MenuItem elemType = {text}/>
            {/* <ListItemText primary={text} /> */}
          </ListItem>
        ))}
      </List>
    }

    handleChange = (event, menu) => {
        this.setState({ menu});
      };
    

    render = () =>{
        const { classes } = this.props;
        const { menu } = this.state;

        return <div>
                <Tabs onChange = {this.handleChange} value = {menu}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary">
                    <Tab label="CHARTS" classes={{ root: classes.tabRoot }}/>
                    <Tab label="LAYOUT" classes={{ root: classes.tabRoot }}/>                    
                </Tabs>
                {menu === 1 && this.renderMenu(['Column', 'Button', 'Dropdown'])}
                {menu === 0 && this.renderMenu(['Scatter', 'Bar Chart', 'Pie Chart'])}
              </div>
    }
}

export default withStyles(styles)(ComponentsMenu)

