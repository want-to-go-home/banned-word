document.addEventListener("DOMContentLoaded", () => {
  main();
});

function main() {
  const importants = document.getElementsByClassName('important-banned-word')
  
  for (let i = 0; i < importants.length; i++) {
    const item = importants[i];
    item.onclick = () => {
      if (item.classList.contains("decodded")) {
        item.textContent = btoa(encodeURIComponent(item.textContent));
        item.classList.remove('decodded');
      } else {
        item.textContent = decodeURIComponent(atob(item.textContent));
        item.classList.add('decodded');
      }
    }
  }
}
