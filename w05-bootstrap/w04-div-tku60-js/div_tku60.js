function changeVideo(index) {
  const p = document.getElementById('player');
  switch (index) {
    case 1:
      p.innerHTML =
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/IMiDKSFqwMQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      break;
    case 2:
      p.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/Qnvc8IYf1NM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      break;
    case 3:
      p.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/k6Bdj-LTfx8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      break;
  }
}
