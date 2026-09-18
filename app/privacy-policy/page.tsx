import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy — Tessa by URHired',
  description:
    'How URHired Limited collects, uses and protects your data when you use the Tessa app and service.',
}

function Placeholder({ children }: { children: React.ReactNode }) {
  return <span className="placeholder">{children}</span>
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="17 September 2026">
      <p className="lead">
        Version 1.0. This policy covers the Tessa mobile app for iPhone, iPad and Android, and the
        service behind it at api.urhired.ie.
      </p>

      <hr />

      <h2>1. Who we are</h2>
      <p>
        Tessa is built and run by <strong>URHired Limited</strong>, a company registered in Ireland
        under number <strong>722170</strong>, with its registered office at{' '}
        6 Fern Road, Sandyford, Dublin, D18 FP98, Ireland.
      </p>
      <p>We are the data controller for the information described here.</p>
      <ul>
        <li>
          General contact: <a href="mailto:support@urhired.ie">support@urhired.ie</a>
        </li>
        <li>
          Privacy and data protection requests:{' '}
          <a href="mailto:privacy@urhired.ie">privacy@urhired.ie</a>
        </li>
        <li>Phone: +353 83 804 6428</li>
      </ul>

      <hr />

      <h2>2. The short version</h2>
      <ul>
        <li>You sign in with Apple or Google. We never see or hold your password.</li>
        <li>
          We keep what the app needs to coach you: your CV text, your practice interviews and their
          feedback, your answers to the six setup questions, and your subscription status.
        </li>
        <li>
          The five setup answers about how you think and work (ADHD, autism, dyslexia, anxiety, or
          none) count as health data under EU law. We ask for your explicit consent before we use
          them, and the app works without them.
        </li>
        <li>
          <strong>
            We do not sell your data. We do not share it with advertisers. There is no advertising,
            analytics or tracking software in the app.
          </strong>{' '}
          No data is used to build a profile of you for marketing, and nothing is shared with
          recruiters, employers or job boards.
        </li>
        <li>
          Your spoken interview audio streams from your phone to our voice provider so Tessa can
          hear you and answer. We do not store the audio ourselves.
        </li>
        <li>
          Deleting your account in the app deletes your data straight away. There is no waiting
          period and no archive copy.
        </li>
      </ul>

      <hr />

      <h2>3. What we collect, and why</h2>

      <h3>3.1 Account information</h3>
      <p>When you sign in with Apple or Google we receive, through Firebase Authentication:</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Email address</td>
              <td>May be an Apple private relay address if you chose to hide it.</td>
            </tr>
            <tr>
              <td>Display name</td>
              <td>Optional. Whatever your provider gives us.</td>
            </tr>
            <tr>
              <td>Profile photo URL</td>
              <td>Optional. Google accounts only, and only a link.</td>
            </tr>
            <tr>
              <td>Sign-in provider</td>
              <td>Apple or Google.</td>
            </tr>
            <tr>
              <td>Firebase user ID</td>
              <td>The internal key that ties your account to your data.</td>
            </tr>
            <tr>
              <td>Account created date, last active date</td>
              <td>Housekeeping and support.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        We never receive your Apple or Google password, and we do not offer a password of our own.
      </p>

      <h3>3.2 Your setup answers</h3>
      <p>The six onboarding questions and the comfort sheet:</p>
      <ul>
        <li>
          <strong>How you think and work</strong>: ADHD, autism, dyslexia, anxiety, or none of
          these. See section 4, this is health data.
        </li>
        <li>
          Career stage, job-search timeline, preferred communication style, and what you find
          hardest about interviews.
        </li>
        <li>Comfort settings: reduced motion, spoken prompts on or off, numbers on or off.</li>
      </ul>
      <p>Every one of these is optional and you can change or clear them in Profile.</p>

      <h3>3.3 Your CV</h3>
      <ul>
        <li>
          <strong>The file you upload is not stored.</strong> It is streamed straight to our text
          model provider, which returns a structured record, and the file itself is then discarded.
          We keep no document store and no file bucket.
        </li>
        <li>
          We do keep the <strong>text of your CV and the structured record</strong> built from it,
          so the app can tailor questions, run CV checks and rebuild exports without asking you to
          upload the file again.
        </li>
        <li>We keep the file name, file type and size for display in your CV list.</li>
        <li>
          If you paste your CV instead, or build one in the app, we keep exactly the same thing: the
          text and the structured record.
        </li>
        <li>
          Job adverts you paste in for a CV check or a tailored interview are kept with that check
          or interview.
        </li>
      </ul>

      <h3>3.4 Practice interviews</h3>
      <p>
        For each session: the company and role you set up, the interview type, the questions and
        your answers as recovered text, how long it ran, how many turns there were, the scores
        (confidence, clarity, detail), the strengths and improvements list, and the closing tip.
      </p>
      <p>
        A raw turn-by-turn transcript is written when a session ends and is{' '}
        <strong>cleared again</strong> once the analysed version replaces it. It only stays where an
        analysis failed or nobody spoke.
      </p>

      <h3>3.5 Audio from the spoken interview</h3>
      <p>
        The microphone is used only while a practice interview is running, and only after you allow
        it on the system prompt.
      </p>
      <p>
        Audio streams <strong>directly from your phone to ElevenLabs</strong>, the company that runs
        the voice side of the interview. It does not pass through our servers and{' '}
        <strong>we do not record or store it</strong>. ElevenLabs holds the conversation audio and
        transcript on its own systems under our account, tagged with your internal user ID and no
        other identifier. Its retention period for that material is{' '}
        <Placeholder>[ElevenLabs retention setting — fill in]</Placeholder>.
      </p>
      <p>
        We never use the microphone outside a session you started, and the app has no camera feature
        at all.
      </p>

      <h3>3.6 Subscription and payment</h3>
      <ul>
        <li>
          Payment is taken by <strong>Apple</strong> or <strong>Google</strong>, not by us. We never
          see your card number, billing address or full purchase receipt.
        </li>
        <li>
          We store an anonymous subscription ID (a keyed hash of the identifier your sign-in
          provider gives us), whether your access is active, which plan is running, when it expires,
          and whether it is set to renew.
        </li>
        <li>If an organisation gave you access, we store that grant and its end date.</li>
      </ul>

      <h3>3.7 Support messages</h3>
      <p>
        If you write to us through Profile, Help, we store the message and who sent it, so staff can
        read it and reply to the email address on your account.
      </p>

      <h3>3.8 Service and security records</h3>
      <ul>
        <li>
          Per-day counts of how many practice sessions you started and how many seconds of voice
          they used, so fair use limits can be applied.
        </li>
        <li>
          Server logs holding request paths, response codes, timestamps and error details, kept for{' '}
          30 days.
        </li>
        <li>
          A record of every time a staff member opens account data that includes health answers.
          This audit trail is required of us by law and, as explained in section 11, it outlives
          your account without holding anything that identifies you.
        </li>
      </ul>

      <h3>3.9 What stays on your phone</h3>
      <p>
        Your comfort settings, whether you have finished onboarding, any downloaded session audio,
        and any interview reminders you scheduled. All of it goes when you delete the app.
      </p>

      <h3>3.10 What we do not collect</h3>
      <p>
        No location data. No contacts. No photos or camera access. No advertising ID. No device
        fingerprinting. No third-party analytics or crash-reporting software. No tracking across
        other companies&apos; apps or websites.
      </p>

      <hr />

      <h2>4. Health data, and your explicit consent</h2>
      <p>
        Telling us you have ADHD, autism, dyslexia or anxiety is information about your health under{' '}
        <strong>Article 9 of the GDPR</strong>. That has three consequences, and we hold ourselves
        to all of them.
      </p>
      <ol>
        <li>
          <strong>We ask before we use it.</strong> During setup, a sheet explains what Tessa does
          with your answers and you confirm it. We record the date you agreed and the version of the
          wording you agreed to. If we change that wording materially, we ask again rather than
          treating an old yes as covering new text.
        </li>
        <li>
          <strong>Without that consent, the answers do nothing.</strong> They are not sent into the
          interview prompt, and they do not shape the questions.
        </li>
        <li>
          <strong>No diagnosis ever leaves our server.</strong> When consent is in place, the
          answers are translated into plain interview behaviour (for example, more patience after a
          pause, or shorter questions) before anything is sent to a model provider. The provider is
          never told that you have any condition.
        </li>
      </ol>
      <p>
        You can withdraw consent at any time in Profile, or by clearing the answers. Withdrawal
        stops future use. It does not undo interviews that already happened.
      </p>

      <hr />

      <h2>5. Why we use your information, and our legal basis</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>What we do</th>
              <th>Legal basis (GDPR Article 6, and 9 where relevant)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Create and run your account</td>
              <td>Contract, Art. 6(1)(b)</td>
            </tr>
            <tr>
              <td>Read your CV and build the structured record</td>
              <td>Contract, Art. 6(1)(b)</td>
            </tr>
            <tr>
              <td>Run practice interviews and produce feedback</td>
              <td>Contract, Art. 6(1)(b)</td>
            </tr>
            <tr>
              <td>Tailor interviews to how you think and work</td>
              <td>Explicit consent, Art. 9(2)(a)</td>
            </tr>
            <tr>
              <td>Use the microphone during a session</td>
              <td>Consent, given on the system prompt</td>
            </tr>
            <tr>
              <td>Send interview reminders</td>
              <td>Consent, given when you turn them on</td>
            </tr>
            <tr>
              <td>Check your subscription and apply access</td>
              <td>Contract, Art. 6(1)(b)</td>
            </tr>
            <tr>
              <td>Answer support messages</td>
              <td>Contract, Art. 6(1)(b)</td>
            </tr>
            <tr>
              <td>Keep the service secure, stop abuse, apply fair use limits</td>
              <td>Legitimate interests, Art. 6(1)(f)</td>
            </tr>
            <tr>
              <td>Keep an audit trail of staff access to health data</td>
              <td>Legal obligation, Art. 6(1)(c), and Art. 5(2) accountability</td>
            </tr>
            <tr>
              <td>Fix faults and improve how the product works</td>
              <td>Legitimate interests, Art. 6(1)(f)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Where we rely on legitimate interests, we have weighed them against your rights and use the
        least intrusive option that works. You can object, see section 12.
      </p>

      <hr />

      <h2>6. Automated processing</h2>
      <p>
        Scores, strengths, improvements and the closing tip are produced automatically from what you
        said in the session. They are practice feedback and nothing else.
      </p>
      <ul>
        <li>
          They are not a decision about you in the legal sense, they produce no legal or similarly
          significant effect, and nobody outside your account sees them.
        </li>
        <li>They are not a diagnosis, a clinical assessment or a psychometric test.</li>
        <li>They are not shared with employers, recruiters or your organisation.</li>
        <li>They can be wrong. Treat them as a coaching prompt, not a verdict.</li>
      </ul>
      <p>
        You can ask a person to look at any score you think is unfair by writing to{' '}
        <a href="mailto:privacy@urhired.ie">privacy@urhired.ie</a>.
      </p>

      <hr />

      <h2>7. Who your information goes to</h2>
      <p>
        We use a small number of processors. Each one is bound by a written data processing
        agreement, each is limited to the purpose below, and none of them may use your data for
        their own purposes or for training their models on our account&apos;s terms.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>What it handles</th>
              <th>Where</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google (Firebase Authentication, App Check)</td>
              <td>Sign-in, account credentials, app integrity checks</td>
              <td>EU and US</td>
            </tr>
            <tr>
              <td>OpenAI</td>
              <td>CV extraction, CV checks, session analysis. Receives CV text and session transcript text</td>
              <td>US</td>
            </tr>
            <tr>
              <td>ElevenLabs</td>
              <td>The live spoken interview. Receives your audio directly from the phone</td>
              <td>US</td>
            </tr>
            <tr>
              <td>RevenueCat</td>
              <td>Subscription status against your anonymous subscription ID</td>
              <td>US</td>
            </tr>
            <tr>
              <td>Vercel</td>
              <td>Our server and database</td>
              <td>Ireland</td>
            </tr>
            <tr>
              <td>Apple, Google</td>
              <td>
                Payment, billing and refunds for subscriptions. They are separate controllers for
                what they collect
              </td>
              <td>Global</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        OpenAI retains API content for up to 30 days for abuse monitoring under its enterprise terms
        and then deletes it, and does not train on it.
      </p>
      <p>
        Our own staff can see account data through an internal panel, restricted by role, and every
        read of health data is logged.
      </p>
      <p>
        We will also disclose information if the law requires it, to establish or defend legal
        claims, or to protect someone&apos;s safety. If our business is sold or reorganised, your
        data may move with it, and this policy continues to apply until you are told otherwise.
      </p>
      <p>
        <strong>We never sell your data and we never share it for advertising.</strong>
      </p>

      <hr />

      <h2>8. Transfers outside the EEA</h2>
      <p>
        Some providers above process data in the United States. Those transfers rely on the European
        Commission&apos;s <strong>standard contractual clauses</strong>, and where the provider is
        certified, on the <strong>EU-US Data Privacy Framework</strong>. We have assessed each
        transfer and applied additional measures such as encryption in transit and the removal of
        direct identifiers before content is sent. Ask us at{' '}
        <a href="mailto:privacy@urhired.ie">privacy@urhired.ie</a> for a copy of the safeguards.
      </p>

      <hr />

      <h2>9. How long we keep things</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Kept for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account, profile, CVs, interviews, sessions, support messages</td>
              <td>Until you delete your account</td>
            </tr>
            <tr>
              <td>Raw session transcript</td>
              <td>Until the analysed version replaces it, usually within seconds of the session ending</td>
            </tr>
            <tr>
              <td>Uploaded CV file</td>
              <td>Not kept. Discarded as soon as the text is extracted</td>
            </tr>
            <tr>
              <td>Daily usage counts</td>
              <td>Until you delete your account</td>
            </tr>
            <tr>
              <td>Server logs</td>
              <td>30 days</td>
            </tr>
            <tr>
              <td>Database backups</td>
              <td>30 days, then overwritten</td>
            </tr>
            <tr>
              <td>Staff access audit trail</td>
              <td>
                24 months. It holds internal IDs only, and identifies nobody once your account is
                gone
              </td>
            </tr>
            <tr>
              <td>Subscription records at Apple, Google and RevenueCat</td>
              <td>As long as billing is live, then per their own policies</td>
            </tr>
            <tr>
              <td>Conversation audio and transcripts at ElevenLabs</td>
              <td>
                <Placeholder>[ElevenLabs retention setting]</Placeholder>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2>10. Deleting your account</h2>
      <p>Profile, then Delete account. We ask you to sign in again first, so a mis-tap cannot do it.</p>
      <p>When you confirm:</p>
      <ol>
        <li>
          Your account row and everything hanging off it goes immediately: profile, health answers,
          every CV, every CV check, every interview, every practice session, your usage counts and
          your support messages.
        </li>
        <li>Your sign-in credential is deleted, so the account cannot be reached again.</li>
        <li>
          Any other device you were signed in on is cut off the next time it calls us and clears its
          local copy.
        </li>
        <li>
          Your subscription record is deleted unless there is live billing attached to it, which we
          cannot cancel on your behalf.
        </li>
      </ol>
      <p>
        <strong>There is no grace period and no recovery.</strong> Signing in again later starts a
        fresh, empty account.
      </p>
      <p>
        Two things survive on purpose, and neither identifies you once your account is gone: the
        staff access audit trail (internal IDs only) and any record of an access grant your
        organisation bought.
      </p>
      <p>
        <strong>Cancel your subscription yourself.</strong> Deleting your account does not cancel it.
        Only the App Store or Google Play can, in your device&apos;s subscription settings.
      </p>
      <p>
        You can also ask us to delete your account by writing to{' '}
        <a href="mailto:privacy@urhired.ie">privacy@urhired.ie</a> from the address on the account.
      </p>

      <hr />

      <h2>11. Keeping it safe</h2>
      <ul>
        <li>Everything travels over TLS.</li>
        <li>
          Provider API keys live only on our server.{' '}
          <strong>The app ships with no provider keys of any kind.</strong> Voice sessions use a
          single-use token minted per session.
        </li>
        <li>Firebase App Check gates the endpoint that mints those tokens.</li>
        <li>
          Every request is checked against a live credential, so a deleted or revoked account stops
          working straight away.
        </li>
        <li>Staff access is limited by role and, for health data, logged.</li>
        <li>The database is not reachable from the public internet.</li>
      </ul>
      <p>
        No service can promise perfect security. If a breach puts your rights at risk we will tell
        you and the Data Protection Commission as the GDPR requires.
      </p>

      <hr />

      <h2>12. Your rights</h2>
      <p>Under the GDPR you can ask us to:</p>
      <ul>
        <li>
          <strong>Give you a copy</strong> of your data, and give it in a portable format.
        </li>
        <li>
          <strong>Correct</strong> anything wrong.
        </li>
        <li>
          <strong>Delete</strong> your data. The in-app delete does this immediately.
        </li>
        <li>
          <strong>Restrict</strong> or <strong>object to</strong> processing based on legitimate
          interests.
        </li>
        <li>
          <strong>Withdraw consent</strong>, for health answers, the microphone or reminders, at any
          time, without affecting what was lawful before you withdrew it.
        </li>
      </ul>
      <p>
        Write to <a href="mailto:privacy@urhired.ie">privacy@urhired.ie</a>. We reply within one month. There
        is no charge unless a request is clearly excessive.
      </p>
      <p>
        If you are unhappy with how we handled it, you can complain to the Irish{' '}
        <strong>Data Protection Commission</strong>, 21 Fitzwilliam Square South, Dublin 2, D02
        RD28,{' '}
        <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer">
          www.dataprotection.ie
        </a>
        . If you live in another EEA country you can complain to your own supervisory authority
        instead.
      </p>

      <hr />

      <h2>13. Age</h2>
      <p>
        Tessa is for people aged <strong>16 and over</strong>. We do not knowingly collect anything
        from under-16s. If you believe a child has an account, write to{' '}
        <a href="mailto:privacy@urhired.ie">privacy@urhired.ie</a> and we will delete it.
      </p>

      <hr />

      <h2>14. Access bought by a college or employer</h2>
      <p>
        If a college, employer or club paid for your access, they give us your email address so the
        grant can be applied. They are told whether the access was claimed and when it ends.
      </p>
      <p>
        <strong>
          They are never shown your CV, your interviews, your scores or your health answers.
        </strong>{' '}
        Your practice stays yours.
      </p>

      <hr />

      <h2>15. Notifications</h2>
      <p>
        Interview reminders are scheduled on your phone, not sent from our servers. Turn them off in
        Profile or in your system settings.
      </p>

      <hr />

      <h2>16. Changes</h2>
      <p>
        If we change this policy we will update the version and date at the top and, where the
        change matters to you, tell you in the app before it takes effect. Material changes to how we
        use health answers always mean asking for your consent again.
      </p>

      <hr />

      <h2>17. Contact</h2>
      <p>
        <strong>URHired Limited</strong>, 6 Fern Road, Sandyford, Dublin, D18 FP98, Ireland
        <br />
        Privacy: <a href="mailto:privacy@urhired.ie">privacy@urhired.ie</a> · Support:{' '}
        <a href="mailto:support@urhired.ie">support@urhired.ie</a>
      </p>

      <hr />

      <h2>Appendix A. Apple App Store privacy label</h2>
      <p>
        For the &quot;App Privacy&quot; questionnaire in App Store Connect. Nothing below is used for
        tracking, and nothing is used for third-party advertising.
      </p>
      <p>
        <strong>Data linked to you</strong> (collected and tied to your identity):
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Types</th>
              <th>Purposes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Contact Info</td>
              <td>Email address, name</td>
              <td>App Functionality</td>
            </tr>
            <tr>
              <td>User Content</td>
              <td>
                CV text, interview answers and transcripts, audio during a session, support
                messages, photo URL
              </td>
              <td>App Functionality</td>
            </tr>
            <tr>
              <td>Health &amp; Fitness</td>
              <td>Health (self-reported neurodivergence answers)</td>
              <td>App Functionality</td>
            </tr>
            <tr>
              <td>Identifiers</td>
              <td>User ID</td>
              <td>App Functionality</td>
            </tr>
            <tr>
              <td>Purchases</td>
              <td>Purchase history (subscription status only)</td>
              <td>App Functionality</td>
            </tr>
            <tr>
              <td>Usage Data</td>
              <td>Product interaction (session counts and durations)</td>
              <td>
                App Functionality, Analytics is <strong>not</strong> selected
              </td>
            </tr>
            <tr>
              <td>Diagnostics</td>
              <td>Crash and performance data</td>
              <td>
                <strong>Not collected</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>Data used to track you</strong>: none.
        <br />
        <strong>Data not linked to you</strong>: none.
      </p>
      <p>
        Answer <strong>No</strong> to &quot;Do you or your third-party partners use data for
        tracking?&quot;
      </p>
      <p>
        Note for review: audio is streamed for the live interview and is not stored by the
        developer. Declare it as User Content, App Functionality.
      </p>

      <h2>Appendix B. Google Play Data safety</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Data type</th>
              <th>Collected</th>
              <th>Shared</th>
              <th>Optional</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Personal info: name, email address, user IDs</td>
              <td>Yes</td>
              <td>No</td>
              <td>Name optional</td>
              <td>App functionality, Account management</td>
            </tr>
            <tr>
              <td>Health and fitness: health info</td>
              <td>Yes</td>
              <td>No</td>
              <td>Yes</td>
              <td>App functionality, Personalisation</td>
            </tr>
            <tr>
              <td>Financial info: purchase history</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>App functionality</td>
            </tr>
            <tr>
              <td>Audio: voice or sound recordings</td>
              <td>Yes, processed not stored</td>
              <td>Yes, to the voice provider as a processor</td>
              <td>No, required for the interview feature</td>
              <td>App functionality</td>
            </tr>
            <tr>
              <td>Files and docs</td>
              <td>Yes, CV text; the file itself is not retained</td>
              <td>No</td>
              <td>Yes</td>
              <td>App functionality</td>
            </tr>
            <tr>
              <td>App activity: app interactions</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>App functionality, Fraud prevention</td>
            </tr>
            <tr>
              <td>Messages: other in-app messages</td>
              <td>Yes, support messages</td>
              <td>No</td>
              <td>Yes</td>
              <td>Customer support</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Also declare: <strong>data is encrypted in transit</strong>,{' '}
        <strong>users can request data deletion</strong>, and give the in-app path (Profile, Delete
        account) plus the web URL <strong>https://urhired.ie/delete-account</strong> required by
        Play&apos;s account deletion policy.
      </p>

      <h2>Appendix C. Sub-processor list</h2>
      <p>Publish this list and update it before adding anyone new.</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Sub-processor</th>
              <th>Role</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Ireland Ltd / Google LLC</td>
              <td>Authentication, app integrity</td>
              <td>EU, US</td>
            </tr>
            <tr>
              <td>OpenAI Ireland Ltd / OpenAI LLC</td>
              <td>CV and session text processing</td>
              <td>EU, US</td>
            </tr>
            <tr>
              <td>ElevenLabs Inc.</td>
              <td>Live voice interview</td>
              <td>US</td>
            </tr>
            <tr>
              <td>RevenueCat Inc.</td>
              <td>Subscription status</td>
              <td>US</td>
            </tr>
            <tr>
              <td>
                Vercel
              </td>
              <td>Server and database hosting</td>
              <td>
                Ireland
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </LegalPage>
  )
}
