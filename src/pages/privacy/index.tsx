import type { NextPage } from 'next';
import { useId } from 'react';
import BaseLayout from '@/components/layouts/Base';

const PrivacyPage: NextPage = () => {
  return (
    <BaseLayout pageTitle="privacy" className="px-4">
      {/* abstract */}
      <section id={`privacy-statement-${useId()}`}>
        <h1>Privacy policy</h1>
        <h2>Tl;dr</h2>
        <p>
          This site does not, and is in fact incapable of, collecting any
          information about you; including your IP, any cookies, or your
          mother's maiden name.
        </p>

        <h2>Analytics</h2>
        <p>
          Currently, this site doesn't collect any data for analytics nor uses
          any third-party service for it. I would say this is subject to
          possible changes in the future, to review traffic statistics and
          better understand where the readers' interest lies. If this happens,
          this page will be updated promptly and accordingly.
        </p>
      </section>
    </BaseLayout>
  );
};

export default PrivacyPage;
