import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import KebabMenu from '../KebabMenu';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';

const Widget = ({ title, classes, children, menuItens }) => (
  <Card className={classes.card}>
    <CardHeader title={title}
      action={<KebabMenu menuItens={menuItens} />} />
    <Divider variant="fullWidth" />
    <CardContent>
      <div className={classes.body}>
        {children}
      </div>
    </CardContent>
  </Card >
)

export default withStyles(styles)(Widget)