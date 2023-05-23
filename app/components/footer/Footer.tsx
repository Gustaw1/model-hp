import React from 'react';
import classes from './footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.wrapper}>
                <div className={classes.col}>
                    <h2>About the App</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </p>
                </div>
                <div className={classes.col}>
                    <h2>Contacts</h2>
                    <span>Phone: +48 123 456 789</span>
                    <span>Youtube: www.youtube.com/test</span>
                    <span>Whatsup: +48 123 456 789</span>
                </div>
                <div className={classes.col}>
                    <h2>Location</h2>
                    <span>Continent: Europe</span>
                    <span>Country: Poland</span>
                    <span>City: Gdańsk</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;