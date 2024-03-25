document.addEventListener("DOMContentLoaded", function () {
  const journalForm = document.getElementById("journalForm");
  const journalEntries = document.getElementById("journalEntries");

  journalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("journalTitle").value;
    const content = document.getElementById("journalContent").value;
    const timestamp = new Date().toLocaleString();

    const entryHTML = `
            <div class="entry">
                <h2>${title}</h2>
                <p>${content}</p>
                <p><strong>Created At:</strong> ${timestamp}</p>
                <button class="editBtn">Edit</button>
            </div>
        `;

    journalEntries.insertAdjacentHTML("beforeend", entryHTML);
    journalForm.reset();
  });

  journalEntries.addEventListener("click", function (event) {
    if (event.target.classList.contains("editBtn")) {
      const entry = event.target.parentElement;
      const title = entry.querySelector("h2").textContent;
      const content = entry.querySelector("p:nth-of-type(1)").textContent;

      const newTitle = prompt("Edit Title:", title);
      const newContent = prompt("Edit Content:", content);

      if (newTitle !== null && newContent !== null) {
        entry.querySelector("h2").textContent = newTitle;
        entry.querySelector("p:nth-of-type(1)").textContent = newContent;
      }
    }
  });
});
