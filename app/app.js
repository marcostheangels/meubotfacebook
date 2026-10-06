const $ = (id) => document.getElementById(id);

$("previewBtn").addEventListener("click", () => {
  $("previewTitle").textContent = $("titulo").value.trim() || "Sem título";
  $("previewText").textContent = $("texto").value.trim() || "Sem texto";

  const file = $("imagem").files[0];
  if (file) {
    $("previewImage").src = URL.createObjectURL(file);
    $("previewImage").classList.remove("hidden");
  } else {
    $("previewImage").removeAttribute("src");
    $("previewImage").classList.add("hidden");
  }

  const link = $("link").value.trim();
  if (link) {
    $("previewLink").href = link;
    $("previewLink").textContent = link;
    $("previewLink").classList.remove("hidden");
  } else {
    $("previewLink").removeAttribute("href");
    $("previewLink").classList.add("hidden");
  }

  $("preview").classList.remove("hidden");
  $("preview").scrollIntoView({ behavior: "smooth", block: "start" });
});
