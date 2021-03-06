import {select, selectAll} from 'd3-selection';

export function makeNav(dispatcher, initState) {
  // init
  updateNav(dispatcher, initState);

  dispatcher.on('to-brazil-view.nav', () => {
    updateNav(dispatcher, {data: initState.data});
  });
  dispatcher.on('to-mun-view.nav', mun => {
    updateNav(dispatcher, {data: initState.data, mun: mun});
  });

  dispatcher.on('make-app-cocktail.nav', () => {
    selectAll('#navbarMaps .navbar-item').classed('is-active', false);
    select('#navbarMaps #nav-item-cocktail').classed('is-active', true);
    select('#page-title').classed('cocktail', true);
    select('#page-title').classed('limits', false);
    select('#page-title').classed('substances', false);
  });

  dispatcher.on('make-app-limits.nav', () => {
    selectAll('#navbarMaps .navbar-item').classed('is-active', false);
    select('#navbarMaps #nav-item-limits').classed('is-active', true);
    select('#page-title').classed('cocktail', false);
    select('#page-title').classed('limits', true);
    select('#page-title').classed('substances', false);
  });

  dispatcher.on('make-app-substances.nav', () => {
    selectAll('#navbarMaps .navbar-item').classed('is-active', false);
    select('#navbarMaps #nav-item-substances').classed('is-active', true);
    select('#page-title').classed('cocktail', false);
    select('#page-title').classed('limits', false);
    select('#page-title').classed('substances', true);
  });
}

function updateNav(dispatcher, state) {
  select('#navbarMaps #nav-item-cocktail').on('click', () => {
    dispatcher.call('make-app-cocktail', null, state);
  });
  select('#navbarMaps #nav-item-limits').on('click', () => {
    dispatcher.call('make-app-limits', null, state);
  });
  select('#navbarMaps #nav-item-substances').on('click', () => {
    dispatcher.call('make-app-substances', null, state);
  });
}
