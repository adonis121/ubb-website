# UBB Bausanierung GmbH — Redesign Brief v1.0

**Datum:** 12.06.2026 · **Plattform:** Custom Code · **Sprachen:** DE + EN
**Begleitdokument:** `ubb-design-system.html` (Design Language „Substanz")

---

## 1. Verifizierte Fakten (Live-Site, Juni 2026)

| Fakt | Wert |
|---|---|
| Firma | UBB Bausanierung GmbH, Biergasse 1, 79426 Buggingen |
| Geschäftsführer | Besim Hotnjani · HRB 711948, Amtsgericht Freiburg |
| Kontakt | +49 7631 1730287 · Fax 1731455 · info@ubb-bausanierung.de · Instagram |
| Gegründet | 2010 · 15 Fachleute · Partnernetzwerk Elektro/Sanitär |
| Bewertungen | 4,3/5 aus 40 Google-Bewertungen |
| Einzugsgebiet | Freiburg, Müllheim, Buggingen, Bad Krozingen, Breisach, Lörrach, Rheinfelden |
| Aktueller Stack | WordPress + Elementor 3.22 + OceanWP-Template |

**Bestätigte Kritikpunkte der Analyse:**
- OceanWP-Platzhalter-Testimonials live sichtbar („Best Pool Maintenance", Bilder von pool.oceanwp.org) — größter Glaubwürdigkeitsschaden
- Doppelter Inhaltsblock auf der Startseite (Estrich-Abschnitt 2×)
- Platzhaltertext „Baustelle in ORT" und „In this area you can add reviews…"
- Maschinell wirkende Übersetzungsfloskeln („Führen Sie Ihr Zuhause mit der besten Pflege ein")
- Keine echten Projektreferenzen mit Daten, kein Team, keine Zertifikate

## 2. Positionierung

**Markenidee: „Substanz."** — Bestandsgebäude haben Substanz; UBB erneuert sie so, dass sie Generationen überdauert. Premium durch Präzision und echte Zahlen, nicht durch Luxus-Vokabular.

- **Ton DE:** sachlich, selbstbewusst, handwerklich präzise. Kurze Sätze. Zahlen statt Adjektive.
- **Ton EN:** für Investoren/Gewerbe — "full-scope renovation partner in southern Baden", Fokus auf Projektabwicklung und Verlässlichkeit.
- **Kernbotschaften:** Alles aus einer Hand · Ein Ansprechpartner · Seit 2010 · Termintreue · Nachhaltige Materialien.

## 3. Sitemap (DE primär, EN gespiegelt)

```
/                          /en/
├─ /sanierung-umbau/       … bestehende URL-Struktur BEIBEHALTEN (SEO!)
│  ├─ bausanierung/  kernsanierung/  umbau/  abbrucharbeiten/
├─ /bodenarbeiten/
│  ├─ estricharbeiten/  bodengestaltung/  bodenbeschichtung/
│  ├─ spachteltechniken/  fliesenarbeiten/  bodenbelaege/
├─ /innenarbeiten/
│  ├─ putz-stuck/  trockenbau/  gipserarbeiten/  malerarbeiten/
├─ /projekte/              NEU — Portfolio mit Filtern + Detailseiten
│  └─ /projekte/[slug]/    NEU — Case Study (Vorher/Nachher, Fakten, Ablauf)
├─ /ueber-uns/             erweitert: Team, Werte, Partnernetzwerk
├─ /standorte/[stadt]/     NEU — echte Stadt-Landingpages (statt Ortsliste)
├─ /projekt-anfragen/      mehrstufiges Formular + WhatsApp
├─ /karriere/              NEU — Fachkräftegewinnung
└─ /impressum/ /datenschutz/
```

**Wichtig:** Bestehende URLs 1:1 übernehmen oder 301-Redirects setzen — die Site rankt bereits lokal.

## 4. Seiten-Blueprints

### Startseite
1. **Hero** — Architekturfoto (Duotone), Headline „Substanz, die Generationen überdauert", Stat-Zeile (15+ Jahre · 15 Fachleute · 4,3★ · 7 Standorte), CTA + Telefon
2. **Leistungen** — 3 nummerierte Service-Cards mit Chips zu Unterseiten
3. **Signature-Projekt** — Vorher/Nachher-Slider, ein echtes Projekt
4. **Warum UBB** — 3 Werte (Komplettlösung / Ein Ansprechpartner / Termintreue), jeweils mit konkretem Beleg
5. **Projekte-Teaser** — 3 Projektkarten mit Fakten → /projekte/
6. **Testimonials** — nur echte Google-Reviews mit Projektkontext, Google-Badge
7. **Einzugsgebiet** — Karte Südbaden mit 7 Orten → Stadt-Seiten
8. **FAQ** (Schema.org FAQPage) → **CTA-Band** → Footer

### Leistungs-Unterseite (Template, 14×)
Hero schmal mit Breadcrumb → Leistungsumfang als Liste → Prozess in 4 Schritten → 2–3 passende Projekte → projektbezogenes FAQ → CTA. Jede Seite: eigener Title/Description, H1 = Leistung + Region.

### Projekt-Detailseite (Template, NEU)
Faktenblock (Ort · Jahr · Fläche · Bauzeit · Gewerke) → Vorher/Nachher-Slider → Galerie → Ablauf-Erzählung (Ausgangslage / Herausforderung / Lösung) → beteiligte Leistungen verlinkt → CTA. **Das ist die wichtigste neue Investition** — 6–8 dokumentierte Projekte reichen für den Start.

### Stadt-Landingpage (Template, 7×)
Individueller Text pro Stadt (kein Duplicate Content!), dort realisierte Projekte, Anfahrt/Einsatzgebiet, lokales FAQ, LocalBusiness-Schema.

## 5. Bilingual-Strategie

- DE unter Root, EN unter `/en/` — nur Hauptseiten spiegeln (Home, 3 Leistungsbereiche, Projekte, Über uns, Kontakt). Stadt-Seiten nur DE.
- `hreflang="de-DE"` / `"en"` + `x-default` auf DE.
- EN-Inhalte professionell übersetzen, nicht maschinell — die aktuelle Site zeigt, wie schädlich Übersetzungsfloskeln wirken.
- Sprachumschalter im Header (DE/EN, Mono-Stil laut Design System), merkt sich Wahl.

## 6. Technik-Empfehlung (Custom Code)

| Bereich | Empfehlung |
|---|---|
| Framework | **Astro** (statisch, perfekte Performance/SEO, i18n eingebaut) — Alternativ Next.js, wenn später App-Features geplant |
| Inhalte | Markdown/MDX-Collections für Projekte + Leistungen — oder Headless CMS (z. B. Decap/Sanity), falls das Team selbst pflegen soll |
| Hosting | Statisch (Cloudflare Pages/Netlify) + Formular-Backend (z. B. eigener Endpoint oder Formspark) |
| Fonts | Archivo / Inter / IBM Plex Mono — **self-hosted** (DSGVO) |
| Karten | Statische Karte oder Twoclick-Consent wie bisher (DSGVO) |
| Schema.org | LocalBusiness + Service + FAQPage + Review |
| Ziel-Metriken | LCP < 2,0 s · CLS < 0,05 · Lighthouse 95+ · Bilder AVIF/WebP |

## 7. Content-Beschaffung (Voraussetzung, vor Entwicklung starten)

1. **Professionelle Fotografie:** 6–8 Projekte, je Vorher/Nachher + Details; Teamfoto; Inhaberporträt — wichtigster Einzelposten des Projekts
2. **Projektdaten** je Referenz: Ort, Jahr, Fläche, Bauzeit, Gewerke, 2–3 Sätze Ablauf
3. **Echte Testimonials:** 6–10 Google-Reviews mit Einverständnis übernehmen, Projektkontext ergänzen
4. **Zertifikate/Mitgliedschaften:** Handwerkskammer, Innungen, Hersteller-Partnerschaften
5. **EN-Übersetzung** durch Fachübersetzer

## 8. Phasenplan

| Phase | Inhalt | Abhängigkeit |
|---|---|---|
| 1 | Design System finalisieren, Homepage-Prototyp, Foto-Briefing raus | Design System v1.0 ✓ |
| 2 | Templates: Leistungsseite, Projektseite, Stadt-Seite; Formular-Flow | Fotos/Projektdaten |
| 3 | Content-Migration DE, 301-Redirects, Schema, Performance-Tuning | Phase 2 |
| 4 | EN-Version, Karriere-Seite, Launch + Search Console Monitoring | Übersetzung |

**Quick Win sofort umsetzbar (alte Site):** Platzhalter-Testimonials und „Baustelle in ORT" entfernen, doppelten Estrich-Block löschen — 30 Minuten Arbeit, deutlicher Glaubwürdigkeitsgewinn bis zum Relaunch.
