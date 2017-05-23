import React from 'react';
import { Menu, Grid, Header } from 'semantic-ui-react';

import SymSearch from '../components/search.component';
import SymLogo from '../components/logo.component';
import SymUserAvatar from '../components/avatar.component';
import SymMenu from '../components/menu.component';

import CommonStyles from '../constants/common.styles';

const MenuItems = [
    { displayName: 'Fashion', categoryOptions: [{displayName: 'Footwear'}, {displayName: 'Topwear'}, {displayName: 'Bottomwear'}]},
    { displayName: 'Electronics',  categoryOptions: [{displayName: 'Mobiles'}, {displayName: 'Tablets'}, {displayName: 'Laptops'}]},
    { displayName: 'Books',  categoryOptions: [{displayName: 'Novels'}, {displayName: 'Magzines'}, {displayName: 'Academics'}]}
];

export default class SymHeader extends React.Component {
    state = {};

    render() {
        console.log('Common Styles --> ', CommonStyles);
        const { activeItem } = this.state;
        return (
            <Grid style={CommonStyles.header}>
                <Grid.Row columns={3}>
                    <Grid.Column width={1}>  <SymLogo />   </Grid.Column>
                    <Grid.Column width={13}> <SymSearch /> </Grid.Column>
                    <Grid.Column width={2}>
                        <SymUserAvatar user={this.props.user}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column width={14}> <SymMenu menuItems={MenuItems}> </SymMenu> </Grid.Column>
                </Grid.Row>
            </Grid> 
        );
    }
}