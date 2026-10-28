# StudentBuddy – Team Big-5

Simulatieproject 2026 (UCLL) · Scrum-team met 2 sprints · klant: de studentencoach

## 1. Wat is StudentBuddy?

StudentBuddy is een **eenvoudige, gebruiksvriendelijke en responsieve website** die studenten helpt om hun studie te **organiseren** én om te **ontspannen**. Geen login, geen account: je opent de site en je kan meteen aan de slag, op laptop of smartphone.

### Het idee in één zin
Eén plek waar een student studietips vindt, zijn taken bijhoudt en even kan ontspannen met een korte oefening.

### De drie hoofdonderdelen (MVP)

| Onderdeel | Wat doet het? |
|---|---|
| **Studietips** | Een overzicht van praktische tips (plannen, concentreren, examens...), gegroepeerd per categorie. |
| **Takenlijst** | De student voegt taken toe, vinkt ze af en verwijdert ze. De lijst blijft bewaard in de browser (geen login nodig). |
| **Ontspanningsoefeningen** | Korte oefeningen (bv. ademhaling, nek en schouders loshalen) met stap-voor-stap uitleg en een timer. |

### Extra's (pas na het MVP!)
Dark mode · Pomodoro-timer · motiverende quote van de dag

### Voorstel technische aanpak
Zo simpel mogelijk, zodat iedereen mee kan en we geen tijd verliezen aan setup:
- **HTML + CSS + JavaScript** (geen framework, geen backend)
- Taken bewaren via **localStorage**
- Tips en oefeningen staan als data in een JS-/JSON-bestand
- Code op GitHub, backlog op GitHub Projects (kanban)

> Dit is een voorstel. Bevestig het kort in Discord zodat het hele team akkoord is.

---

## 2. Team en rollen

| Rol | Naam |
|---|---|
| Product Owner | Adrian |
| Scrum Master | Kacper |
| Developer | Thor |
| Developer | Rawend |
| Developer | David |

Iedereen ontwikkelt mee. Adrian en Kacper houden daarnaast hun eigen taken (backlog/prioriteiten en Scrum-proces).

---

## 3. De 6 user stories

Alle stories volgen het formaat "Als ... wil ik ... zodat ..." en hebben minstens 2 acceptatiecriteria.

### US1 – Startpagina en navigatie
**Als** student **wil ik** een duidelijke startpagina met een menu **zodat** ik snel bij tips, taken of oefeningen raak.
- [ ] Het menu geeft toegang tot Studietips, Takenlijst en Ontspanning.
- [ ] De navigatie werkt op laptop én smartphone (bv. hamburgermenu op klein scherm).
- [ ] Alle pagina's delen dezelfde header, footer en basisstijl.

### US2 – Studietips bekijken
**Als** student **wil ik** studietips per categorie bekijken **zodat** ik beter leer plannen en studeren.
- [ ] Er zijn minstens 10 tips verdeeld over minstens 3 categorieën.
- [ ] Ik kan filteren op categorie.
- [ ] De tips zijn goed leesbaar op smartphone.

### US3 – Taken toevoegen, afvinken en verwijderen
**Als** student **wil ik** taken toevoegen, afvinken en verwijderen **zodat** ik overzicht hou over wat ik nog moet doen.
- [ ] Ik kan een taak toevoegen via een invoerveld. Een lege taak wordt niet toegevoegd.
- [ ] Ik kan een taak afvinken (doorgestreept) en weer terugzetten.
- [ ] Ik kan een taak verwijderen.

### US4 – Taken blijven bewaard
**Als** student **wil ik** dat mijn taken bewaard blijven **zodat** ik ze niet kwijt ben als ik de pagina sluit.
- [ ] Na het herladen van de pagina staat mijn lijst er nog.
- [ ] Ik zie hoeveel taken nog open staan.
- [ ] Ik kan filteren op alle / open / afgewerkt.

### US5 – Overzicht van ontspanningsoefeningen
**Als** student **wil ik** een overzicht van korte ontspanningsoefeningen **zodat** ik kan kiezen wat bij mij past.
- [ ] Er zijn minstens 4 oefeningen, elk met titel, duur en korte beschrijving.
- [ ] Ik kan een oefening openen om de uitleg stap voor stap te lezen.
- [ ] Het overzicht werkt op laptop en smartphone.

### US6 – Oefening uitvoeren met timer
**Als** student **wil ik** een oefening begeleid uitvoeren met een timer **zodat** ik niet zelf de tijd moet bijhouden.
- [ ] Ik kan een timer starten, pauzeren en resetten.
- [ ] Bij een ademhalingsoefening is er een visuele hulp (bv. cirkel die groter en kleiner wordt).
- [ ] Na afloop zie ik een duidelijke melding dat de oefening klaar is.

---

## 4. Werkverdeling (3 developers, 2 stories elk)

De verdeling is zo gekozen dat iedereen aan **een eigen pagina met eigen bestanden** werkt. Dat geeft minder merge-conflicten op GitHub.

### Thor – Basis en Studietips (US1 + US2)
| Ticket | Taak |
|---|---|
| T-1 | Projectstructuur opzetten (mappen, `index.html`, `style.css`) en pushen. **Doe dit als eerste**, de anderen bouwen hierop voort. |
| T-2 | Header, footer en responsief menu (US1) |
| T-3 | Gedeelde basisstijl (kleuren, lettertype, knoppen) zodat alles hetzelfde oogt |
| T-4 | Studietips-pagina met 10+ tips in `tips.js` (US2) |
| T-5 | Filter op categorie (US2) |

### Rawend – Takenlijst (US3 + US4)
| Ticket | Taak |
|---|---|
| R-1 | Pagina `taken.html` met invoerveld en lijst (US3) |
| R-2 | Taak toevoegen met validatie (geen lege taken) (US3) |
| R-3 | Taak afvinken en verwijderen (US3) |
| R-4 | Bewaren in localStorage en laden bij opstarten (US4) |
| R-5 | Teller open taken en filter alle/open/afgewerkt (US4) |

### David – Ontspanningsoefeningen (US5 + US6)
| Ticket | Taak |
|---|---|
| D-1 | Pagina `ontspanning.html` met kaartjes per oefening (US5) |
| D-2 | Oefeningen als data in `oefeningen.js` (minstens 4, met stappen en duur) (US5) |
| D-3 | Detailweergave met uitleg stap voor stap (US5) |
| D-4 | Timer met start, pauze en reset (US6) |
| D-5 | Ademhalingsanimatie en eindmelding (US6) |

### Voorgestelde mappenstructuur
```
studentbuddy/
├── index.html          (Thor)
├── css/style.css       (Thor, gedeeld)
├── tips.html           (Thor)
├── js/tips.js          (Thor)
├── taken.html          (Rawend)
├── js/taken.js         (Rawend)
├── ontspanning.html    (David)
├── js/oefeningen.js    (David)
├── js/timer.js         (David)
└── README.md
```

---

## 5. Wat moet er nog gebeuren?

### Voor het team
- [ ] User stories US1 t.e.m. US6 als issues in GitHub aanmaken en aan de developers toewijzen (op het bord staan nu enkel User story 1 t.e.m. 3).
- [ ] Per story de bijhorende `[DEV]`-tickets aanmaken (zie tabellen hierboven) en op het kanban bord zetten.
- [ ] Sprint 2 plannen: sprintdoel en sprint backlog vastleggen.
- [ ] Afspreken wie wie nakijkt (zie punt 6).

### Planning en deadlines (uit de team charter)
| Datum | Wat |
|---|---|
| 28/10 | Sprint review, retrospective (mad/sad/glad) en sprintplanning sprint 2 |
| 1/11 | Retrospective en reflectie sprint 1 indienen |
| 30/11 - 9/12 | Rest van sprint 2: MVP afwerken, UI verbeteren, testen, bugfixes |
| 9/12 | Sprint review en retrospective sprint 2 tijdens de les |
| 13/12 | Retrospective en reflectie sprint 2 + user stories en sprintplanning indienen |

### Na het MVP (alleen als alles af is)
- [ ] Dark mode
- [ ] Pomodoro-timer (kan op `timer.js` van David verderbouwen)
- [ ] Motiverende quote van de dag

---

## 6. Afspraken om samen te werken

### Git-werkwijze
1. Haal altijd eerst de laatste code binnen: `git pull`
2. Maak per ticket een eigen branch, bv. `feature/taken-toevoegen`
3. Commit vaak, met duidelijke berichten (bv. `Taak afvinken toegevoegd`)
4. Open een **Pull Request** naar `main` en zet het ticket op **In review**
5. Iemand anders kijkt na en keurt goed, daarna pas mergen
6. Werk nooit rechtstreeks op `main`

### Wie kijkt wie na?
Zo kijkt iedereen precies 1 persoon na:

| Auteur | Nagekeken door |
|---|---|
| Thor | Rawend |
| Rawend | David |
| David | Thor |

### Definition of Done
Een user story is pas klaar als:
- [ ] ze voldoet aan **alle acceptatiecriteria**
- [ ] ze **getest** is op laptop én smartphone
- [ ] ze **nagekeken** is door een ander teamlid
- [ ] de code op **GitHub** staat
- [ ] ze **goedgekeurd** is door de Product Owner (Adrian)

### Communicatie
- Kanaal: **Discord**, antwoord binnen 24 uur
- Daily Scrum: 15 minuten tijdens de les (wat deed ik, wat ga ik doen, wat blokkeert mij?)
- Beslissingen en afspraken altijd in Discord schrijven
- Loop je vast of lukt iets niet? Verwittig op tijd en vraag hulp

### Kanban-kolommen
Het GitHub-bord gebruikt Backlog, Ready, In progress, In review en Done. Verplaats je ticket zelf naar de juiste kolom.
