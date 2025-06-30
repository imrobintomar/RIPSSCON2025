import WaveScrollEffect from '../components/WaveScrollEffect';
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div>
      {/* Header Section - Similar to other pages */}
      <div className="header">
        <div className="inner-header flex">
          <h1>Privacy Policy</h1>
        </div>

        {/*Waves Container*/}
        <div>
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
        {/*Waves end*/}
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">PRIVACY NOTICE</h1>

      <p className="mb-4">
        RIPSSCON Organizers of Conference   including our subsidiaries and affiliates worldwide (“RIPSSCON”, “we”, “our” or “us”), puts great efforts in making sure that the personal data we process is safe and used properly, and that our data practices are properly communicated to our partners and participants.
      </p>

      <p className="mb-4">
        This Privacy Policy describes how we collect, store, use and disclose the following types of personal data:
      </p>

      <p className="mb-4">
        (i) Participant data concerning our website visitors and/or event participants, attendees, lecturers and speakers (collectively, “Participants”), who register for events and/or webinars and/or online courses that we organize or take part in (collectively “Events”) and who visit or engage with our websites (such as website.com and their subdomains), our apps, blogs, message boards, chat rooms or other similar forums, online ads and content, emails or other communications under our control (collectively, the “Sites”);
      </p>

      <p className="mb-4">
        (ii) Partner data concerning our partners and/or customers, sponsors, exhibitioners and association societies and their representatives (collectively “Partners”) who use RIPSSCON event management platform and services or who otherwise cooperate with RIPSSCON in organizing, promoting and executing the Events (together with the Sites and Events – the “Services”).
      </p>

      <p className="mb-4">
        Specifically, this Privacy Policy describes our practices regarding:
      </p>

      <ul className="list-disc list-inside mb-4">
        <li>Data Collection</li>
        <li>Data Uses</li>
        <li>Data Location</li>
        <li>Data Retention</li>
        <li>Data Sharing</li>
        <li>Cookies and Tracking Technologies</li>
        <li>Communications</li>
        <li>Data Security</li>
        <li>Data Subject Rights</li>
        <li>Roles and Responsibilities</li>
        <li>Additional Information and Contact Details</li>
      </ul>

      <p className="mb-4">
        Please read this Privacy Policy carefully and make sure that you fully understand and agree to it.
      </p>

      <p className="mb-4">
        You are not legally required to provide us with any personal data, and may do so (or avoid doing so) at your own free will. If you do not wish to provide us with your personal data, or to have it processed by us or any of our Partners, or Service Providers (per Section 5 below), please avoid any interaction with us or any use of our Services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Data Collection</h2>

      <p className="mb-4">
        RIPSSCON process data regarding our Participants and Partners (“you” or “your”). Such data is typically collected and generated through automatic means, directly from you, through your interaction with us or with our Services; through our Partners or through third-party services, social media, analytics tools, events we organize or take part in, and other business initiatives.
      </p>

      <h3 className="text-xl font-semibold mb-2">(i) Participant’s data:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Participant account information: registration number, e-mail address, year of birth, any comments on blogs, message boards, chat rooms or other similar forums, preferred language, networking preferences, professional interests and event schedule, and hashed password or other information used for authentication and access control (if applicable); Participants who attend as speakers may also provide their pictures.</li>
        <li>Participant contact information: full name, mobile phone number, address, company name, address and VAT number (if applicable), and additional information submitted by the Participant and/or their organization, or by our Partners;</li>
        <li>Participant registration information: educational, employment and professional background such as title, license, role and industry, professional expertise, abstract, documentation or proof of your professional status (if required for a special fee), and when applicable travel grant request and accessibility and dietary requirements.</li>
        <li>Participants photo image: personal photo image of participants.</li>
        <li>Other information: If you are a speaker or a lecturer then please note that additional information may be processed such as the content of your lecture. You may also be recorded during the event in which you participate.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">(ii) Partner’s Data:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Partner contact information: name, title, company, e-mail address, phone number, picture, and additional information submitted by the Partner and/or or their organization;</li>
        <li>Partner organization information: company name and affiliation, physical address and payment method. To the extent that any of the foregoing solely relates to a non-human entity, we will not regard it as personal data, and this Privacy Policy will not apply to it.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">(iii) Additional Data collected across Participants and Partners</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Usage information: connectivity, technical and aggregated usage data such as, IP addresses, geolocation, device data (such as type, OS, device id, browser version, locale and language settings used), performance and activity logs, session recordings, activity on our Services, and the cookies and pixels installed or utilized on your device. When presenting your badge at an event, your physical presence may also be recorded and the personal data contained therein may be processed.</li>
        <li>Direct interactions and communications with us: this information usually include chats, surveys, feedbacks, recordings and transcripts of your calls, and other information you provide to us, including correspondence with us (e.g., for user experience, support and training purposes and any other data you upload);</li>
        <li>Payment information: this information is relevant for the payment we collect in the provision of our Services. It may consist of credit card or bank account number, IBAN, SWIFT code and payment preferences. Supplemental documentation may be required according to the Service provided. To the extent that any of the foregoing solely relates to a non-human entity, we will not regard it as personal data, and this Privacy Policy will not apply to it.</li>
        <li>Congress recordings and photographs: the congresses (both In-Person and Virtual) may be broadcasted online on the Internet to include coverage of all relevant events, including lectures and public areas in the conference venue. These recordings may also be available on certain internet sites after the end of each Congress.</li>
      </ul>

      <p className="mb-4">
        In addition, video and sound recording and still photography carried out during conference , including but not limited to crowd shots, group videos and photographs, and video and still photography may include attendees, speakers, and sponsors’ images.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Data Uses</h2>

      <p className="mb-4">
        RIPSSCONs processes the personal data described in Section 1 as necessary for the performance of our Services; to comply with our legal and contractual obligations; and to support our legitimate interests in maintaining, improving and advertising our Services. These include understanding how our Services are used, and how our Services, campaigns and other activities are performing; gaining insights which help us dedicate our resources and efforts more efficiently; marketing, advertising and selling our Services; providing customer service and technical support; and protecting and securing our Services, ourselves and the organizations and individuals we engage with.
      </p>

      <p className="mb-4">
        Partner use of Personal Data: At certain cases our Partners shall further process the personal information for the management of their operation including to further the goals of the Partner, statsytical analysis, promotion of future educational initiatives and developing the Partner membership.
      </p>

      <p className="mb-4">
        Important note: RIPSSCONs operates in many countries around the world. Therefore, please note that if you reside or are using the Services in a territory governed by privacy laws under which “consent” is the only or most appropriate legal basis for the processing personal data in the manners described in this Policy (in general, or specifically with respect to the types of personal data you expect or elect to be or have processed by or via the Services), your acceptance of our Terms of Use and this Privacy Policy will be deemed as your consent to the processing of your personal data for all purposes detailed herein. If you wish to revoke such consent, please contact us at test@gmail.com.
      </p>

      <p className="mb-4">
        Specifically, we use your data for the following purposes:
      </p>

      <ul className="list-disc list-inside mb-4">
        <li>to facilitate, operate, activate, and provide our Services, including determining your initial and continued eligibility to use our Services;</li>
        <li>to authenticate your identity and allow you to access and use our Services;</li>
        <li>to process your activities such as event registration, abstract submission, attendance and accreditations;</li>
        <li>to provide you with customer care, assistance and technical support services;</li>
        <li>to further develop, customize and improve the Services, and to improve your user experience, based on common or personal preferences, experiences and difficulties;</li>
        <li>to facilitate and optimize our marketing and advertising campaigns, ad management and sales operations, and to manage and deliver advertisements for our products and Services more effectively;</li>
        <li>to contact you with general or personalized service-related messages, or with promotional messages, in accordance with Section 7 below, and to facilitate, sponsor and offer certain events and promotions;</li>
        <li>to support and enhance our data security measures, including for the purposes of preventing and mitigating the risks of fraud, error or any illegal or prohibited activity;</li>
        <li>to create aggregated statistical data, inferred non-personal data, or anonymized or pseudonymized data (rendered non-personal), which we or our Partners may use to provide and improve our respective services, or for any other purpose (such as estimating and reporting total audience size and traffic);</li>
        <li>to comply with our legal, regulatory, compliance and contractual obligations;</li>
        <li>We may make public use of personal photo image of participants; and as otherwise described to you at the point of collection.</li>
        <li>Conference recordings may be broadcasted online on the Internet and may be available on certain internet sites after the end of each Conference . In addition, video and sound recording and still photography carried out during congresses, including but not limited to crowd shots, group videos and photographs, and video and still photography may include attendees, speakers, and sponsors’ images. All these may be used across our programs, applications and on print literature of our events, including for marketing and commercial purposes.</li>
      </ul>

      <p className="mb-4">
        We do not sell your personal information for the intents and purposes of the Central Consumer Protection Authority  (CCPA).
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. Data Location</h2>

      <p className="mb-4">
        We and our authorized Service Providers (per Section 5 below) maintain, store and process personal data in India  and other locations as reasonably necessary for the proper performance and delivery of our Services, or as may be required by law.
      </p>

      <p className="mb-4">
        While privacy laws may vary between jurisdictions, RIPSSCONs, its subsidiaries, affiliates and Service Providers are each committed to protect personal data in accordance with this Privacy Policy, customary industry standards, and such appropriate lawful mechanisms and contractual terms requiring adequate data protection, regardless of any lesser legal requirements that may apply in the jurisdiction to which such data may be transferred.
      </p>

      <p className="mb-4">
        For a full list of RIPSSCONs’s locations, please click here.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>

      <p className="mb-4">
        We retain your personal data for as long as it is reasonably necessary to provide our Services; to maintain and expand our relationship and provide you with our Services and offerings; to comply with our legal and contractual obligations; or to protect ourselves from any potential disputes (e.g., as required by laws applicable to log-keeping, records and bookkeeping, and in order to have proof and evidence concerning our relationship, should any legal issues arise following your discontinuance of use), all in accordance with applicable laws and regulations, and where applicable, also with our Partner’s reasonable instructions and as further stipulated in our Data Processing Addendum (DPA) and other commercial agreements with such Partner.
      </p>

      <p className="mb-4">
        Please note that except as required by applicable law or our specific agreements with you, we will not be obligated to retain your personal data for any particular period, and we are free to securely delete it or restrict access to it for any reason and at any time, with or without notice to you. If you have any questions about our data retention policy, please contact us by e-mail at test@gmail.com.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Data Sharing</h2>

      <p className="mb-4">
        Legal Compliance: in exceptional circumstances, we may disclose or allow government and law enforcement officials access to your personal data, in response to a subpoena, search warrant or court order (or similar requirement), or in compliance with applicable laws and regulations, with or without notice to you. Such disclosure or access may occur if we believe in good faith that: (a) we are legally compelled to do so; (b) disclosure is appropriate in connection with efforts to investigate, prevent, or take action regarding actual or suspected illegal activity, or other wrongdoing; or (c) such disclosure is required to protect our legitimate business interests, including the security or integrity of our products and Services.
      </p>

      <p className="mb-4">
        Service Providers: we may engage selected third-party companies and individuals to perform services complementary to our own. Such Service Providers include hosting and server co-location services, communications and content delivery networks (CDNs), internet service providers, operating systems and platform, data analytics services, marketing and advertising services, data and cyber security services, fraud detection and prevention services, hotel and venue providers and on-site contractors, billing and payment processing services, web analytics, e-mail and SMS distribution and monitoring services, session or activity recording services, remote access services, performance measurement, data optimization services, social and advertising networks, content providers, support and customer relation management systems, and our business, legal, financial and compliance advisors (collectively, “Service Providers“). These Service Providers may have access to your personal data, depending on each of their specific roles and purposes in facilitating, supporting and enhancing our Services, and may only use it for such purposes.
      </p>

      <p className="mb-4">
        Third-Party Websites and Services: our Services may include links to third-party websites, and integrations with third-party services. Such websites and third-party services, and any information you process, submit, transmit or otherwise use with such websites and third-party services, are governed by such third-party’s terms and privacy practices and policies, and not by this Privacy Policy. We encourage you to carefully read the terms and privacy policies of such website and third-party services. To the extent that our Service Providers contact you in order to offer or promote our Service, they may additionally interest you in their own services. Should you decide to engage in such activities with RIPSSCONs’s Service Providers, please note that such engagement is beyond the scope of RIPSSCONs’s Terms and Use and Privacy Policy and will therefore be covered by our Service Provider’s terms and privacy policy.
      </p>

      <p className="mb-4">
        Sharing Data with our Partners and their representatives: Participants’ data is shared with the administrator or other representatives of the relevant Partner, meaning, such representatives may access it on behalf of the Partner, and will be able to monitor, process and analyze the personal data contained therein. Please note that RIPSSCONs is not responsible for and does not control any further disclosure, use or monitoring by or on behalf of such Partner, that itself also acts as the Data Controller of such data (as further described in Section 10 below).
      </p>

      <p className="mb-4">
        Sharing Data with other Participants: registration and participation in our Events is only allowed for identified Participants (i.e., no anonymous participation is allowed). By participating in any of these Events you are required to identify yourself to us and to the other Participants, by name and country of origin or company. We may make public use of personal photo image of participants. These details will be visible to other registered attendees in both physical and online events.
      </p>

      <p className="mb-4">
        Sharing Public Information: we may share information that you voluntarily make public, including information that you post on any blogs, message boards, chat rooms, educational portals or other similar forums whether or not such forums are operated or owned by RIPSSCONs. Since such public information can be accessed by others and used by any member of the public, such use by third parties is beyond our control. With your consent, we may also display personal testimonials of satisfied Partners on the Event website in along with your name.
      </p>

      <p className="mb-4">
        RIPSSCONs Subsidiaries and Affiliated Companies; Change of Control: we may share personal data internally within our group, for the purposes described in this Privacy Policy. In addition, should RIPSSCONs International Organizers of Conference  or any of its subsidiaries or affiliates undergo any change in control or ownership, including by means of merger, acquisition or purchase of substantially all or part of its assets, or will be considered or found eligible for a governmental grant and/or a potential investment, personal data may be shared with the parties involved in such an event. If we believe that such event might materially affect your personal data then stored with us, we will notify you of this event and the choices you may have via e-mail or prominent notice on our Services.
      </p>

      <p className="mb-4">
        Additional Sharing: RIPSSCONs may share your personal data in additional manners, pursuant to your explicit approval, or if we are legally obligated to do so, or if we have successfully rendered such data non-personal, non-identifiable and anonymous. We may transfer, share or otherwise use non-personal and non-identifiable data at our sole discretion and without the need for further approval.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking Technologies</h2>

      <p className="mb-4">
        RIPSSCONs and our Service Providers use cookies and other technologies for performance, tracking, analytics, personalization purposes and in order to provide you with a better experience. We may share non-identifiable/aggregated extracts of such information with our partners for our legitimate business purposes.
      </p>

      <p className="mb-4">
        Cookies: cookies are small text files that are stored through the browser on your computer or mobile device (for example, Google Chrome or Safari) when you visit a website. Some cookies are removed when you close your browser session – these are the “Session Cookies”. Some last for longer periods and are called “Persistent Cookies”. We use both types of cookies to facilitate the use of the Services’ features and tools. Whilst we do not change our practices in response to a “Do Not Track” signal in the HTTP header from a browser or mobile application, you can manage your cookies preferences, including whether or not to accept them and how to remove them, through your browser settings. Please bear in mind that disabling cookies may complicate or even prevent you from using the Services. For more information regarding cookies, you may find the following websites useful: www.allaboutcookies.org, www.youronlinechoices.co.uk.
      </p>

      <p className="mb-4">
        Google Analytics: we use Google Analytics to collect information about the use of our Services. Google Analytics collects information such as how often you visit the Services, which pages you visited when they do so, and which other sites they used prior to coming to our Services. We do not merge the information collected through the use of Google Analytics with personally identifiable data. Google’s ability to use and share information collected by Google Analytics about your visits to and use of the Services is restricted by the Google Analytics Terms of Service and the Google Privacy Policy. You can learn more about how Google collects and processes data specifically in connection with Google Analytics here. Further information about your option to opt-out of these analytics services is available here.
      </p>

      <p className="mb-4">
        To learn more about our cookies practices, please visit our Cookie Policy.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Communications</h2>

      <p className="mb-4">
        We engage in service and promotional communications, through e-mail, phone, SMS and notifications.
      </p>

      <p className="mb-4">
        Service Communications: we may contact you with important information regarding our Services. For example, we may send you notifications (through any of the means available to us) of changes or updates to our Services, billing issues, payment issues, login attempts or password reset instructions, etc. Our Partners may also use our Services to send the relevant Participants, messages and other updates regarding your use of the Services.
      </p>

      <p className="mb-4">
        Notifications and Promotional Communications: we may also notify you about new features, additional offerings, events, webinars, special opportunities or any other information we think you will find valuable. We may provide such notices through any of the contact means available to us (e.g., SMS, phone, mobile or e-mail), through the Services, or through our marketing campaigns on any other sites or platforms.
      </p>

      <p className="mb-4">
        If you do not wish to receive promotional communications, you may notify RIPSSCONs by sending an e-mail to: test@gmail.com.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Data Security</h2>

      <p className="mb-4">
        We and our hosting services implement systems, applications and procedures to secure your personal data, to minimize the risks of theft, damage, loss of information, or unauthorized access or use of information. When personal information is transferred to us over the Internet, we encrypt it using Transfer Layer Security (TLS) encryption technology or similar technology. These measures provide sound industry-standard security, however, although we make efforts to protect your privacy and data, we cannot and do not guarantee the absolute protection and security of any personal data stored with us or with any third-parties.
      </p>

      <h2 className="text-2xl font-semibold mb-4">9. Data Subject Rights</h2>

      <p className="mb-4">
        Individuals have rights concerning their personal data any applicable law, including the EU General Data Protection Regulation (GDPR), or the Central Consumer Privacy Act (CCPA). such rights include the right to request access, rectification or erasure of your personal data held with RIPSSCONs, or to restrict or object to such personal data’s processing, or to port such personal data, or the right to equal services and prices (each to the extent available to you under the laws which apply to you). If you wish to exercise any of these rights please contact us by e-mail at: test@gmail.com.
      </p>

      <p className="mb-4">
        Please note that such rights are not absolute. There are instances where applicable law or regulatory requirements allow or require us to refuse to provide some or all of the personal data that we hold about you. In the event that we cannot accommodate your request, we will inform you of the reasons why, subject to any legal or regulatory restrictions.
      </p>

      <p className="mb-4">
        Please also note that we may require additional information, including certain personal data, in order to authenticate and process your request. Such additional information may be then retained by us for legal purposes (e.g., as proof of the identity of the person submitting the request), in accordance with Section 4 above. We may redact from the data which we will make available to you, any personal data related to others.
      </p>

      <h2 className="text-2xl font-semibold mb-4">10. Roles and Responsibilities</h2>

      <p className="mb-4">
        Certain data protection laws and regulations, such as the GDPR and the CCPA, typically distinguish between two main roles for parties processing personal data: the “Data Controller” or “Business”, who determines the purposes and means of processing; and the “Data Processor” or “Service Provider”, who processes the data on behalf of the Data Controller. Below we explain how these roles apply to our Services, to the extent that such laws and regulations apply.
      </p>

      <p className="mb-4">
        RIPSSCONs may either be a Data Controller or a Data Processor of Participants’ data.
      </p>

      <p className="mb-4">
        When RIPSSCONs collaborates with a partner (e.g., an association) for the management of the Conference , it may act as a Joint Controller with the other party, and both parties shall be able to process the Personal Information. In this case RIPSSCONs shall have an arrangement with the Partner according to which RIPSSCONs is responsible to the exercise of rights of data subjects, including to the provision of information, as required by applicable law, with respect to the collection and use of personal data by the parties. Each Party is responsible to take adequate technical, physical and organizational security measures to protect personal data against unauthorized or unlawful access, alteration, deletion, damage, loss or inaccessibility with respect to Personal Information processed by it.
      </p>

      <p className="mb-4">
        In certain instances, when we assume a more active role in the organization of an Event, we assume the role of an independent Data Controller (solely to the extent applicable under law), as set forth in this Privacy Policy. In such instances, our Service Providers processing such data will assume the role of Data Processors.
      </p>

      <p className="mb-4">
        RIPSSCONs is a Data Controller with respect to our Partner’s and their representatives’ data. Such data is processed by RIPSSCONs for our own purposes (as described in Section 2 above), as an independent Data Controller.
      </p>

      <h2 className="text-2xl font-semibold mb-4">11. Additional Information and Contact Details</h2>

      <p className="mb-4">
        Updates and Amendments: We may update and amend this Privacy Policy from time to time by posting an amended version on our Services. The amended version will be effective as of the date it is published. We will provide prior notice if we believe any substantial changes are involved via any of the communication means available to us or via Services. After such notice period, all amendments shall be deemed accepted by you.
      </p>

      <p className="mb-4">
        External Links: while our Services may contain links to other websites or services, we are not responsible for their privacy practices. We encourage you to pay attention when you leave our Services for the website or application of such third-parties, and to read the privacy policies of each and every website and service you visit. This Privacy Policy applies only to our Services.
      </p>

      <p className="mb-4">
        Our Services are not designed to attract children under the age of 16: we do not knowingly collect personal data from children and do not wish to do so. If we learn that a person under the age of 16 is using the Services, we will attempt to prohibit and block such use and will make our best efforts to promptly delete any personal data stored with us with regard to such child. If you believe that we might have any such data, please contact us by e-mail at test@gmail.com
      </p>

      <p className="mb-4">
        Questions, concerns or complaints: if you have any comments or questions regarding our Privacy Policy, or if you have any concerns regarding your personal data held with us, or if you wish to make a complaint about how your personal data is being processed by RIPSSCONs, you can contact us at: test@gmail.com
      </p>

      <p className="mb-4">
        Effective Date: 10/05/2025
      </p>
    </div>
      <WaveScrollEffect /> {/* Add WaveScrollEffect */}
    </div>
  );
};

export default PrivacyPolicyPage;