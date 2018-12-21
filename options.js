function saveOptions(e) {
  if(isNaN(document.querySelector("#max_fetch_requests").value)){
    document.querySelector("#max_fetch_requests").value = "30";
  }
  if(isNaN(document.querySelector("#recheck_time").value)){
    document.querySelector("#recheck_time").value = "500";
  }
  if(isNaN(document.querySelector("#fetch_timeout").value)){
    document.querySelector("#fetch_timeout").value = "20000";
  }

  browser.storage.sync.set({
    max_fetch_requests: document.querySelector("#max_fetch_requests").value,
    recheck_time: document.querySelector("#recheck_time").value,
    fetch_timeout: document.querySelector("#fetch_timeout").value
  });
  e.preventDefault();
}

function restoreOptions() {

  let max_fetch_requests = browser.storage.sync.get('max_fetch_requests');
  let recheck_time = browser.storage.sync.get('recheck_time');
  let fetch_timeout = browser.storage.sync.get('fetch_timeout');

  max_fetch_requests.then((res) => {
    document.querySelector("#max_fetch_requests").value = res.max_fetch_requests || "30";
  });
  recheck_time.then((res) => {
    document.querySelector("#recheck_time").value = res.recheck_time || "500";
  });
  fetch_timeout.then((res) => {
    document.querySelector("#fetch_timeout").value = res.fetch_timeout || "20000";
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
