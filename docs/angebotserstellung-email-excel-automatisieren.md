# Angebotsprozess automatisieren: E-Mail → Excel → Angebot

**Praxisleitfaden für kleine Unternehmen** · Stand: 11. Oktober 2026

**Die wichtigste Frage:** Muss hierfür wirklich ein KI-Agent eingesetzt werden – oder reicht ein verlässlicher, regelbasierter Workflow?

Viele Teams kopieren Angaben aus Kunden-E-Mails in Excel, erstellen daraus Angebote und holen eine Freigabe ein. Die Arbeit ist wiederkehrend, aber nicht immer vollständig standardisiert. Wer sie direkt mit einem Sprachmodell automatisiert, übersieht leicht unvollständige Daten, Preisfehler und unklare Zuständigkeiten.

Dieser Leitfaden ist frei verfügbar. Er enthält keine erfundenen Kundenergebnisse und ist keine Rechts-, Steuer- oder Datenschutzberatung.

## 1. So sieht der Beispielprozess aus

Ein frei erfundenes kleines Dienstleistungsunternehmen:

| Schritt | Eingang | Ergebnis | Menschliche Entscheidung |
| --- | --- | --- | --- |
| Anfrage empfangen | E-Mail | Fallnummer + Rückfragebedarf | Ist die Anfrage echt und vollständig? |
| Daten erfassen | Name, gewünschte Leistung, Termin | Strukturierte Datensätze | Fehlen wichtige Angaben? |
| Angebot kalkulieren | Freigegebene Preisliste | Entwurf der Kalkulation | Gibt es Sonderkonditionen? |
| Angebot erzeugen | Vorlagenfelder | PDF-/Dokument-Entwurf | Preis, Steuerangaben, Gültigkeit prüfen |
| Freigeben und senden | Geprüftes Angebot | Versand + Protokoll | Wer darf verbindliche Angebote verschicken? |

**Beispiel, keine Kundenreferenz:** Die Tabelle ist bewusst allgemein. Keine automatische Einsparung oder Genauigkeitsquote wird behauptet.

## 2. Wo klassische Regeln ausreichen

Beginne ohne generative KI, wenn die Eingaben strukturiert sind:

- E-Mail-Formular enthält definierte Felder.
- Produkt- oder Leistungspreise stammen aus einer gepflegten, freigegebenen Tabelle.
- Ein fehlender Pflichtwert löst **eine Rückfrage statt einer Annahme** aus.
- Jede Bestellung hat eine eindeutige Referenz und einen nachvollziehbaren Status.
- Mitarbeiter geben jeden verbindlichen Preis und den Versand frei.

Dafür können bestehende Mailregeln, Excel-Tabellen, Microsoft Power Automate oder eine andere Workflow-Anwendung ausreichend sein. Die konkrete Toolwahl hängt von Bestandssystemen und Datenrechten ab.

## 3. Wann KI überhaupt zu prüfen ist

Ein Sprachmodell kann *als Entwurfshilfe* sinnvoll werden, wenn unstrukturierte Texte in **prüfbare Vorschlagsfelder** umgewandelt werden müssen, etwa:

- Kundinnen und Kunden beschreiben Anliegen mit freien Worten.
- Mehrere Leistungen werden in einer Nachricht vermischt.
- Angaben sind widersprüchlich oder unvollständig.

**Kontrollgrenze:** KI darf nicht eigenständig endgültige Preise erfinden, verbindliche Angebote versenden oder unprüfbare Dokumente als Beweis behandeln. Automatisch extrahierte Angaben sind Vorschläge, keine bestätigten Geschäftsdaten.

## 4. Kostenloses Prüfblatt zum Kopieren

Kopiere die folgende Tabelle in dein internes Dokument und fülle sie für **einen** Prozess mit eigenen, nicht sensiblen Angaben aus.

| Prüffeld | Eintrag |
| --- | --- |
| Prozessstart (Trigger) | |
| Verantwortliche Person | |
| Anzahl Fälle je Woche (gemessen/geschätzt) | |
| Durchschnittliche Minuten je Fall | |
| Fehlerrate und typische Ausnahmefälle | |
| Welcher Schritt folgt klaren Regeln? | |
| Wo ist menschliche Freigabe zwingend? | |
| Datenschutz-/Zugriffsprüfung offen? | |
| Minimaler Pilotumfang (z. B. 20 interne Testfälle) | |
| Erfolgskriterium (vorher/nachher) | |
| Abbruchkriterium und Rückfall auf Handarbeit | |

**Nicht geschätzte Kosten als gesparte Euro verkaufen.** Erfasse vor dem Versuch eine Ausgangsmessung. Berechne Zeitunterschiede erst nach echten Testfällen; berücksichtige Einrichtung, Kontrolle, Fehlerkorrektur und laufenden Betrieb.

**Direkt nutzbare Datei:** [Kostenloses Excel-kompatibles Kontrollblatt (.csv, Semikolon-getrennt)](angebotsprozess-kontrollblatt.csv) – 18 Prüfpunkte, keine Registrierung. Die Beispielwerte sind ausdrücklich fiktiv; echte Kundendaten gehören nur in entsprechend geschützte Unternehmenssysteme.

## 5. Fünf Tests vor einem Pilot

1. **Vollständiger Normalfall:** Stimmen alle Pflichtfelder, Kalkulation und Freigabeschritte?
2. **Fehlende Angabe:** Gibt der Workflow eine Rückfrage aus, statt etwas zu erfinden?
3. **Ausnahmefall:** Stoppt er bei Sonderrabatten oder widersprüchlichen Preisen?
4. **Doppelte Nachricht:** Entsteht nicht versehentlich ein zweites Angebot?
5. **Ausfall:** Können Menschen zum bisherigen Verfahren zurückkehren, ohne Daten zu verlieren?

Keine dieser Fragen lässt sich allein durch einen überzeugenden KI-Text beantworten. Die Ergebnisse müssen im tatsächlichen Betrieb beobachtet werden.

## 6. Nächste Schritte – kostenlos oder mit Workbook

**Kostenlos:** [PHI NEXUS Instant – Workflow-Selbstcheck](https://phi-nexus-market-proof.vercel.app/instant/?utm_source=github&utm_medium=free_guide&utm_campaign=workflow_email_excel_q4_2026). Der Check läuft im Browser und analysiert die *Beschreibung* von Kontrollen, nicht die reale technische Sicherheit.

**Optionales Bezahlprodukt:** [CERBERRUS Operational X-Ray Workbook (Deutsch, 29 € auf Gumroad)](https://smokycharly.gumroad.com/l/cyrada?utm_source=github&utm_medium=educational_guide&utm_campaign=xray_sales_q4_2026&utm_content=email_excel_automation). Enthält zusätzliche Offline-Arbeitsdateien für eine strukturierte Prozessentscheidung, Bewertungsmatrix, Pilot-Brief und Entscheidungsvorlage. **Kein Abo, kein zertifiziertes Audit, keine Erfolgsgarantie.** Die digitale Bestellung läuft bei Gumroad; Zahlungs- und Rückgabebedingungen stehen dort.

[Originales ATHENA Offline Decision Toolkit](../README.md) · [Produktvorschau mit fiktivem Fall](https://phi-nexus-market-proof.vercel.app/xray/)

> **Transparenz:** Dieses offene Lernmaterial ist kostenlos. Das verlinkte CERBERRUS Workbook ist ein getrenntes, optionales kommerzielles Produkt. Hier werden keine Kundendaten gesammelt.
