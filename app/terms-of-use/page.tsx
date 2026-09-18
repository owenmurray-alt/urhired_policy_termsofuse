import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Terms of Use — Tessa by URHired',
  description:
    'The agreement between you and URHired Limited for the Tessa app and service, including the App Store end user licence terms.',
}

export default function TermsOfUsePage() {
  return (
    <LegalPage title="Terms of Use" lastUpdated="17 September 2026">
      <p className="lead">
        Version 1.0. These terms are the agreement between you and us for the Tessa app and service.
        They also serve as the end user licence agreement required by the App Store. By creating an
        account or using Tessa, you accept them. If you do not accept them, do not use the app.
      </p>
      <p>
        Nothing here takes away rights you have as a consumer under Irish or EU law. Where a term
        below conflicts with those rights, your rights win.
      </p>

      <hr />

      <h2>1. Who you are dealing with</h2>
      <p>
        Tessa is provided by URHired Limited, registered in Ireland under number 722170, registered
        office 6 Fern Road, Sandyford, Dublin, D18 FP98, Ireland, referred to below as
        &quot;we&quot;, &quot;us&quot; and &quot;our&quot;.
      </p>
      <p>Contact: support@urhired.ie / +353 83 804 6428</p>

      <hr />

      <h2>2. Who can use Tessa</h2>
      <p>
        You must be 16 or older. If you are under 18, you confirm that a parent or guardian knows
        you are using the app and accepts these terms on your behalf.
      </p>
      <p>
        You must be able to enter a contract, and you must not be barred from using the service
        under the law that applies to you.
      </p>

      <hr />

      <h2>3. Your account</h2>
      <ul>
        <li>
          You sign in with Apple or Google. Keep that account secure, because anyone who can open it
          can open Tessa.
        </li>
        <li>One account per person. Do not share it, sell it or let someone else use it.</li>
        <li>
          Give us accurate information, and keep the email address on the account working, because
          that is how we reply to you.
        </li>
        <li>You are responsible for what happens on your account.</li>
      </ul>
      <p>Tell us at support@urhired.ie if you think someone else is using it.</p>

      <hr />

      <h2>4. What Tessa is, and what it is not</h2>
      <p>
        Tessa is interview practice. It listens to your answers, asks follow-up questions, and gives
        you written feedback and a score afterwards. It reads your CV so the questions match your
        experience, and it can check a CV against a job advert.
      </p>
      <p>Be clear about the limits:</p>
      <ul>
        <li>
          <strong>No guarantee of a job.</strong> We do not promise an interview, an offer, a role,
          or any outcome in your job search.
        </li>
        <li>
          <strong>It is practice, not assessment.</strong> Scores and feedback are produced
          automatically, they can be wrong, and they are not a qualification, a reference or a
          psychometric test.
        </li>
        <li>
          <strong>It is not medical, clinical or therapeutic.</strong> Tessa adapts to how you say
          you think and work. It does not diagnose anything, it does not treat anything, and it is no
          substitute for advice from a doctor or a qualified professional.
        </li>
        <li>
          It is not legal, financial or immigration advice, and it is not a recruitment agency or
          employment service.
        </li>
        <li>
          Content is generated automatically, so it can be inaccurate or out of date. Check anything
          you plan to rely on, especially anything written into a CV you will send to an employer.
        </li>
        <li>
          <strong>You stay responsible for your own CV.</strong> If Tessa rewrites or builds one,
          read it before you send it. The facts in it are yours to stand over.
        </li>
      </ul>

      <hr />

      <h2>5. Free and paid access</h2>
      <p>
        Some of Tessa is free. Tessa Plus opens the rest, and is sold as an auto-renewing
        subscription through the App Store or Google Play.
      </p>
      <p>
        Fair use limits apply to voice practice so one account cannot exhaust the service for
        everyone. Current limits are shown in the app and may change with notice.
      </p>

      <hr />

      <h2>6. Subscriptions, billing and cancelling</h2>
      <p>
        Payment is taken by Apple or Google, not by us. Their terms govern the transaction, and we
        never see your card details.
      </p>
      <ul>
        <li>
          <strong>Price and term</strong> are shown on the purchase screen before you confirm,
          including the renewal price and the renewal period.
        </li>
        <li>
          <strong>Auto-renewal.</strong> The subscription renews automatically at the end of each
          period, and your store charges you within 24 hours before the period ends, unless you turn
          renewal off at least 24 hours before that point.
        </li>
        <li>
          <strong>Cancelling.</strong> Turn off renewal in your device&apos;s subscription settings:
          iOS, Settings, your name, Subscriptions; Android, Play Store, Profile, Payments and
          subscriptions. We cannot cancel it for you. You keep access until the end of the paid
          period.
        </li>
        <li>Deleting your account does not cancel the subscription. Cancel it first.</li>
        <li>
          Free trials, where offered, convert into a paid subscription unless you cancel before the
          trial ends. Any unused part of a trial is forfeited when you buy a subscription.
        </li>
        <li>
          Refunds are handled by Apple and by Google under their policies. Ask them, not us. We will
          help where we can.
        </li>
        <li>
          Price changes take effect only for periods after we tell you, and your store will ask you
          to confirm where it requires that. You can cancel instead.
        </li>
      </ul>
      <p>
        <strong>EU and Irish right of withdrawal.</strong> You normally have 14 days to withdraw
        from a distance contract. By buying access that starts immediately, you ask for the service
        to begin at once and accept that the right is lost once it has been fully performed. Where
        Apple or Google offers you a better refund outcome, take it.
      </p>

      <hr />

      <h2>7. Access paid for by a college, employer or club</h2>
      <p>An organisation can buy access for you. If it does:</p>
      <ul>
        <li>Access runs for a set period and ends on its own.</li>
        <li>
          While it is running you are not asked to buy anything, and you see the organisation access
          screen instead of the plans.
        </li>
        <li>
          The organisation never sees your CV, your interviews, your scores or your setup answers.
          It is told only that the access was claimed and when it ends.
        </li>
        <li>
          We can end a grant if the organisation&apos;s contract with us ends, or if it was given by
          mistake.
        </li>
      </ul>

      <hr />

      <h2>8. Your content</h2>
      <p>
        Your CV, your answers, what you say in a session and anything you paste in stay yours. We
        claim no ownership.
      </p>
      <p>
        You give us a limited licence to host, copy, process and display that content, and to pass
        it to the providers listed in the Privacy Policy, for one purpose only: running the service
        for you. The licence lasts as long as your account and ends when you delete it or remove the
        content. We do not use your content to train models, and our providers are contractually
        barred from doing so on our account.
      </p>
      <p>
        You confirm that you have the right to give us what you upload, and that it does not break
        anyone else&apos;s rights.
      </p>

      <hr />

      <h2>9. What you must not do</h2>
      <p>Do not:</p>
      <ul>
        <li>
          Upload someone else&apos;s CV or personal information without their permission, including a
          recruiter&apos;s or employer&apos;s confidential material.
        </li>
        <li>Use Tessa to impersonate anyone, or put false claims into a CV.</li>
        <li>Break the law, harass anyone, or upload abusive, hateful or illegal content.</li>
        <li>
          Try to break, probe or overload the service, get around limits, quotas, payment or app
          integrity checks, or reach another account&apos;s data.
        </li>
        <li>
          Reverse engineer, decompile or disassemble the app, except where the law expressly allows
          it.
        </li>
        <li>Scrape the service, resell it, or run it for a third party as your own offering.</li>
        <li>
          Use the app to build a competing product, or to extract our prompts, model configuration
          or outputs at scale.
        </li>
        <li>Use bots or automation to drive the service.</li>
      </ul>
      <p>
        <strong>Recording other people.</strong> Practice interviews are between you and Tessa. Do
        not run a session where someone else can be heard without their consent, and do not bring
        confidential information about a real employer into one.
      </p>

      <hr />

      <h2>10. Availability and changes</h2>
      <p>
        We work to keep Tessa up, but we do not promise it will be uninterrupted or error free. We
        may change, suspend or withdraw features, and we may run maintenance.
      </p>
      <p>
        If we make a change that materially reduces what a paid subscription gives you, we will tell
        you, and you can cancel.
      </p>
      <p>
        The app needs a supported version of iOS or Android, a working internet connection, and
        microphone access for the spoken interview. Your network charges are yours.
      </p>

      <hr />

      <h2>11. Our intellectual property</h2>
      <p>
        The app, its design, its content, its interview prompts and the Tessa and URHired names and
        logos are ours or our licensors&apos;. We give you a personal, limited, non-exclusive,
        non-transferable, revocable licence to use the app on devices you own or control, for your
        own non-commercial job search. Nothing else is granted.
      </p>

      <hr />

      <h2>12. Other companies&apos; services</h2>
      <p>
        Sign-in, payment, voice and text processing are run by the providers named in the Privacy
        Policy. Their terms apply to their part, we do not control them, and we are not responsible
        for them. If one of them has an outage, Tessa may be unavailable in part.
      </p>

      <hr />

      <h2>13. Ending this agreement</h2>
      <ul>
        <li>
          You can stop at any time. Delete your account in Profile, or delete the app. Cancel any
          subscription with your store first.
        </li>
        <li>
          We can suspend or close an account that breaks these terms, that is used for fraud or
          abuse, or where we must act by law. Where it is fair to do so we will warn you first and
          give you a chance to put it right. If we close a paid account without cause, we will refund
          the unused part of the period through your store.
        </li>
      </ul>
      <p>
        Deleting your account deletes your data straight away and cannot be undone. The Privacy
        Policy, section 10, sets out exactly what goes.
      </p>

      <hr />

      <h2>14. Disclaimers</h2>
      <p>
        As far as the law allows, Tessa is provided &quot;as is&quot; and &quot;as available&quot;,
        and we exclude implied warranties of merchantability, fitness for a particular purpose and
        non-infringement.
      </p>
      <p>
        We do not warrant that feedback, scores, CV text or generated content will be accurate,
        complete or suitable for any particular application.
      </p>
      <p>
        Your statutory rights as a consumer are not affected, including your rights under the
        European Union (Consumer Information, Cancellation and Other Rights) Regulations 2013 and the
        Consumer Rights Act 2022.
      </p>

      <hr />

      <h2>15. Our liability</h2>
      <p>
        Nothing here limits liability for death or personal injury caused by negligence, for fraud,
        or for anything that cannot lawfully be limited.
      </p>
      <p>Subject to that, and as far as the law allows:</p>
      <ul>
        <li>
          We are not liable for lost profits, lost opportunities, lost jobs, lost data beyond what
          our own fault caused, or indirect or consequential loss.
        </li>
        <li>
          Our total liability for any claim connected with Tessa is limited to the greater of the
          amount you paid us in the 12 months before the claim, or EUR 100.
        </li>
      </ul>
      <p>
        If you are a consumer, we are responsible for loss you suffer that is a foreseeable result of
        our breaking these terms or failing to use reasonable care and skill. We are not responsible
        for anything unforeseeable.
      </p>

      <hr />

      <h2>16. Your responsibility to us</h2>
      <p>
        If you use Tessa for business purposes, you will cover our reasonable losses arising from
        your breach of these terms or your misuse of the service. This clause does not apply to
        consumers.
      </p>

      <hr />

      <h2>17. Law and disputes</h2>
      <p>
        These terms are governed by the laws of Ireland, and the courts of Ireland have
        jurisdiction. If you are a consumer living elsewhere in the EEA, you keep the protection of
        your own country&apos;s mandatory consumer law and can bring a claim in your own courts.
      </p>
      <p>
        Talk to us first at support@urhired.ie. Most things are sorted in an email. EU consumers
        can also use the European Commission&apos;s online dispute resolution platform.
      </p>

      <hr />

      <h2>18. Changes to these terms</h2>
      <p>
        We may update these terms. The version and date at the top change, and we tell you in the
        app before a material change takes effect. Continuing to use Tessa after that means you
        accept the new version. If you do not, delete your account.
      </p>

      <hr />

      <h2>19. General</h2>
      <ul>
        <li>If a clause is found unenforceable, the rest stays in force.</li>
        <li>Not enforcing a term once does not waive it.</li>
        <li>
          You may not transfer your rights under these terms. We may transfer ours if our business
          is sold, without reducing your rights.
        </li>
        <li>
          These terms, the Privacy Policy and the purchase terms shown by your store are the whole
          agreement between us.
        </li>
      </ul>

      <hr />

      <h2>Schedule 1. Additional terms for the App Store</h2>
      <p>These apply when you get Tessa from Apple&apos;s App Store, and Apple requires them.</p>
      <ol>
        <li>
          This agreement is with us, not Apple. Apple is not a party to it, and we alone are
          responsible for the app and its content.
        </li>
        <li>
          <strong>Licence scope.</strong> The licence in clause 11 is limited to using Tessa on an
          Apple-branded product you own or control, as permitted by the Usage Rules in the Apple
          Media Services Terms and Conditions, including sharing through Family Sharing where
          allowed.
        </li>
        <li>
          <strong>Maintenance and support</strong> are ours alone. Apple has no obligation to
          provide either.
        </li>
        <li>
          <strong>Warranty.</strong> If the app fails to conform to any applicable warranty, you may
          tell Apple, and Apple will refund the purchase price. To the maximum extent the law allows,
          Apple has no other warranty obligation, and any other claims, losses, liabilities, damages,
          costs or expenses for non-conformity are ours.
        </li>
        <li>
          <strong>Product claims.</strong> We, not Apple, handle any claim about the app: product
          liability, failure to meet a legal or regulatory requirement, and claims under consumer
          protection or similar law, including any claim arising from the app&apos;s handling of
          health data.
        </li>
        <li>
          <strong>Intellectual property claims.</strong> If a third party claims the app infringes
          its intellectual property, we, not Apple, are responsible for investigating, defending,
          settling and discharging that claim.
        </li>
        <li>
          <strong>Legal compliance.</strong> You confirm you are not in a country subject to a US
          Government embargo or designated as a &quot;terrorist supporting&quot; country, and that
          you are not on any US Government list of prohibited or restricted parties.
        </li>
        <li>
          <strong>Third-party beneficiary.</strong> Apple and its subsidiaries are third-party
          beneficiaries of these terms and may enforce them against you.
        </li>
        <li>
          <strong>Contact.</strong> Questions, complaints or claims about the app go to
          support@urhired.ie.
        </li>
      </ol>

      <hr />

      <h2>Schedule 2. Additional terms for Google Play</h2>
      <p>These apply when you get Tessa from Google Play.</p>
      <ol>
        <li>
          Your purchase is also governed by the Google Play Terms of Service, and billing, renewal
          and refunds follow Google&apos;s policies.
        </li>
        <li>Google is not a party to this agreement and is not responsible for the app.</li>
        <li>
          Manage or cancel your subscription in the Play Store under Payments and subscriptions.
        </li>
      </ol>
    </LegalPage>
  )
}
