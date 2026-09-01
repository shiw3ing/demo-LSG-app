/* Shared mail dataset + read-state helpers, used by mailbox.html and mail-detail.html. */

var MAIL_PAGE_SIZE = 10;

/* Mailbox for JOHN KANG. Children: BEN KANG (enlistment-age), CHLOE KANG (K2).
   Mail spans 1 Jan 2025 (when this mailbox started) to today. */
var MAIL_DATA = [
  { id: 3, date: '2026-02-16', title: 'Please file your income tax — Notice of Assessment for 2025', initialRead: false, agency: 'IRAS – Inland Revenue Authority of Singapore', body: [
    { type: 'p', text: 'Dear Sir/Madam,' },
    { type: 'p', text: 'You are required to file your income tax return for the Year of Assessment 2025. Please file by 18 April 2026 to avoid penalties.' },
    { type: 'fields', heading: 'Filing details', items: [
        { label: 'Year of Assessment', value: '2025' },
        { label: 'Filing due date', value: '18 Apr 2026' }
      ] },
    { type: 'button', label: 'Start filing' },
    { type: 'divider' },
    { type: 'list', heading: 'Before you file', items: [
        'Have your income details ready, including employment income, rental income, and any other sources.',
        'Check if you’re eligible for any tax reliefs or rebates before submitting.',
        'Most employment income is pre-filled if your employer participates in the Auto-Inclusion Scheme.'
      ] },
    { type: 'p', text: 'Filing late or providing inaccurate information may result in penalties or further action under the Income Tax Act.' },
    { type: 'p-contact', before: 'For enquiries, contact IRAS at ', bold: '1800 356 8300', after: '.' }
  ] },
  { id: 4, date: '2026-05-11', title: 'Your payable tax for 2025 has been computed', initialRead: false, agency: 'IRAS – Inland Revenue Authority of Singapore', body: [
    { type: 'p', text: 'Dear Sir/Madam,' },
    { type: 'p', text: 'Based on the income you declared, your tax payable for the Year of Assessment 2025 has been computed. Details are in your Notice of Assessment.' },
    { type: 'fields', heading: 'Payment details', items: [
        { label: 'Year of Assessment', value: '2025' },
        { label: 'Tax payable', value: '$1,240.00' },
        { label: 'Payment mode', value: 'GIRO – Monthly' }
      ] },
    { type: 'button', label: 'Review and manage payment' },
    { type: 'divider' },
    { type: 'list', heading: 'Payment options', items: [
        { runs: [{ text: 'GIRO', bold: true }, { text: ' — sign up for interest-free monthly instalments deducted automatically from your bank account.' }] },
        { runs: [{ text: 'PayNow QR', bold: true }, { text: ' — scan and pay directly from your banking app.' }] },
        { runs: [{ text: 'AXS or internet banking', bold: true }, { text: ' — pay via your bank’s bill payment service.' }] }
      ] },
    { type: 'p', text: 'A late payment penalty of 5% will be imposed on any tax that remains unpaid after the due date.' },
    { type: 'p-contact', before: 'For enquiries, contact IRAS at ', bold: '1800 356 8300', after: '.' }
  ] },
  { id: 5, date: '2025-06-24', title: 'Your passport is due for renewal', initialRead: true, agency: 'ICA – Immigration & Checkpoints Authority', body: [
    { type: 'p', text: 'Dear Sir/Madam,' },
    { type: 'p', text: 'Our records show that your Singapore passport will be expiring soon. Renew it early to avoid any disruption to your travel plans.' },
    { type: 'fields', heading: 'Passport details', items: [
        { label: 'Passport number', value: 'K••••12A' },
        { label: 'Expiry date', value: '24 Dec 2026' }
      ] },
    { type: 'button', label: 'Renew passport' },
    { type: 'divider' },
    { type: 'list', heading: 'Before you apply', items: [
        'Have a recent passport-sized photo taken according to ICA’s photo guidelines.',
        'Your current passport must be surrendered when you collect your new one.',
        'Processing typically takes about 5 working days for normal applications.'
      ] },
    { type: 'p-contact', before: 'For enquiries, contact ICA at ', bold: '6391 6100', after: '.' }
  ] },
  { id: 6, date: '2025-09-20', title: 'NRIC renewal reminder — required as you turn 55', initialRead: false, agency: 'ICA – Immigration & Checkpoints Authority', body: [
    { type: 'p', text: 'Dear Sir/Madam,' },
    { type: 'p', text: 'As you’re turning 55 this year, you’ll need to re-register your NRIC. Please do this before your next birthday to pay the subsidised fee of $10.' },
    { type: 'button', label: 'Re-register NRIC' },
    { type: 'p', text: 'Under the National Registration Act, it’s an offence not to re-register before your 56th birthday. You may be charged the full re-registration fee of $50.' },
    { type: 'divider' },
    { type: 'list', heading: 'Special circumstances', items: [
        { runs: [{ text: 'Having trouble applying?', bold: true }, { text: ' A family member can submit the application for you. You’ll still need to collect your NRIC in person.' }] },
        { runs: [{ text: 'If you are residing abroad,', bold: true }, { text: ' re-register within one year of returning to Singapore.' }] },
        { runs: [{ text: 'If you lost your physical NRIC', bold: true }, { text: ', report the loss and apply for a replacement online. Replacement fees apply.' }] }
      ] }
  ] },
  { id: 7, date: '2025-03-11', title: 'You’ve downloaded ANNA LIM’s death certificate with a mail acknowledgment', initialRead: true, agency: 'ICA – Immigration & Checkpoints Authority', body: [
    { type: 'p', text: 'Dear JOHN KANG,' },
    { type: 'p', text: 'As requested, the digital death certificate of ANNA LIM is attached in this email.' },
    { type: 'fields', heading: 'Details of deceased', items: [
        { label: 'NRIC, FIN, or passport number of deceased', value: 'S••••567B' },
        { label: 'Death certificate number', value: '492075K' },
        { label: 'Date of death (DD/MM/YYYY)', value: '05/03/2025' }
      ] },
    { type: 'p', runs: [
        { text: 'Use the death certificate to ' },
        { text: 'apply for a burial or cremation permit', link: true, external: true },
        { text: '. You can do it yourself or engage a funeral director.' }
      ] },
    { type: 'divider' },
    { type: 'p', text: 'If you have enquiries about:' },
    { type: 'list', items: [
        { title: 'What to do when someone dies', runs: [
            { text: 'Read our guide on ' },
            { text: 'what to do when death happens', link: true }
          ] },
        { title: 'Death and stillbirth registration', runs: [
            { text: 'Contact ICA at ' },
            { text: 'go.gov.sg', link: true },
            { text: ' or ' },
            { text: '6391 6100', link: true },
            { text: ' (Mondays to Fridays, 8am to 5:30pm. Closed on Saturdays, Sundays and public holidays).' }
          ] },
        { title: 'Burial or cremation permits, and other post-death matters', runs: [
            { text: 'Contact NEA at ' },
            { text: '6225 5632', link: true }
          ] }
      ] },
    { type: 'p', runs: [
        { text: 'For further assistance, reach out to us using our ' },
        { text: 'Contact us form', link: true },
        { text: '.' }
      ] },
    { type: 'file', name: 'Death certificate for ANNA LIM.pdf', size: '284 KB' }
  ] },
  { id: 8, date: '2025-01-20', title: 'Birth registration for LUCAS KANG has been completed and is ready for collection', initialRead: true, agency: 'ICA – Immigration and Checkpoints Authority', body: [
    { type: 'p', text: 'Dear Parent/Guardian,' },
    { type: 'p', text: 'The birth registration for LUCAS KANG has been completed. The birth certificate is ready for collection.' },
    { type: 'list', heading: 'Collection details', items: [
        { runs: [{ text: 'For the physical birth certificate, you must collect it ' }, { text: 'within 30 days', bold: true }, { text: ' from the date of this notice.' }] },
        'A digital birth certificate is sent for your reference.',
        'Your child’s details can be found in your records.'
      ] },
    { type: 'button', label: 'Book an appointment' },
    { type: 'button-secondary', label: 'View child details' },
    { type: 'divider' },
    { type: 'p', text: 'If you are unable to collect in person, an authorised representative may collect on your behalf with a signed Letter of Authorisation and a photocopy of your NRIC.' },
    { type: 'p-contact', before: 'For enquiries, contact ICA at ', bold: '6391 6100', after: '.' },
    { type: 'file', name: 'Birth certificate for LUCAS KANG.pdf', size: '312 KB' }
  ] },
  { id: 9, date: '2025-04-08', title: 'Your Advance Care Plan (ACP) has been registered', initialRead: false, agency: 'MOH – Ministry of Health', body: [
    { type: 'p', text: 'Dear Sir or Madam,' },
    { type: 'p', text: 'Your Advance Care Plan (ACP) has been successfully registered.' },
    { type: 'p', text: 'Log in to My Legacy vault to view your registered ACP.' },
    { type: 'button', label: 'View registered ACP' },
    { type: 'divider' },
    { type: 'heading-lg', text: 'What’s next?' },
    { type: 'list', heading: 'Share your registered ACP with your Nominated Healthcare Spokespersons (NHS) on My Legacy', items: [
        'Add your NHS as Trusted Persons on My Legacy so they can view your registered ACP.',
        'Consider sharing your ACP with loved ones who are not your NHS to inform them about your healthcare preferences.'
      ] },
    { type: 'list', heading: 'Consider reviewing your ACP', items: [
        'Review your ACP when you reach a new life stage or if your beliefs and preferences change.',
        'Keeping your ACP updated ensures it reflects your latest wishes.',
        'To make updates, prepare a new ACP on My Legacy.'
      ] }
  ] },
  { id: 10, date: '2025-11-14', title: 'Your Advance Medical Directive (AMD) has been registered', initialRead: false, agency: 'MOH – Ministry of Health', body: [
    { type: 'p', text: 'Dear Sir or Madam,' },
    { type: 'p', text: 'Your Advance Medical Directive (AMD) has been successfully registered with the AMD Registry.' },
    { type: 'p', text: 'An AMD is a legal document you sign in advance, to inform the doctor treating you in future that you do not want any extraordinary life-sustaining treatment to be used to prolong your life should you become terminally ill and unconscious.' },
    { type: 'button', label: 'View AMD details' },
    { type: 'divider' },
    { type: 'heading', text: 'Frequently asked questions' },
    { type: 'qa', items: [
        { q: 'Can I revoke my AMD after registration?', a: 'Yes. You may revoke your AMD at any time by informing the Registrar in writing, regardless of your mental state.' },
        { q: 'Does my doctor need to know I have an AMD?', a: 'Your AMD only takes effect when you become terminally ill and unconscious, and at least 2 doctors certify this. Your family or doctor can check the AMD Registry when this happens.' }
      ] },
    { type: 'p-contact', before: 'For enquiries, contact MOH at ', bold: '1800 333 9999', after: '.' }
  ] },
  { id: 11, date: '2025-07-29', title: 'Your Lasting Power of Attorney has been successfully registered', initialRead: false, agency: 'MSF – Ministry of Social and Family Development', body: [
    { type: 'p', text: 'Dear Sir or Madam,' },
    { type: 'p', text: 'Your Lasting Power of Attorney (LPA) has been successfully registered with the Office of the Public Guardian.' },
    { type: 'p', text: 'An LPA lets your appointed donee(s) make decisions and act on your behalf in matters relating to your personal welfare and property affairs, should you lose mental capacity in future.' },
    { type: 'button', label: 'View details' },
    { type: 'button-secondary', label: 'Update LPA' },
    { type: 'divider' },
    { type: 'p-contact', before: 'For enquiries, contact OPG at ', bold: '1800 226 6663', after: '.' }
  ] },
  { id: 12, date: '2025-08-09', title: 'You’ve been registered as a Nominated Healthcare Spokesperson for WENDY LIM', initialRead: true, agency: 'MOH – Ministry of Health', body: [
    { type: 'p', text: 'Dear Sir or Madam,' },
    { type: 'p', text: 'This is a confirmation that you have been registered as WENDY LIM’s Nominated Healthcare Spokesperson (NHS).' },
    { type: 'p', text: 'As an NHS, you’ll be responsible for conveying the individual’s care preferences when they’re no longer able to do so.' },
    { type: 'p', text: 'You can view this registration and WENDY LIM’s Advance Care Plan (ACP) anytime on My Legacy vault.' },
    { type: 'button', label: 'View details' },
    { type: 'divider' },
    { type: 'p-contact', before: 'For further assistance, email us at ', bold: 'enquiries@mylegacy.gov.sg', after: '.', kind: 'email' }
  ] },
  { id: 13, date: '2026-01-15', title: 'Government payouts and benefits for 2026 have been announced', initialRead: true, agency: 'MOF – Ministry of Finance', body: [
    { type: 'p', text: 'Dear Sir/Madam,' },
    { type: 'p', text: 'As part of Budget 2026, the Government has announced a new round of payouts and benefits to support Singaporeans. Your eligibility and estimated amounts are ready for viewing.' },
    { type: 'button', label: 'View benefit statement' },
    { type: 'divider' },
    { type: 'list', heading: 'What’s included', items: [
        'Cost-of-Living Special Payment, credited directly to your bank account or PayNow-linked NRIC.',
        'CDC Vouchers for use at participating hawkers and heartland merchants.',
        'U-Save and S&CC rebates, credited automatically if you’re eligible.'
      ] },
    { type: 'p', text: 'Payout amounts vary based on your income, property type, and other eligibility criteria.' },
    { type: 'p-contact', before: 'For enquiries, contact us at ', bold: '1800 222 2888', after: '.' }
  ] },
  { id: 14, date: '2026-06-20', title: 'National service notice for DANIEL KANG', initialRead: false, agency: 'Mindef – Ministry of Defence', body: [
    { type: 'p', text: 'Dear Sir/Madam,' },
    { type: 'heading', text: 'Your child will be preparing for National Service soon' },
    { type: 'p', text: 'DANIEL KANG will soon be preparing for National Service (NS). There will be a few steps for him to complete before enlistment.' },
    { type: 'p', text: 'You and your child can keep track of his upcoming NS milestones and what he needs to do.' },
    { type: 'button', label: 'View milestone' },
    { type: 'divider' },
    { type: 'heading', text: 'Frequently asked questions' },
    { type: 'qa', items: [
        { q: 'When does my son need to register for NS?', a: 'Male Singapore citizens and Permanent Residents are required to register for NS.' },
        { q: 'When will my son enlist?', a: 'NS liability begins at age 18. The actual enlistment date may be later, for example, if he is eligible for deferment to complete his studies.' },
        { q: 'What happens after registration?', a: 'He will go through the required pre-enlistment steps, which may include submitting information and attending a medical screening. His enlistment notice will be issued closer to his enlistment date.' },
        { q: 'Do I need to do anything as a parent?', aRuns: [
            { text: 'Most NS registration and pre-enlistment actions will need to be completed by your son. You can help him keep track of important dates and requirements. Read our guide on ' },
            { text: 'Preparing for NS', link: true, href: 'https://www.life.gov.sg/guides/pe/preparing-for-ns' },
            { text: '.' }
          ] }
      ] }
  ] },
  { id: 15, date: '2025-05-14', title: 'BEN KANG is now eligible to apply for his first NRIC', initialRead: false, agency: 'ICA – Immigration & Checkpoints Authority', body: [
    { type: 'p', text: 'Dear Parent/Guardian,' },
    { type: 'p', text: 'BEN KANG has turned 15 and is now eligible to apply for his first National Registration Identity Card (NRIC).' },
    { type: 'p', runs: [{ text: 'If your child is attending government/government-aided schools,', bold: true }, { text: ' arrangements will be made for the IC to be collected at the schools, upon completion of registration.' }] },
    { type: 'p', runs: [{ text: 'If your child is homeschooled or not attending government/government-aided schools,', bold: true }] },
    { type: 'list', tight: true, items: [
        { runs: [{ text: 'completion of your ' }, { text: 'online registration', link: true }] },
        { runs: [{ text: 'make an appointment with ICA', link: true }, { text: ' for your biometrics enrolment.' }] }
      ] }
  ] },
  { id: 16, date: '2026-07-10', title: 'P1 Registration Exercise for 2027 opens soon for CHLOE KANG', initialRead: false, agency: 'MOE – Ministry of Education', body: [
    { type: 'p', text: 'Dear Parent/Guardian,' },
    { type: 'p', text: 'The Primary One (P1) Registration Exercise for 2027 will open soon for CHLOE KANG. Register during the phase that applies to your child to secure a place in a primary school.' },
    { type: 'p', text: 'Log in to the registration portal to check your child’s eligible phase and registration dates.' },
    { type: 'button', label: 'Registration portal' },
    { type: 'divider' },
    { type: 'heading', text: 'Frequently asked questions' },
    { type: 'qa', items: [
        { q: 'How can I help CHLOE KANG transition from K2 to P1?', aRuns: [
            { text: 'Moving from preschool to primary school is a big change. Read ' },
            { text: 'a parent’s guide to transitioning from K2 to P1', link: true, href: 'https://familiesforlife.sg/pages/Article/A-parent-s-guide-to-transitioning-from-K2-to-P1' },
            { text: ' for tips on preparing your child.' }
          ] },
        { q: 'Where can I find more information on P1 registration?', aRuns: [
            { text: 'Visit MOE’s ' },
            { text: 'P1 registration', link: true, href: 'https://www.moe.gov.sg/primary/p1-registration' },
            { text: ' page for the full registration timeline, phases, and eligibility criteria.' }
          ] }
      ] }
  ] },
  { id: 18, date: '2026-03-02', title: 'Your assigned polling station for Polling Day', initialRead: true, agency: 'ELD – Elections Department', body: [
    { type: 'p', text: 'Dear Sir/Madam,' },
    { type: 'p', text: 'You are registered as an elector for the upcoming Polling Day. Your assigned polling station is shown below.' },
    { type: 'button', label: 'View details' },
    { type: 'divider' },
    { type: 'list', heading: 'What to bring', items: [
        'Your original NRIC or a valid photo identification document.',
        'You do not need to bring your poll card, but it will help speed up verification at the polling station.'
      ] },
    { type: 'p', text: 'Voting is compulsory for all registered electors. If you’re unable to vote, you must submit a valid reason to the Elections Department, or your name may be removed from the register of electors.' },
    { type: 'p-contact', before: 'For enquiries, contact ELD at ', bold: '6377 3121', after: '.' }
  ] }
];

var MAIL_READ_STORAGE_KEY = 'lifesg_mail_read_ids';

function mailGetReadIds() {
  try {
    var raw = localStorage.getItem(MAIL_READ_STORAGE_KEY);
    var ids = raw ? JSON.parse(raw) : [];
    return Array.isArray(ids) ? ids : [];
  } catch (e) {
    return [];
  }
}

function mailIsRead(mail, readIds) {
  return mail.initialRead || readIds.indexOf(mail.id) !== -1;
}

function mailMarkRead(id) {
  try {
    var ids = mailGetReadIds();
    if (ids.indexOf(id) === -1) {
      ids.push(id);
      localStorage.setItem(MAIL_READ_STORAGE_KEY, JSON.stringify(ids));
    }
  } catch (e) {
    /* localStorage unavailable — read state just won't persist, non-fatal */
  }
}

function mailGetById(id) {
  for (var i = 0; i < MAIL_DATA.length; i++) {
    if (MAIL_DATA[i].id === id) return MAIL_DATA[i];
  }
  return null;
}

function mailFormatDisplayDate(isoDate) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var parts = isoDate.split('-');
  var year = parts[0], month = parseInt(parts[1], 10) - 1, day = parseInt(parts[2], 10);
  return day + ' ' + months[month] + ' ' + year;
}
