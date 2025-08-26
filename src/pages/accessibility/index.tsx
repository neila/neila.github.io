import type { NextPage } from 'next';
import { useId } from 'react';
import BaseLayout from '@/components/layouts/Base';

const AccessibilityPage: NextPage = () => {
  return (
    <article>
      <BaseLayout pageTitle="Accessibility" className="px-4">
        {/* TODO (3): Probably turn this page into the site design page */}
        <section id={useId()}>
          <h1>Accessibility</h1>

          <p>
            Semantic markup is used wherever possible. <br />
            JavaScript is not required for the core reading experience, and is
            only used for optional features: comments, animations, and so on.
            <br />
            Progressive Enhacement: Pages can be read on various screen widths;
            monitors, tablets, and smartphones alike. It even works on a text
            browser like <a href="https://www.brow.sh/">browsh</a>.
          </p>
        </section>
      </BaseLayout>
    </article>
  );
};

export default AccessibilityPage;
