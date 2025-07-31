# Tietokannat ja rajapinnat harjoitustyö

Harjoitustyön tarkoituksena oli rakentaa REST-API:a ja MCV-arkkistehtuuria käyttävä MySQL/Node/Express-sovellus. Sovellus käyttää tietokantaa, joka koostuu kolmesta taulusta: Opiskelija, Opintojakso ja Arviointi.

## Toiminnallisuus

Sovellus voi päivittää, poistaa tai hakea opiskelijoiden arviointeja tietokannasta. GET-metodilla sovellus voi hakea yksittäisen tai kaikkien opiskeloiden kurssien arvioinnit.POST-metodilla voidaan lisätä opiskelijalle uusi arviointi. PUT-metodilla voidaan päivittää opiskelijan arvioinnin arvosanaa. DELETE-metodilla voidaan poistaa opiskelijan arviointi.