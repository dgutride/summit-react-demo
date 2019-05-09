import React, { Component } from 'react';
import { PageSection, Title, Button, TitleSize, TitleLevel } from '@patternfly/react-core';

import './hero.scss';

export default class Hero extends Component {
  public render() {
    return (
      <PageSection className='summit-demo-hero pf-m-fill pf-l-flex pf-m-align-items-center pf-m-justify-content-center'>
        <article className='pf-l-flex pf-m-column pf-m-align-items-center'>
          <Title headingLevel={TitleLevel.h2} size={TitleSize.lg} className='summit-demo-hero__title pf-m-spacer-lg' > Explore our open, multicloud tools </Title>
          <Title headingLevel={TitleLevel.h2} size={TitleSize.xl} className='pf-m-spacer-xl'> Discover Red Hat <sup>®</sup> software-as-a-service
          </Title>
          <Button> Log in to your Red Hat account</Button>
          <a href='https://www.redhat.com/en/customers'> Not a customer? </a>
        </article>
      </PageSection>
    );
  }
}
