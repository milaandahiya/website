import React from 'react';
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate';
import {Button} from "@material-ui/core";

function Resume() {
    return (
        <object
            data="MilaanDahiyaResume.pdf"
            type="application/pdf"
            height="1150px"
            width="100%"
        >
            <div className="container">
                <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    startIcon={<SystemUpdateIcon/>}
                    href="MilaanDahiyaResume.pdf"
                >
                    Download
                </Button>
                <div className="shape-blob"/>
                <div className="shape-blob two"/>
                <div className="shape-blob three"/>
                <div className="shape-blob four"/>
            </div>
        </object>
    );
}

export default Resume;