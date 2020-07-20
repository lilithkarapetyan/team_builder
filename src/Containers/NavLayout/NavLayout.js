import React, { Component } from 'react';

import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import Modal from '../../Components/UI/Modal/Modal';
import ContactUs from '../../Components/ContactUs/ContactUs';


class NavLayout extends Component {
    state = {
        showSideDrawer: false,
        showModal: false,
        searchText: '',
        navItems: [
            {
                name: "Topics",
                path: "/topics"
            },
            {
                name: "Projects",
                path: "/projects"
            },
            {
                name: "auth",
                path: "/auth"
            }]
    }


    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }
    contactUsHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: false,
                showModal: !prevState.showModal
            };
        });
    }

    onSearch = (inputTxt) => {
        this.setState({ searchText: inputTxt })
    }

    render() {
        return (
            <div style={{ padding: "60px 20px" }}>
                <Toolbar
                    opened={this.sideDrawerToggleHandler}
                    contactUsHandler={this.contactUsHandler}
                    navItems={this.state.navItems}
                    onSearch={this.onSearch} />
                <SideDrawer
                    navItems={this.state.navItems}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                    contactUsHandler={this.contactUsHandler} />
                <Modal
                    show={this.state.showModal}
                    clicked={this.contactUsHandler}>
                    <ContactUs />
                </Modal>
                <main>
                    {this.props.children}
                </main>

            </div>
        )
    }
}

export default NavLayout;