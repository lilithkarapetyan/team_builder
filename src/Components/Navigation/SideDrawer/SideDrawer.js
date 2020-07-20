import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import BackDrop from '../../../Components/UI/Backdrop/Backdrop';
import ContactUsButton from '../../UI/Button/Default';


const SideDrawer = (props) => (
    <>
        <BackDrop show={props.open} clicked={props.closed} />
        <div className={[classes.SideDrawer, props.open ? classes.Open : classes.Close].join(" ")}>
            <nav>
                <NavigationItems navItems={props.navItems} closed={props.closed}/>
            </nav>
            <ContactUsButton clicked={props.contactUsHandler} >Contact Us</ContactUsButton>
        </div>
    </>
);

export default SideDrawer;