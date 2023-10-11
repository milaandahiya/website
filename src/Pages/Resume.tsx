import "../Styles/Home.css";
import SystemUpdateIcon from "@material-ui/icons/SystemUpdate";
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
            <div className="container">
                    <ThemeProvider theme={theme}>
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                            startIcon={<SystemUpdateIcon/>}
                            href="Milaan_Dahiya_resume.pdf"
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
        </div>
    );
}

export default Resume;