import React from 'react';
import '../Styles/Home.css';
import {Button, Grid, createTheme, ThemeProvider} from "@material-ui/core";
import DescriptionIcon from '@material-ui/icons/Description';
import {useHistory} from "react-router-dom";

function Home() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#BF5700'
            }
        },
    });
    const history = useHistory();

    return (
        <div className="container">
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <h1 className="name">Milaan Dahiya</h1>
                    <div className="shape-blob"/>
                    <div className="shape-blob two"/>
                    <div className="shape-blob three"/>
                    <div className="shape-blob four"/>
                </Grid>
                <Grid item xs={12}>
                    <ThemeProvider theme={theme}>
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                            startIcon={<DescriptionIcon />}
                            onClick={() => history.push("/resume")}
                        >
                            Resume
                        </Button>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;