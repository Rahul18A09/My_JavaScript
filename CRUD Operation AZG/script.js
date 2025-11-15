const STORAGE_KEY = "todo";
let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const persist = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

const viewRecord = () => {
  const allrecord = data;
  let tbl = "";
  allrecord.forEach((val) => {
    tbl += `
      <tr>
        <td>${val.userid}</td>
        <td>${val.task}</td>
        <td>
          <button data-action="delete" data-id="${val.userid}">Delete</button>
          <button data-action="edit" data-id="${val.userid}">Edit</button>
        </td>
      </tr>
    `;
  });
  document.getElementById("record").innerHTML = tbl;
};

document.getElementById("record").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const action = btn.dataset.action;
  const id = Number(btn.dataset.id);
  if (action === "delete") deleteRecord(id);
  if (action === "edit") editRecord(id);
});

const saveRecord = () => {
  const taskInput = document.getElementById("task");
  const editIdInput = document.getElementById("editid");
  const task = taskInput.value.trim();
  const id = editIdInput.value;

  if (!task) {
    alert("Please enter a task.");
    return;
  }

  if (id) {
    const idx = data.findIndex((r) => r.userid === Number(id));
    if (idx !== -1) {
      data[idx].task = task;
      persist();
      alert("Record updated");
    }
    editIdInput.value = "";
  } else {
    const obj = {
      userid: Date.now() + Math.floor(Math.random() * 1000),
      task,
    };
    data.push(obj);
    persist();
  }

  taskInput.value = "";
  viewRecord();
};

const deleteRecord = (id) => {
  if (!confirm("Delete this record?")) return;
  data = data.filter((val) => val.userid !== id);
  persist();
  viewRecord();
};

const editRecord = (id) => {
  const single = data.find((val) => val.userid === id);
  if (!single) return alert("Record not found");
  document.getElementById("task").value = single.task;
  document.getElementById("editid").value = id;
  document.getElementById("task").focus();
};

// wire submit button (if you kept input button in HTML)
const submitBtn = document.querySelector(
  'input[type="button"][value="submit"]'
);
if (submitBtn) submitBtn.addEventListener("click", saveRecord);

// initial render
viewRecord();
