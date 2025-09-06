async function cargarComponente(id, url) {
    const resp = await fetch(url);
    const html = await resp.text();
    document.getElementById(id).innerHTML = html;
}
cargarComponente("header", "components/header.html");
cargarComponente("content", "components/content.html");
cargarComponente("footer", "components/footer.html");

