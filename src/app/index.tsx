import React, { Component } from 'react';
import {
  Grid,
  Brand,
  Button,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants } from '@patternfly/react-core';
import '@app/app.css';
import './index.scss';
import logo from '../images/redhat-logo.svg';
import Hero from '@app/hero';
import Products from '@app/products';

const logoProps = {
  href: 'https://patternfly.org',
  onClick: () => console.log('clicked logo'),
  target: '_blank'
};

const Header = (
  <PageHeader logo={<Brand src={logo} alt="Red Hat Logo" />} logoProps={logoProps} toolbar={<Button variant="secondary">Login</Button>} />
);

export default class App extends Component {
  public render() {
    return (
      <React.Fragment>
        <Page header={Header}>
          <Hero />
          <PageSection className='summit-demo-marketing pf-m-no-fill'>
            <Grid sm={ 12 } md={ 6 } lg={ 4 } gutter="md">
              <Products />
            </Grid>
          </PageSection>
        </Page>
      </React.Fragment>
    );
  }
}
