<Page>
  <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
  <PageSection variant={PageSectionVariants.darker}>Section with dark background</PageSection>
  <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
</Page>


const logoProps = {
  href: 'https://patternfly.org',
  onClick: () => console.log('clicked logo'),
  target: '_blank'
};

<PageHeader logo={<Brand src={logo} alt="Red Hat Logo" />} logoProps={logoProps} toolbar={<Button variant="secondary">Login</Button>} />

const Header = (
  <PageHeader logo='Red Hat' logoProps={logoProps} toolbar='toolbar' />
);

{<Button variant="secondary">Login</Button>}
{<Brand src={logo} alt="Red Hat Logo" />}


import Hero from '@app/hero';
import Products from '@app/products';

<Page header={Header}>
  <PageSection className='summit-demo-marketing pf-m-no-fill'>
    <Grid sm={ 12 } md={ 6 } lg={ 4 } gutter="md">
    </Grid>
  </PageSection>
</Page>


<Hero/>


<Products />
