# StudentBuddy – Team Big-5
 
Simulatieproject 2026 (UCLL) · Scrum-team met 2 sprints · klant: de studentencoach
 
## 1. Wat is StudentBuddy?
 
StudentBuddy is een **eenvoudige, gebruiksvriendelijke en responsieve website** die studenten helpt om hun studie te **organiseren** én om te **ontspannen**. Geen login, geen account: je opent de site en je kan meteen aan de slag, op laptop of smartphone.
 
### Het idee in één zin
E�n plek waar een student studietips vindt, zijn taken bijhoudt en even kan ontspannen of focussen met een korte oefening of een pomodoro-timer.
 
### Onderdelen
 
| Onderdeel | Wat doet het? |
|---|---|
| **Homepage met navigatie** | Welkomstpagina met menu naar alle onderdelen. |
| **Studietips** | Praktische tips (plannen, concentreren, examens...), per categorie. |
| **Takenlijst** | Taken toevoegen, afvinken en verwijderen, bewaard in de browser, later ook met deadline. |
| **Ontspanningsoefeningen** | Korte oefeningen met stap-voor-stap uitleg en timer. |
| **Extra's van de klant** | Motiverende quote, dark mode, contactformulier, deadline bij een taak, pomodoro-timer. |
 
### Voorstel technische aanpak
Zo simpel mogelijk, zodat iedereen mee kan en we geen tijd verliezen aan setup:
- **HTML + CSS + JavaScript** (geen framework, geen backend)
- Taken, deadlines en dark mode bewaren via **localStorage**
- Tips, oefeningen en quotes staan als data in een JS-bestand
- Code op GitHub, backlog op GitHub Projects (kanban)
> Dit is een voorstel. Bevestig het kort in Discord zodat het hele team akkoord is.
 
---
 
## 2. Team en rollen
 
Iedereen in het team neemt **2 user stories** op, ook de Product Owner en de Scrum Master. Zo zijn er 10 stories voor 5 personen.
 
| Rol | Naam | Story 1 | Story 2 |
|---|---|---|---|
| Product Owner | Adrian | US1 Homepage met navigatie (#16) | US6 Motiverende quote |
| Scrum Master | Kacper | US2 Eenvoudig en consistent design (#18) | US7 Dark mode |
| Developer | Thor | US3 Studietips bekijken (#2) | US8 Contactformulier |
| Developer | Rawend | US4 Takenlijst bijhouden (#3) | US9 Deadline bij een taak |
| Developer | David | US5 Ontspanningsoefening (#4) | US10 Pomodoro-timer |
 
Adrian en Kacper houden daarnaast hun eigen taken (backlog en prioriteiten, Scrum-proces en kanban bord). Elke persoon krijgt een story uit de basis en een extra die daarbij aansluit: design met dark mode, takenlijst met deadline, ontspanning met pomodoro.
 
> **Volgorde:** US1 (homepage) en US2 (design) moeten **eerst** af zijn, want alle andere pagina's bouwen daarop verder. Dit is een voorstel: leg het voor in Discord, het team beslist samen wie wat neemt.
 
---
 
## 3. De 10 user stories
 
Alle stories volgen het formaat "Als ... wil ik ... zodat ..." en hebben minstens 2 acceptatiecriteria. US1 t.e.m. US5 horen bij het MVP, US6 t.e.m. US10 zijn de extra's die de klant vroeg (alleen bouwen als het MVP af is).
 
| # | Story | GitHub issue | Wie |
|---|---|---|---|
| US1 | Homepage met navigatie | #16 | Adrian |
| US2 | Eenvoudig en consistent design | #18 | Kacper |
| US3 | Studietips bekijken | #2 | Thor |
| US4 | Takenlijst bijhouden | #3 | Rawend |
| US5 | Ontspanningsoefening | #4 | David |
| US6 | Motiverende quote | nieuw aan te maken | Adrian |
| US7 | Dark mode | nieuw aan te maken | Kacper |
| US8 | Contactformulier | nieuw aan te maken | Thor |
| US9 | Deadline bij een taak | nieuw aan te maken | Rawend |
| US10 | Pomodoro-timer | nieuw aan te maken | David |
 
### US1 – Homepage met navigatie (Adrian)
**Als** student **wil ik** een duidelijke homepage met een menu **zodat** ik snel bij tips, taken en oefeningen raak.
- [ ] Het menu geeft toegang tot Studietips, Takenlijst en Ontspanning.
- [ ] De navigatie werkt op laptop én smartphone.
- [ ] De homepage legt in één oogopslag uit wat StudentBuddy is.
### US2 – Eenvoudig en consistent design (Kacper)
**Als** student **wil ik** een eenvoudig en consistent design **zodat** de site makkelijk te gebruiken is op elke pagina.
- [ ] Alle pagina's delen dezelfde header, footer, kleuren en lettertypes in één gedeelde `style.css`.
- [ ] Knoppen, kaarten en formulieren zien er overal hetzelfde uit.
- [ ] Kleuren zijn goed leesbaar (voldoende contrast).
### US3 – Studietips bekijken (Thor)
**Als** student **wil ik** studietips per categorie bekijken **zodat** ik beter leer plannen en studeren.
- [ ] Er zijn minstens 10 tips verdeeld over minstens 3 categorieën.
- [ ] Ik kan filteren op categorie.
- [ ] De tips zijn goed leesbaar op smartphone.
### US4 – Takenlijst bijhouden (Rawend)
**Als** student **wil ik** taken toevoegen, afvinken en verwijderen **zodat** ik overzicht hou over wat ik nog moet doen.
- [ ] Ik kan een taak toevoegen. Een lege taak wordt niet toegevoegd.
- [ ] Ik kan een taak afvinken (doorgestreept) en weer terugzetten, en verwijderen.
- [ ] Na het herladen van de pagina staat mijn lijst er nog (localStorage).
- [ ] Ik zie hoeveel taken nog open staan en kan filteren op alle / open / afgewerkt.
### US5 – Ontspanningsoefening (David)
**Als** student **wil ik** een korte ontspanningsoefening begeleid uitvoeren **zodat** ik even tot rust kom.
- [ ] Er zijn minstens 4 oefeningen met titel, duur en uitleg stap voor stap.
- [ ] Ik kan een timer starten, pauzeren en resetten.
- [ ] Bij een ademhalingsoefening is er een visuele hulp (bv. cirkel die groter en kleiner wordt).
- [ ] Na afloop zie ik een duidelijke melding dat de oefening klaar is.
### US6 – Motiverende quote (Adrian)
**Als** student **wil ik** een motiverende quote zien **zodat** ik gemotiveerd blijf om te studeren.
- [ ] Op de homepage staat een quote uit een lijst van minstens 10 quotes.
- [ ] Een knop toont een nieuwe quote, nooit twee keer dezelfde na elkaar.
### US7 – Dark mode (Kacper)
**Als** student **wil ik** tussen licht en donker kunnen wisselen **zodat** de site comfortabel is om 's avonds te gebruiken.
- [ ] Een knop in de header wisselt tussen licht en donker thema op alle pagina's.
- [ ] Mijn keuze blijft bewaard na het herladen (localStorage).
- [ ] Tekst en knoppen blijven in beide thema's goed leesbaar.
### US8 – Contactformulier (Thor)
**Als** student **wil ik** een bericht kunnen sturen naar het team **zodat** ik feedback of vragen kwijt kan.
- [ ] Het formulier heeft velden voor naam, e-mailadres en bericht.
- [ ] Lege of ongeldige velden geven een duidelijke foutmelding.
- [ ] Na een geldige verzending zie ik een bevestiging.
> Er is geen backend. Spreek als team af of het formulier een `mailto:`-link opent of enkel een bevestiging toont.
 
### US9 – Deadline bij een taak (Rawend)
**Als** student **wil ik** een deadline bij een taak zetten **zodat** ik weet wat het eerst moet.
- [ ] Bij het toevoegen kan ik optioneel een datum kiezen. De deadline staat bij de taak en blijft bewaard.
- [ ] Taken met een verstreken deadline worden duidelijk gemarkeerd.
- [ ] Taken zijn te sorteren op deadline.
### US10 – Pomodoro-timer (David)
**Als** student **wil ik** een pomodoro-timer gebruiken **zodat** ik gefocust studeer met vaste pauzes.
- [ ] De timer telt 25 minuten studeren en daarna 5 minuten pauze, met start, pauze en reset.
- [ ] Ik zie duidelijk of ik in een studeer- of pauzeblok zit, en krijg een melding bij de overgang.
- [ ] Ik zie hoeveel pomodoro's ik al afgewerkt heb.
---
 
## 4. Tickets per persoon
 
Elke story wordt opgesplitst in kleine `[DEV]`-tickets. Zo kan iedereen zelfstandig werken en kan je op het kanban bord zien hoe ver het staat.
 
### Adrian – US1 Homepage + US6 Quote
| Ticket | Taak |
|---|---|
| A-1 | Projectstructuur en `index.html` met hero en secties (**eerst doen**) |
| A-2 | Menu naar alle pagina's, ook op smartphone |
| A-3 | Quotes als data in `js/quote.js` (minstens 10) |
| A-4 | Quote tonen op de homepage met knop "Nieuwe quote" |
 
### Kacper – US2 Design + US7 Dark mode
| Ticket | Taak |
|---|---|
| K-1 | Gedeelde `style.css` met kleuren als CSS-variabelen, typografie en knoppen (**eerst doen**) |
| K-2 | Gedeelde stijl voor kaarten, formulieren en footer |
| K-3 | Donker kleurenschema via CSS-variabelen |
| K-4 | Wisselknop in de header met bewaren in localStorage (`js/theme.js`) |
 
### Thor – US3 Studietips + US8 Contactformulier
| Ticket | Taak |
|---|---|
| T-1 | `tips.html` met 10+ tips in `js/tips.js` |
| T-2 | Filter op categorie |
| T-3 | `contact.html` met velden naam, e-mail en bericht |
| T-4 | Validatie met foutmeldingen en bevestiging na verzenden (`js/contact.js`) |
 
### Rawend – US4 Takenlijst + US9 Deadline
| Ticket | Taak |
|---|---|
| R-1 | `taken.html` met invoerveld en lijst, taak toevoegen met validatie |
| R-2 | Taak afvinken en verwijderen |
| R-3 | Bewaren in localStorage, teller en filter alle/open/afgewerkt |
| R-4 | Datumveld en deadline tonen bij de taak |
| R-5 | Verstreken deadlines markeren en sorteren op deadline |
 
### David – US5 Ontspanning + US10 Pomodoro
| Ticket | Taak |
|---|---|
| D-1 | `ontspanning.html` met kaartjes en data in `js/oefeningen.js` |
| D-2 | Detailweergave met stappen en timer (`js/timer.js`) |
| D-3 | Ademhalingsanimatie en eindmelding |
| D-4 | `pomodoro.html` met 25/5-timer, start, pauze en reset (`js/pomodoro.js`) |
| D-5 | Blokaanduiding, melding bij overgang en teller afgewerkte pomodoro's |
 
### Voorgestelde mappenstructuur
```
studentbuddy/
├── index.html          (Adrian)
├── style.css           (Kacper, gedeeld door alle pagina's)
├── tips.html           (Thor)
├── contact.html        (Thor)
├── taken.html          (Rawend)
├── ontspanning.html    (David)
├── pomodoro.html       (David)
├── js/
│   ├── quote.js        (Adrian)
│   ├── theme.js        (Kacper)
│   ├── tips.js         (Thor)
│   ├── contact.js      (Thor)
│   ├── taken.js        (Rawend)
│   ├── oefeningen.js   (David)
│   ├── timer.js        (David)
│   └── pomodoro.js     (David)
└── README.md
```
Iedereen werkt in eigen bestanden, dat geeft minder merge-conflicten op GitHub. Gedeelde bestanden (`style.css`, het menu) wijzigt enkel de eigenaar, de rest vraagt het via Discord of een Pull Request.
 
---
 
## 5. Wat moet er nog gebeuren?
 
### Voor het team
- [ ] 5 nieuwe user stories (US6 t.e.m. US10) als issues in GitHub aanmaken en toewijzen.
- [ ] Bestaande issues #16, #18, #2, #3 en #4 toewijzen aan Adrian, Kacper, Thor, Rawend en David.
- [ ] Per story de bijhorende `[DEV]`-tickets aanmaken (zie punt 4) en op het kanban bord zetten.
- [ ] Sprint 2 plannen: sprintdoel en sprint backlog vastleggen.
- [ ] Verdeling voorleggen in Discord en laten bevestigen.
### Planning en deadlines (uit de team charter)
| Datum | Wat |
|---|---|
| 28/10 | Sprint review, retrospective (mad/sad/glad) en sprintplanning sprint 2 |
| 1/11 | Retrospective en reflectie sprint 1 indienen |
| 30/11 - 9/12 | Rest van sprint 2: MVP afwerken, UI verbeteren, testen, bugfixes |
| 9/12 | Sprint review en retrospective sprint 2 tijdens de les |
| 13/12 | Retrospective en reflectie sprint 2 + user stories en sprintplanning indienen |
 
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
| Adrian | Thor |
| Thor | Rawend |
| Rawend | David |
| David | Kacper |
| Kacper | Adrian |
 
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
