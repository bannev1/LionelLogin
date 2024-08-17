chrome.storage.sync.get(['pass'], function(result) {
  if (typeof result.pass === 'undefined' || result.pass.length <= 1) {
    document.getElementById("lockPass").style.display = 'none';
    document.getElementById("divideLogin").style.display = 'none';
  }
});

chrome.storage.sync.get(['locked'], function(result) {
  if (!(typeof result.locked === 'undefined')) {
    if (result.locked === true) {
      document.getElementById("login").style.display = 'none';
      document.getElementById("divideLogin").style.display = 'none';
    } else {
      document.getElementById("login").style.display = 'block';
      document.getElementById("divideLogin").style.display = 'block';
    }
  }
});

chrome.storage.sync.get(['pass'], function(result) {
  if (!(typeof result.pass === 'undefined')) {
    document.getElementById('password').value = result.pass;
  }
});

chrome.storage.sync.get(['user'], function(result) {
  if (!(typeof result.user === 'undefined')) {
    document.getElementById('username').value = result.user;
  }
});

document.getElementById("submit").addEventListener("click", submit);

function submit() {
  let password = document.getElementById("password").value;

  chrome.storage.sync.set({'pass': password});
  
  chrome.storage.sync.get(['pass'], function(result) {
    console.log(result.pass);
  });
}

document.getElementById("subUser").addEventListener("click", uploadUser);

function uploadUser() {
  let username = document.getElementById("username").value;

  chrome.storage.sync.set({'user': username});
  
  chrome.storage.sync.get(['user'], function(result) {
    console.log(result.user)
  });
}

var checkbox = document.querySelector("input[name=viewPass]");

checkbox.addEventListener('change', function() {
  var x = document.getElementById("password");
  if (this.checked) {
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } else {
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
});

chrome.storage.sync.get('locked', function(result) {
  if (typeof result.locked === 'undefined') {
    changeCheckbox(false);
    chrome.storage.sync.set({'locked': false});
  } else {
    chrome.storage.sync.get(['locked'], function(data) {
      changeCheckbox(data.locked);
    });
  }
});

chrome.storage.sync.get('pass', function(result) {
  if (typeof result.pass === 'undefined') {
    document.getElementById("lockPass").style.display = 'none'
    document.getElementById("divideLogin").style.display = 'none'
  } else {
    document.getElementById("lockPass").style.display = 'block'
    document.getElementById("divideLogin").style.display = 'block'
  }
});

chrome.storage.sync.get('sessLogin', function(result) {
  if (typeof result.sessLogin !== 'undefined') {
    document.getElementById("sessionLogin").checked = result.sessLogin;
  }
});

const lockbox = document.getElementById('lockPassword')

lockbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    chrome.storage.sync.get('pass', function(result) {
      if (!(typeof result.pass === 'undefined')) {
        chrome.storage.sync.set({'locked': true});
        changeCheckbox(true);
        reloadPage();
      } else {
        chrome.storage.sync.set({'locked': false});
        changeCheckbox(false);
        reloadPage();
      }
    });
  } else {
    chrome.storage.sync.get('accPassword', function(result) {
      if (typeof result.accPassword === 'undefined') {
        chrome.storage.sync.set({'locked': false});
        changeCheckbox(false);
        reloadPage();
      } else {
        checkPasswordLock();
        chrome.storage.sync.set({'locked': true});
        changeCheckbox(true);
      }
    });
  }
})

function changeCheckbox(value) { 
  document.getElementById("lockPassword").checked = value;
  const checkLock = document.getElementById('lockPassword');
  checkLock.checked = value;
}

function reloadPage() {
  location.reload();
}

window.addEventListener("click", function(e) {
  if (document.getElementById('checkPasswordPopup').style.display == 'block') {
    if (document.getElementById('checkPasswordPopup') == e.target){
      document.getElementById('checkPasswordPopup').style.display = 'none';
    }
  }
});

document.getElementById("account").addEventListener("click", function () {
  location.href = "settings/LocalAccount/LocalAccount.html";
});

function checkPasswordLock() {
  document.getElementById("checkPasswordPopup").style.display = "block";
}

document.getElementById("passwordCheckSubmit").addEventListener("click", function () {
  var password = document.getElementById("passwordCheck").value;
  chrome.storage.sync.get('accPassword', function (result) {
    if (result.accPassword == password) {
      chrome.storage.sync.set({'locked': false});
      changeCheckbox(false);
      reloadPage();
    } else {
      alert("Error - Wrong Password");
      reloadPage();
    }
  });
});

document.getElementById("sessionLogin").addEventListener("click", () => {
  var state = document.getElementById("sessionLogin").checked;
  chrome.storage.sync.get('sessLogin', function (result) {
    result.sessLogin(state);
  });
})
