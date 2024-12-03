# Movie App - by Vanessa Ketelaar 

## Projectoverzicht
Deze applicatie stelt gebruikers in staat om films op te slaan als favorieten, films te zoeken op titel en genre, en hun persoonlijke voorkeuren te beheren. De frontend is ontwikkeld met React 
en maakt gebruik van de TMDB API om filmdata op te halen.

## Vereisten
- Node.js (v14.0 of hoger)
- npm (v6.0 of hoger)

## Installatie
1. Clone het project naar je lokale machine: 
git clone https://github.com/gebruikersnaam/movie-app.git

2. Navigeer naar de projectmap:
3. Installeer de benodigde afhankelijkheden: npm install
4. Start de applicatie: npm run start


## Configuratie van de API
 ik heb deze keuze gemaakt extra configuratie is neit nodig. 


ik heb de API key  in het project gezet om het testen makkelijker te maken.


## Gebruik
- **Login**: Maak een account aan om je favoriete films op te slaan.
- **Film zoeken**: Gebruik de zoekfunctie om films op titel te vinden.
- **Genres**: Klik op een genre om films te filteren (let op, de filtering is momenteel niet gekoppeld aan de backend).

## Problemen en Oplossingen
- Als de applicatie niet werkt, zorg er dan voor dat je Node.js en npm goed geïnstalleerd hebt.


## Toekomstige verbeteringen
- Backend-integratie voor werkende genre-filtering.
- Verbeterde zoekfunctionaliteit en gebruikersauthenticatie.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


Your X-Api-Key: popcornmovieflix:2rMriPBJ7MV5I6hlegSt

Add the following to the header of your POST USER request:

Headers: {
    'Content-Type': 'application/json',
    'X-Api-Key':popcornmovieflix:2rMriPBJ7MV5I6hlegSt
}

       
