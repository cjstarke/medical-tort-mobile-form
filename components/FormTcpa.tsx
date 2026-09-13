import { twMerge } from "tailwind-merge";

export type FormTcpaProps = {
  containerClassName?: string;
  linkClassName?: string;
  textClassName?: string;
  contactLink?: string;
  optOutLink?: string;
  legalCompanyName: string;
  privacyTouLink: string;
  submitBtnText: string;
};

const FormTcpa = ({
  containerClassName,
  linkClassName,
  textClassName,
  contactLink,
  optOutLink,
  legalCompanyName,
  privacyTouLink,
  submitBtnText,
}: FormTcpaProps) => {
  const containerClasses = twMerge("", containerClassName); //Removing: flex flex-col items-center justify-center rounded-b-lg bg-gray-100, may break pages using version v0.3.0 (mistake in design and should be adjusted)
  const linkClasses = twMerge("font-bold underline", linkClassName); //Removing: text-primary, may break pages using version v0.3.0 (mistake in design and should be adjusted)
  const textClasses = twMerge("", textClassName); //Removing: py-10 px-8 text-xs, may break pages using version v0.3.0 (mistake in design and should be adjusted)

  contactLink = contactLink ? contactLink : "#"; //Default link if not passed
  optOutLink = optOutLink ? optOutLink : "#"; //Default link if not passed

  const sbt = submitBtnText.toUpperCase();
  const touUrl = privacyTouLink + "#terms_of_use";
  const esignUrl = privacyTouLink + "#esign_consent";

  return (
    <div id="section-form-tcpa" className={containerClasses}>
      <p className={textClasses}>
        *Required Fields
        <br />
        <br />
        By clicking “AGREE AND {sbt}”, you provide your{" "}
        <a
          className={linkClasses}
          href={esignUrl}
          target="_blank"
          title="E-Sign"
          rel="noreferrer"
        >
          E-Sign
        </a>{" "}
        signature, agree to our{" "}
        <a
          className={linkClasses}
          href={touUrl}
          target="_blank"
          title="Terms of Use"
          rel="noreferrer"
        >
          Terms of Use
        </a>
        , acknowledge our{" "}
        <a
          className={linkClasses}
          href={privacyTouLink}
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
        , and consent to receive marketing offers and messages from or on behalf
        of our client, {legalCompanyName} (the “Company”), regarding the goods
        or services described on this Website, by email, computer, mail,
        telephone call, fax, SMS/MMS text, or other means of electronic,
        telephonic, or written communication, including through the use of an AI
        or automated system and/or AI-generated, artificial, or prerecorded
        voice, at the phone number, email address, and other contact information
        provided above, even if registered on the National Do Not Call Registry
        or similar state or local list. You understand that you are not required
        to consent to automated calls/texts as a condition of purchasing any
        goods or services from the Company, and you may revoke your consent at
        any time by following the directions set forth in the{" "}
        <a
          className={linkClasses}
          href={esignUrl}
          target="_blank"
          title="E-Sign"
          rel="noreferrer"
        >
          E-Sign
        </a>{" "}
        notice. Message and data rates may apply.
      </p>
    </div>
  );
};

export default FormTcpa
