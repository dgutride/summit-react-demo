import React, { Component } from 'react';
import {
  Card, CardHeader,
  CardBody,
  Stack,
  StackItem,
  CardFooter,
} from '@patternfly/react-core';
import { ArrowRightIcon } from '@patternfly/react-icons';
import techs from './consts';

export default class Products extends Component {
  public render() {
    const technologies = techs;
    return (
      <React.Fragment>
      { technologies.map(({ marketingImage, title, marketingUrl, marketingText, id }, key) => (
        <Card className="summit-demo-application-info pf-m-card-link" application-id={ id } key={ key }>
          <CardHeader>
            <Stack gutter='sm'>
              <StackItem className='summit-demo-application-logo' isFilled={false}>
                { marketingImage && <img
                  className="summit-demo-application-info__logo"
                  aria-hidden
                  src={ marketingImage }
                  alt={ `${title} logo` } /> }
              </StackItem>
            </Stack>
          </CardHeader>
          <CardBody>
            <Stack>
              <StackItem isFilled={false}>
                <span className='ins-m-gray'>{ marketingText }</span>
              </StackItem>
            </Stack>
          </CardBody>
          <CardFooter>
            <div className="summit-demo-open-card pf-l-flex pf-m-align-items-center">
                                <span>
                                    Get Started
                                </span>
              <ArrowRightIcon size="sm" />
            </div>
          </CardFooter>
          <a className='pf-c-card__card-link' href={ marketingUrl } aria-label={ `Go to ${title}` }></a>
        </Card>
      )) }
      </React.Fragment>
    );
  }
}
