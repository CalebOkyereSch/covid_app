import gql from 'graphql-tag'

export const World =gql`
 query{
    globalTotal {
        affectedCountries
        tests
        cases
        todayCases
        deaths
        todayDeaths
        recovered
        active
        critical
        casesPerOneMillion
        deathsPerOneMillion
        testsPerOneMillion
        updated
    }
}

 `
export const Country= gql `
query {
 countries {
     country
     countryInfo {
         _id
         lat
         long
         flag
         iso3
         iso2
     }
     continent
     result {
         tests
         cases
         todayCases
         deaths
         todayDeaths
         recovered
         active
         critical
         casesPerOneMillion
         deathsPerOneMillion
         testsPerOneMillion
         updated
     }
 }
}


`