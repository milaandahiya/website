import React from 'react';
import "../Styles/Home.css";
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate';
import {Button, createTheme, ThemeProvider} from "@material-ui/core";

function Resume() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#BF5700'
            }
        },
    });

    return (
        <div style={{backgroundColor: "#525659"}}>
            <iframe
                title="resume"
                src="MilaanDahiyaResume.pdf"
                height="1150px"
                width="100%"
                frameBorder="0"
            >
                <div className="container">
                    <ThemeProvider theme={theme}>
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                            startIcon={<SystemUpdateIcon/>}
                            href="MilaanDahiyaResume.pdf"
                            className="download-button"
                        >
                            Download
                        </Button>
                    </ThemeProvider>
                    <div className="shape-blob"/>
                    <div className="shape-blob two"/>
                    <div className="shape-blob three"/>
                    <div className="shape-blob four"/>
                </div>
            </iframe>
        </div>
    );
}

export default Resume;