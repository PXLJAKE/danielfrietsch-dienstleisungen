# Website Daniel Frietsch

Mehrseitige statische Website: Astro (`output: 'static'`), TypeScript, eigenes CSS. Kein Server, keine Datenbank,
kein Formular. Betreiberdaten stehen zentral in `src/data/owner.ts`.

## Deployment

Plesk zieht den Branch `master` per Git und liefert statisch aus. Dort gibt es keinen Build-Schritt.
Deshalb ist `dist/` im Repo. Der Document Root in Plesk muss auf `dist/` zeigen, nie auf das Repo-Wurzelverzeichnis.
`public/.htaccess` wird beim Build nach `dist/` kopiert. Sie enthält bewusst keine SPA-Rewrite-Regel,
weil die Seite mehrseitig ist und unbekannte Pfade 404 liefern müssen.

## Arbeitsweise bei jeder Änderung

1. Entwickle auf einem eigenen Branch, nie direkt auf `master`.
2. Führe vor jedem Commit `npm run typecheck` und `npm run build` aus und committe den neu gebauten `dist/`-Ordner mit.
3. Erstelle nach jeder fertigen Änderung einen Pull Request nach `master` und merge ihn sofort, ohne nachzufragen.
4. Fasse danach kurz auf Deutsch zusammen, was sich geändert hat, und sag ehrlich, was getestet wurde und was nicht.

## Regeln für Datenschutz, Sicherheit und Recht

- Nichts von Dritten im Browser laden: Schriften über `@fontsource`, Bilder nur von der eigenen Domain.
  Keine Analytics, Pixel, Social-Plugins, direkt eingebetteten Karten oder Videos. Externe Dienste nur als Link.
- Keine Cookies und kein Browser-Speicher, dann bleibt die Seite ohne Cookie-Banner.
- Jede neue Datenquelle (Formular, Dienst, Skript, Einbettung) gleichzeitig in `src/pages/datenschutz.astro`
  und in der CSP in `public/.htaccess` eintragen, sonst nicht einbauen.
- Die CSP kommt ohne `'unsafe-inline'` aus: keine Inline-Skripte, keine `style`-Attribute.
- Impressum nach § 5 DDG. Keine Verweise auf TMG/TTDSG, keinen OS-Plattform-Link, keine Disclaimer-Floskeln.
- Impressum- und Datenschutz-Link im Footer jeder Seite (kommt aus `src/layouts/Base.astro`).
- Angaben nie erfinden (Qualifikationen, Preise, Steuerstatus, Erfahrung). Fehlendes als Code-Kommentar, nie sichtbar.
- Keine pauschalen Umweltaussagen wie „nachhaltig“ oder „umweltfreundlich“, keine unbelegten Superlative.
- Personenfotos nur mit nachweisbarer Einwilligung, nur Bilder mit geklärten Rechten.
- Barrierefreiheit: echte Links und Buttons, Tastaturbedienung, sinnvolle `alt`-Texte, ausreichender Kontrast.
- `npm audit` muss 0 Schwachstellen zeigen. Secrets gehören nie ins Repo (es ist öffentlich).
