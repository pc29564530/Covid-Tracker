import React from 'react';
import {Card,CardContent,Typography} from '@material-ui/core';

function InfoBox({total,cases,title,active, ...props}) {
    return (
        <Card 
          onClick={props.onClick}
         className={`infobox ${active && "Infobox--selected"} `}>
          
           <CardContent>
        <Typography color="textSecondary">
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${"infoBox__cases--green"}`}>
          {cases}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
        </Card>
    )
}

export default InfoBox;
