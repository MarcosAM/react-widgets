import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import KebabMenu from '../KebabMenu';
import Divider from '@material-ui/core/Divider';

const Widget = ({ title, classes, children, menuItens }) => (
  <Card className={classes.card}>
    <CardContent>
      <div className={classes.header}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <KebabMenu menuItens={menuItens} />
      </div>
      <Divider variant="fullWidth" />
      <div className={classes.body}>
        {children}
      </div>
    </CardContent>
  </Card>
)

export default withStyles(styles)(Widget)