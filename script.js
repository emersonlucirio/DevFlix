var listaFilmes = ['https://br.web.img3.acsta.net/c_310_420/pictures/23/04/14/21/50/1023913.jpg', 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a6/The_Exorcist_1973.jpg/225px-The_Exorcist_1973.jpg', 'https://br.web.img3.acsta.net/pictures/18/09/05/17/21/5348044.jpg', 'https://br.web.img3.acsta.net/pictures/21/10/13/21/56/4755833.jpg', 'https://br.web.img3.acsta.net/medias/nmedia/18/87/31/89/19874266.jpg', 'https://br.web.img3.acsta.net/pictures/22/09/20/15/51/1507365.jpg', 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/137A74CBCF98AE7010AA22F0D06D74636478B02D2B4072E245EED128D0AD4544/scale?width=506&aspectRatio=2.00&format=jpeg', 'https://upload.wikimedia.org/wikipedia/pt/f/f6/Dark_%28s%C3%A9rie%29.jpg', 'https://br.web.img3.acsta.net/pictures/23/05/24/11/22/4785740.jpg', 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/34/The_Walking_Dead_Season_3_Official_Poster.jpg/230px-The_Walking_Dead_Season_3_Official_Poster.jpg'];

//desafio 2 - adicionar itens na lista usando o .push

listaFilmes.push('https://br.web.img3.acsta.net/pictures/15/03/11/17/20/597260.jpg', 'https://br.web.img2.acsta.net/pictures/22/01/04/09/58/1947183.jpg');

var nomeFilmes = ['A morte do demônio', 'The exorcist 1973', 'Halloween', 'Pânico', 'A hora do pesadelo', 'Sorria', 'Série / Wu-Tang', 'Série / Dark', 'Série / Black Mirror', 'Série / The walking dead', 'Série / Peaky Blinders', 'Moonfall: Ameaça lunar'];

document.write('<div class="container_todosFilmes">')
// Desafio 1 - transformar for em while
var i = 0;
while (i < listaFilmes.length) {
  if ((listaFilmes[i].endsWith('jpg')) ||
    (listaFilmes[i].endsWith('jpeg'))) {
    document.write('<div class="conntainer_filmes">')
    document.write('<img src=" ' + listaFilmes[i] + '">');
    document.write('<strong><p>' + nomeFilmes[i] + '</p></strong>'); // Desafio 4 - colocar titulos em baixo da imagem
    document.write('</div>')
  } else {
    document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>');
  }
  i++;
}
document.write('</div>')