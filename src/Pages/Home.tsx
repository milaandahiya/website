import React from "react";
import "../Styles/Home.css";
import {Button, Grid, createTheme, ThemeProvider} from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
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
                <ThemeProvider theme={theme}>
                    <Grid item xs = {12}>
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                            style={{marginRight: '40px', marginLeft: '40px', marginTop: '20px', marginBottom: '20px'}}
                            startIcon={<DescriptionIcon />}
                            onClick={() => history.push("/resume")}
                        >
                            Resume
                        </Button>
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                            style={{marginRight: '40px', marginLeft: '40px', marginTop: '20px', marginBottom: '20px'}}
                            startIcon={<GitHubIcon />}
                            onClick={() => window.location.href = "https://github.com/milaandahiya"}
                        >
                            GitHub
                        </Button>
                    </Grid>
                </ThemeProvider>
            </Grid>
        </div>
    );
}

export default Home;