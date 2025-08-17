document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("stories-grid");

  fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@loranabwala")
    .then(res => res.json())
    .then(data => {
      data.items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("story-card");

        const h3 = document.createElement("h3");
        h3.textContent = item.title;

        const date = document.createElement("p");
        date.classList.add("story-date");
        date.textContent = new Date(item.pubDate).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        });

        // Clean and extract the first good paragraph
        let html = item.description;
        let cleanText = html
          .replace(/<figcaption>.*?<\/figcaption>/gi, '') // remove captions
          .split(/<\/p>|<br>/i)
          .map(line => line.replace(/<[^>]+>/g, '').trim())
          .find(line => line && !/^Image:\s*/i.test(line));

        // Trim to first 150 words
        if (cleanText) {
          const words = cleanText.split(/\s+/);
          if (words.length > 150) {
            cleanText = words.slice(0, 30).join(' ') + '…';
          }
        } else {
          cleanText = "Read more on Medium.";
        }

        const snippet = document.createElement("p");
        snippet.classList.add("story-snippet");
        snippet.textContent = cleanText;

        const a = document.createElement("a");
        a.href = item.link;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = "Read More";

        card.append(h3, date, snippet, a);
        container.append(card);
      });
    })
    .catch(err => {
      console.error("Error loading stories:", err);
      container.innerHTML = "<p>Could not load stories right now.</p>";
    });
});
