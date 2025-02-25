/**
 * Keressünk a Roxfort-i házak között
 * Keresési feltételek lehetnek:
 *  - név, leírás vagy elem alapján (bármelyik a háromból, kis és nagybetű nem számít) - query,
 *  - alapértékek egyike megtalálható (pl. bátorság, szerénység, stb.) - traits (tömb vagy null)
 *  - rendezés név, jelkép vagy pontszám alapján, növekvő vagy csökkenő sorrendben - orderBy: 'name.ASC', 'name.DESC', 'animal.ASC', 'animal.DESC', 'points.ASC', 'points.DESC',
 * Alapértelmezett rendezés: név szerint növekvő sorrend ('name.ASC')
 * Ha valamire nincs keresési kitétel, akkor alapvetően mindegyik elemre igaznak vesszük
 */

const HOUSES = require('./03-input.json');
const LANG = 'hu-HU';

const search = ({ query, traits, orderBy }) => {
  let byQuery = [];
  if (query) {
    const searchQuery = query.toLocaleLowerCase(LANG);
    HOUSES.forEach((house) => {
      if (
        house.name.toLocaleLowerCase(LANG).indexOf(searchQuery) > -1 ||
        house.description.toLocaleLowerCase(LANG).indexOf(searchQuery) > -1 ||
        house.animal.toLocaleLowerCase(LANG).indexOf(searchQuery) > -1
      ) {
        byQuery.push(house);
      }
    });
  } else {
    byQuery = HOUSES;
  }
  
  let results = [];
  if (traits && Array.isArray(traits)) {
    byQuery.forEach((house) => {
      house.traits.forEach((trait) => {
        if (traits.includes(trait)) {
          results.push(house);
        }
      });
    });
  } else {
    results = byQuery;
  }

  const [order, direction] = orderBy?.split('.') ?? ['name', 'ASC'];
  return results.sort((house1, house2) => {
    let result = 0;
    if (order === 'name' || order === 'animal') {
      result = house1[order].localeCompare(house2[order], LANG);
    } else if (order === 'points') {
      result = house1.points - house2.points;
    }
    return direction === 'ASC' ? result : -result;
  });
};

console.log(search({ orderBy: 'points.ASC' }));