browser.storage.local.get(['locked'], function(result) {
  if (!(typeof result.locked === 'undefined')) {
    if (result.locked === true) {
      document.getElementById("login").style.display = 'none'
      document.getElementById("divideLogin").style.display = 'none'
    }
  }
});

browser.storage.local.get(['pass'], function(result) {
  if (!(typeof result.pass === 'undefined')) {
    document.getElementById('password').value = result.pass;
  }
});

document.getElementById("submit").addEventListener("click", submit);

function submit() {
  let password = document.getElementById("password").value;

  browser.storage.local.set({'pass': password});
  
  browser.storage.local.get(['pass'], function(result) {
    console.log(result.pass);
  });
}

document.getElementById("goOptions").addEventListener("click", openOptions);

function openOptions() {
  chrome.runtime.openOptionsPage()
}

browser.storage.local.get('active', function(result) {
  if (typeof result.active === 'undefined') {
    changeCheckbox(true);
    browser.storage.local.set({'active': true});
  } else {
    browser.storage.local.get(['active'], function(data) {
      changeCheckbox(data.active);
    });
  }
});

const checkbox = document.getElementById('checkActive')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    browser.storage.local.set({'active': true});
    changeCheckbox(true);
  } else {
    browser.storage.local.set({'active': false});
    changeCheckbox(false);
  }
})

function changeCheckbox(value) { 
  document.getElementById("checkActive").checked = value;
  const checkbox = document.getElementById('checkActive');
  checkbox.checked = value;
}