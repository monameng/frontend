import React, { PureComponent, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Link from 'next/link';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Me from '@/view/me';
import Layout from '@/components/layout';

const styles = theme => ({
  input: {
    display: 'none',
  },
  card: {
    maxWidth: 500,
    margin: '50px auto',
    paddingBottom: 16,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    // fontSize: 20,
    // marginBottom: 16,
    background: 'rgba(22,200,200,0.05)',
  },
});

@withStyles(styles)
export default class Index extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Layout>
          <Me />
        </Layout>
      </Fragment>
    );
  }
}
