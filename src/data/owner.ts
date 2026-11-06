/**
 * Betreiberdaten – zentrale Quelle für Impressum, Datenschutz, Kontakt und Footer.
 * Quelle: Impressum und Kontaktbereich der bisherigen Website.
 *
 * NOCH OFFEN – nur eintragen, wenn vorhanden/zutreffend (nie raten):
 * - USt-IdNr. bzw. Wirtschafts-IdNr. (§ 5 Abs. 1 Nr. 6 DDG) -> vatId
 * - Kleinunternehmer nach § 19 UStG -> smallBusiness (nur für Preisangaben/Rechnungen relevant)
 * - Handwerksrolle/Kammer, falls eingetragen (§ 5 Abs. 1 Nr. 5 DDG) -> chamber
 */
export const owner = {
  name: 'Daniel Frietsch',
  business: 'Dienstleistungen rund um Haus und Garten',
  street: 'Großweiererstraße 60',
  postalCode: '77855',
  city: 'Achern-Großweier',
  phone: { display: '07841 5501', href: 'tel:+4978415501' },
  mobile: { display: '+49 173 179 32 41', href: 'tel:+491731793241' },
  fax: { display: '+49 7841 6676976' },
  email: 'danielfrietsch@t-online.de',
  domain: 'www.dienstleistungen-daniel-frietsch.com',
  vatId: null as string | null,
  chamber: null as string | null,
} as const;
