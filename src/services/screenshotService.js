import api from './api';

export default {
  uploadImage,
  addScreenshot,
  editScreenshot,
  getFromId,
  getLast,
  getUnsolved,
  guess,
  removeOwn,
};

function uploadImage(file, onUploadProgress) {
  const data = new FormData();
  data.append('file', file);
  data.append('filename', file.name);

  return api.post('/screenshot/upload-image', data, { onUploadProgress });
}

function addScreenshot(data) {
  return api.post('/screenshot/add', data);
}

function editScreenshot(data) {
  return api.post('/screenshot/edit', data);
}

function getFromId(id) {
  return api.post('/screenshot/get', { id });
}

function getLast() {
  return api.get('/screenshot/last');
}

function getUnsolved(exclude) {
  return api.post('/screenshot/unsolved', { exclude });
}

function guess(screenshotId, proposal) {
  return api.post('/screenshot/guess', {
    screenshotId,
    proposal,
  });
}

function removeOwn(screenshotId) {
  return api.post('/screenshot/remove-own', {
    screenshotId,
  });
}
