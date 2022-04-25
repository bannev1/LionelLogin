browser.storage.local.get(['pass'], function(result) {
  if (typeof result.pass === 'undefined' || result.pass.length <= 1) {
    document.getElementById("lockPass").style.display = 'none';
    document.getElementById("divideLogin").style.display = 'none';
  }
});

browser.storage.local.get(['locked'], function(result) {
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

browser.storage.local.get(['pass'], function(result) {
  if (!(typeof result.pass === 'undefined')) {
    document.getElementById('password').value = result.pass;
  }
});

browser.storage.local.get(['user'], function(result) {
  if (!(typeof result.user === 'undefined')) {
    document.getElementById('username').value = result.user;
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

document.getElementById("subUser").addEventListener("click", uploadUser);

function uploadUser() {
  let username = document.getElementById("username").value;

  browser.storage.local.set({'user': username});
  
  browser.storage.local.get(['user'], function(result) {
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

browser.storage.local.get('locked', function(result) {
  if (typeof result.locked === 'undefined') {
    changeCheckbox(false);
    browser.storage.local.set({'locked': false});
  } else {
    browser.storage.local.get(['locked'], function(data) {
      changeCheckbox(data.locked);
    });
  }
});

browser.storage.local.get('pass', function(result) {
  if (typeof result.pass === 'undefined') {
    document.getElementById("lockPass").style.display = 'none'
    document.getElementById("divideLogin").style.display = 'none'
  } else {
    document.getElementById("lockPass").style.display = 'block'
    document.getElementById("divideLogin").style.display = 'block'
  }
});

const lockbox = document.getElementById('lockPassword')

lockbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    browser.storage.local.get('pass', function(result) {
      if (!(typeof result.pass === 'undefined')) {
        browser.storage.local.set({'locked': true});
        changeCheckbox(true);
      } else {
        browser.storage.local.set({'locked': false});
        changeCheckbox(false);
      }
    });
  } else {
    browser.storage.local.set({'locked': false});
    changeCheckbox(false);
  }
})

function changeCheckbox(value) { 
  document.getElementById("lockPassword").checked = value;
  const checkLock = document.getElementById('lockPassword');
  checkLock.checked = value;
}

document.getElementById("lockPassword").addEventListener("click", reloadPage);

function reloadPage() {
  location.reload()
}