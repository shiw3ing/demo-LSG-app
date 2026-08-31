/* Shared mail dataset + read-state helpers, used by mailbox.html and mail-detail.html. */

var MAIL_PAGE_SIZE = 10;

/* Mailbox for JOHN KANG. Children: BEN KANG (enlistment-age), CHLOE KANG (K2).
   Mail spans 1 Jan 2025 (when this mailbox started) to today. */
var MAIL_DATA = [
  { id: 1, date: '2025-02-18', title: 'Please file your income tax — Notice of Assessment for 2024', initialRead: false },
  { id: 2, date: '2025-05-06', title: 'Your payable tax for 2024 has been computed', initialRead: true },
  { id: 3, date: '2026-02-16', title: 'Please file your income tax — Notice of Assessment for 2025', initialRead: false },
  { id: 4, date: '2026-05-11', title: 'Your payable tax for 2025 has been computed', initialRead: false },
  { id: 5, date: '2025-06-24', title: 'Your passport is due for renewal', initialRead: true },
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
    { type: 'file', name: 'Death certificate for ANNA LIM.pdf', size: '284 KB' },
    { type: 'p', runs: [
        { text: 'For further assistance, reach out to us using our ' },
        { text: 'Contact us form', link: true },
        { text: '.' }
      ] }
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
      ] },
    { type: 'p-contact', before: 'For further assistance, email us at ', bold: 'enquiries@mylegacy.gov.sg', after: '.', kind: 'email' }
  ] },
  { id: 10, date: '2025-11-14', title: 'Your Advance Medical Directive (AMD) has been registered', initialRead: false },
  { id: 11, date: '2025-07-29', title: 'Your Lasting Power of Attorney has been successfully registered', initialRead: false },
  { id: 12, date: '2025-08-09', title: 'You’ve been registered as a Nominated Healthcare Spokesperson for WENDY LIM', initialRead: true, agency: 'MSF, OPG – Office of the Public Guardian', body: [
    { type: 'p', text: 'Dear Sir or Madam,' },
    { type: 'p', text: 'This is a confirmation that you have been registered as WENDY LIM’s Nominated Healthcare Spokesperson (NHS).' },
    { type: 'p', text: 'As an NHS, you’ll be responsible for conveying the individual’s care preferences when they’re no longer able to do so.' },
    { type: 'p', text: 'You can view this registration and WENDY LIM’s Advance Care Plan (ACP) anytime on My Legacy vault.' },
    { type: 'button', label: 'View on My Legacy' },
    { type: 'divider' },
    { type: 'p-contact', before: 'For further assistance, email us at ', bold: 'enquiries@mylegacy.gov.sg', after: '.', kind: 'email' }
  ] },
  { id: 13, date: '2026-01-15', title: 'Government payouts and benefits for 2026 have been announced', initialRead: true },
  { id: 14, date: '2026-06-20', title: 'National service notice for DANIEL KANG', initialRead: false, agency: 'Mindef – Ministry of Defence', body: [
    { type: 'p', text: 'Dear Sir/Madam,' },
    { type: 'heading', text: 'Your child will be due for National Service soon' },
    { type: 'p', text: 'DANIEL KANG is approaching the age when he will need to serve National Service (NS). From age 16½, he will need to start the NS registration and pre-enlistment process via NS HOME.' },
    { type: 'p', text: 'You and your child can keep track of his upcoming NS milestones and what he needs to do.' },
    { type: 'button', label: 'Track status' },
    { type: 'divider' },
    { type: 'heading', text: 'Frequently asked questions' },
    { type: 'qa', items: [
        { q: 'When does my son need to register for NS?', a: 'Male Singapore citizens and Permanent Residents are required to register for NS upon reaching 16½ years old.' },
        { q: 'When will my son enlist?', a: 'NS liability begins at age 18. The actual enlistment date may be later, for example, if he is eligible for deferment to complete his studies.' },
        { q: 'What happens after registration?', a: 'He will go through the required pre-enlistment steps, which may include submitting information and attending a medical screening. His enlistment notice will be issued closer to his enlistment date.' },
        { q: 'Do I need to do anything as a parent?', aRuns: [
            { text: 'Most NS registration and pre-enlistment actions will need to be completed by your son. You can help him keep track of important dates and requirements. Read our guide on ' },
            { text: 'Preparing for NS', link: true, href: 'https://www.life.gov.sg/guides/pe/preparing-for-ns' },
            { text: '.' }
          ] }
      ] }
  ] },
  { id: 15, date: '2025-05-14', title: 'BEN KANG is now eligible to apply for his first NRIC', initialRead: false },
  { id: 16, date: '2026-07-10', title: 'P1 Registration Exercise for 2027 opens soon for CHLOE KANG', initialRead: false },
  { id: 17, date: '2025-09-01', title: 'Your CPF Retirement Account has been created as you turn 55', initialRead: true },
  { id: 18, date: '2026-03-02', title: 'Your assigned polling station for Polling Day', initialRead: true }
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
