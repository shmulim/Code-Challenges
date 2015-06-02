function letterCapitalize(str) {
  return str.split(' ').map(function(i) {
    return i[0].toUpperCase() + i.slice(1).toLowerCase();
  }).join(' ');
}

letterCapitalize('ade is a boy'); // Ade Is A Boy
