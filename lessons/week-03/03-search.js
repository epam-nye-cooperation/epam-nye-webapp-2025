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
  return [];
};

console.log(search({ orderBy: 'points.ASC' }));