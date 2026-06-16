import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { Metadata } from 'next';
import { getFormatter, getTranslations, setRequestLocale } from 'next-intl/server';

import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
import { FeaturedProductCarousel } from '@/vibes/soul/sections/featured-product-carousel';
import { FeaturedProductList } from '@/vibes/soul/sections/featured-product-list';
import { getSessionCustomerAccessToken } from '~/auth';
import { Subscribe } from '~/components/subscribe';
import { productCardTransformer } from '~/data-transformers/product-card-transformer';
import { getPreferredCurrencyCode } from '~/lib/currency';
import { getMetadataAlternates } from '~/lib/seo/canonical';

import { DepartmentGrid } from './_components/department-grid';
import './_components/department-grid/department-grid.css';
import { JaysHero } from './_components/jays-hero';
import './_components/jays-hero/hero.css';
import { JaysTrust } from './_components/jays-trust';
import './_components/jays-trust/trust.css';
import { getPageData } from './page-data';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    alternates: await getMetadataAlternates({ path: '/', locale }),
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations('Home');
  const format = await getFormatter();

  const streamablePageData = Streamable.from(async () => {
    const customerAccessToken = await getSessionCustomerAccessToken();
    const currencyCode = await getPreferredCurrencyCode();

    return getPageData(currencyCode, customerAccessToken);
  });

  const streamableFeaturedProducts = Streamable.from(async () => {
    const data = await streamablePageData;
    const featuredProducts = removeEdgesAndNodes(data.site.featuredProducts);
    const { defaultOutOfStockMessage, showOutOfStockMessage, showBackorderMessage } =
      data.site.settings?.inventory ?? {};
    return productCardTransformer(
      featuredProducts,
      format,
      showOutOfStockMessage ? defaultOutOfStockMessage : undefined,
      showBackorderMessage,
    );
  });

  const streamableNewestProducts = Streamable.from(async () => {
    const data = await streamablePageData;
    const newestProducts = removeEdgesAndNodes(data.site.newestProducts);
    const { defaultOutOfStockMessage, showOutOfStockMessage, showBackorderMessage } =
      data.site.settings?.inventory ?? {};
    return productCardTransformer(
      newestProducts,
      format,
      showOutOfStockMessage ? defaultOutOfStockMessage : undefined,
      showBackorderMessage,
    );
  });

  const streamableShowNewsletterSignup = Streamable.from(async () => {
    const data = await streamablePageData;
    const { showNewsletterSignup } = data.site.settings?.newsletter ?? {};
    return showNewsletterSignup;
  });

  return (
    <>
      {/* 1 — Brand hero */}
      <JaysHero />

      {/* 2 — Department category tiles */}
      <DepartmentGrid />

      {/* 3 — Featured products (from BigCommerce "featured" flag) */}
      <FeaturedProductList
        cta={{ label: t('FeaturedProducts.cta'), href: '/shop-all' }}
        description={t('FeaturedProducts.description')}
        emptyStateSubtitle={t('FeaturedProducts.emptyStateSubtitle')}
        emptyStateTitle={t('FeaturedProducts.emptyStateTitle')}
        products={streamableFeaturedProducts}
        title={t('FeaturedProducts.title')}
      />

      {/* 4 — Why Jay's trust section */}
      <JaysTrust />

      {/* 5 — New arrivals carousel */}
      <FeaturedProductCarousel
        cta={{ label: t('NewestProducts.cta'), href: '/shop-all/?sort=newest' }}
        description={t('NewestProducts.description')}
        emptyStateSubtitle={t('NewestProducts.emptyStateSubtitle')}
        emptyStateTitle={t('NewestProducts.emptyStateTitle')}
        nextLabel={t('NewestProducts.nextProducts')}
        previousLabel={t('NewestProducts.previousProducts')}
        products={streamableNewestProducts}
        title={t('NewestProducts.title')}
      />

      {/* 6 — Newsletter */}
      <Stream fallback={null} value={streamableShowNewsletterSignup}>
        {(showNewsletterSignup) => showNewsletterSignup && <Subscribe />}
      </Stream>
    </>
  );
}
