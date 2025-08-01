# Tietokannat ja rajapinnat harjoitustyö

Harjoitustyön tarkoituksena oli rakentaa REST-API:a ja MCV-arkkistehtuuria käyttävä MySQL/Node/Express-sovellus. Sovellus käyttää tietokantaa, joka koostuu kolmesta taulusta: Opiskelija, Opintojakso ja Arviointi.

## Toiminnallisuus

# Tietokannat ja rajapinnat harjoitustyö

Harjoitustyön tarkoituksena oli rakentaa REST-API:a ja MCV-arkkistehtuuria käyttävä MySQL/Node/Express-sovellus. Sovellus käyttää tietokantaa, joka koostuu kolmesta taulusta: Opiskelija, Opintojakso ja Arviointi.

## Toiminnallisuus

Sovellus voi päivittää, poistaa tai hakea opiskelijoiden arviointeja tietokannasta. GET-metodilla sovellus voi hakea yksittäisen tai kaikkien opiskelijoiden kurssien arvioinnit. POST-metodilla voidaan lisätä opiskelijalle uusi arviointi. PUT-metodilla voidaan päivittää opiskelijan arvioinnin arvosanaa. DELETE-metodilla voidaan poistaa opiskelijan arviointi. Toiminnot liittyvät vahvasti Arvioinnit-taulun päivittämiseen ja sieltä tiedonhakuun, mutta etenkin tiedonhaussa käytetään jokaista tietokannan taulua. SQL-kyselyissä hyödynnetään aliohjelmia, joita esitellään sovelluksen esittelyvideolla.

## ER-diagrammi
