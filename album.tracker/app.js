const form = document.querySelector('#albumform');
form.addEventListener('submit', function (event){
    event.preventDefault();
    const Tittle = form.Tittle.value;
    const Artist = form.Artist.value;
    const RealeseYear = form.ReleaseYear.value;
    const Genre = form.Genre.value;
    const Raiting = form.Raiting.value;
    const Listened = form.Listened.value;
    
    console.log("Título:", Tittle);
    console.log("Artista:", Artist);
    console.log("Año de lanzamiento:", RealeseYear);
    console.log("Genero:", Genre);
    console.log("Ratio:", Raiting);
    console.log("Ecuchantes:", Listened);
});
