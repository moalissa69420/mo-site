// Toggle upload panel
const selectedProjectsLink = document.getElementById('selected-projects-link');
const uploadPanel = document.getElementById('upload-panel');
const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('file-input');
const previewArea = document.getElementById('preview-area');

selectedProjectsLink.addEventListener('click', function (e) {
  e.preventDefault();
  uploadPanel.style.display = uploadPanel.style.display === 'none' ? 'block' : 'none';
});

// Drag and drop
uploadArea.addEventListener('click', () => fileInput.click());

uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadArea.classList.add('dragover');
});
uploadArea.addEventListener('dragleave', () => {
  uploadArea.classList.remove('dragover');
});
uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.classList.remove('dragover');
  handleFiles(e.dataTransfer.files);
});

fileInput.addEventListener('change', () => {
  handleFiles(fileInput.files);
});

function handleFiles(files) {
  previewArea.innerHTML = '';
  Array.from(files).forEach(file => {
    const type = file.type;
    const url = URL.createObjectURL(file);
    let el;
    if (type.startsWith('image/')) {
      el = document.createElement('img');
      el.src = url;
      el.alt = file.name;
    } else if (type.startsWith('video/')) {
      el = document.createElement('video');
      el.src = url;
      el.controls = true;
    }
    if (el) previewArea.appendChild(el);
  });
} 