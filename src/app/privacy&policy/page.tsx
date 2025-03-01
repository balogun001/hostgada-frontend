'use client';

import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import React from 'react';
import Layout from 'src/layout';
import Motion from 'src/layout/motion';

function Page() {
  return (
    <Layout>
      <Motion>
        <Wrapper>
          <div className="space-y-4 md:w-2/4 py-8 md:py-20">
            <Title>Privacy Policy</Title>
            <BodyText>
              At Jekofit, we are committed to protecting your personal
              information. When you shop with us, we collect details like your
              name, contact information, shipping address, and payment details,
              which we use to process your orders and provide a smooth shopping
              experience. We use encryption and other security measures to
              protect your information. Rest assured that any information
              provided will be handled with utmost confidentiality.
            </BodyText>
          </div>

          <div className="space-y-4 md:w-2/4">
            <Title>Terms & Conditions</Title>
            <div className="pl-4">
              <BodyText>Use of the App</BodyText>
              <ul className="list-decimal">
                <li>
                  <BodyText>
                    Eligibility: You must be at least [age requirement] years
                    old to use the app. By using the app, you confirm that you
                    meet this requirement.
                  </BodyText>
                </li>
                <li>
                  <BodyText>
                    Account Responsibility: You are responsible for maintaining
                    the confidentiality of your account login details and for
                    all activities under your account.
                  </BodyText>
                </li>
                <li>
                  <BodyText>Prohibited Activities: You agree not to:</BodyText>
                  <ul className="list-disc">
                    <li>
                      <BodyText>Use the app for unlawful purposes.</BodyText>
                    </li>
                    <li>
                      <BodyText>
                        Post misleading, defamatory, or harmful content.
                      </BodyText>
                    </li>
                    <li>
                      <BodyText>
                        Engage in activities that interfere with the app’s
                        functionality or security.
                      </BodyText>
                    </li>
                  </ul>
                </li>
              </ul>

              <BodyText>Event Listings and Interactions</BodyText>
              <ul className="list-decimal">
                <li>
                  <BodyText>
                    Accuracy of Listings: We strive to provide accurate event
                    details. However, we do not guarantee the accuracy,
                    completeness, or reliability of event listings.
                  </BodyText>
                </li>
                <li>
                  <BodyText>
                    Third-Party Events: Some events listed are hosted by third
                    parties. Jekofit is not responsible for the quality, safety,
                    or legality of such events.
                  </BodyText>
                </li>
              </ul>
            </div>
          </div>
        </Wrapper>
      </Motion>
    </Layout>
  );
}

export default Page;
