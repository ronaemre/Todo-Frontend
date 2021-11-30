import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Navbar, FormControl, Form } from 'react-bootstrap'
import Button from '@mui/material/Button';
/* import { Fingerprint } from '@material-ui/icons';
import IconButton from '@mui/material/IconButton'; */
import 'bootstrap/dist/css/bootstrap.min.css';



const useStyles = makeStyles((theme) => ({
    SearchInput: {

    },
    searchButton: {

        display: 'flex',

    },
    form: {
        marginRight: '480px',
        display: 'flex',
        alignItems: 'center',
    },
    enterenceDiv: {
        marginRight: '-200px'
    },
    navbar: {
        backgroundColor: '#EF476F'
    }

}));
export default function WebNavbar() {
    const classes = useStyles();
    return (
        <div>
            <Navbar variant="dark" className={classes.navbar}>
                <Container>
                    <Navbar.Brand href="#home">TODO APPLICATION</Navbar.Brand>
                    <Form className={classes.form}>
                        <FormControl
                            className={classes.SearchInput}
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        {/* //SearchBar aktif değil */}
                        <Button className={classes.searchButton} variant="contained">Search</Button>
                    </Form>
                    <div data-testid="Add-user-button">
                        <Button
                            id="Add-character-button"
                            type="button"
                            className="btn btn-md btn-danger"
                            style={{ float: "right" }}
                        >
                            Add TODO
                        </Button>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}
