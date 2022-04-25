browser.storage.local.get(['active'], function(result) {
    if (!(typeof result.active === 'undefined')) {
        if (result.active == true) {
            var remUser = document.getElementById('rememberusername');
            var ran;
            if (remUser.checked) {
                browser.storage.local.get(['pass'], function(result) {
                    var passwordField = document.getElementById('password');
                    passwordField.value = result.pass;

                    if (!ran) {
						window.addEventListener('load', function () {
							document.getElementById("loginbtn").click();
						});
						ran = true;
					}
                });
            } else {
                browser.storage.local.get(['user'], function(check) {
                    if (!(typeof check.user === 'undefined')) {
                        browser.storage.local.get(['pass'], function(result) {
                            var passwordField = document.getElementById('password');
                            passwordField.value = result.pass;
                        });

                        browser.storage.local.get(['user'], function(result) {
                            var usernameField = document.getElementById('username');
                            usernameField.value = result.user;
                        });

                        if (!ran) {
                            window.addEventListener('load', function () {
                                document.getElementById("loginbtn").click();
                            });
                            ran = true;
                        }
                    } else {
                        const input = document.getElementById('username');

                        input.addEventListener('keyup', (e) => {
                            const text = e.currentTarget.value;

                            browser.storage.local.get(['pass'], function(result) {
                                var passwordField = document.getElementById('password');
                                passwordField.value = result.pass;
                            });

                            if (!ran) {
                                window.addEventListener('load', function () {
                                    document.getElementById("loginbtn").click();
                                });
                                ran = true;
                            }
                        });
                    }
                });
            }
        } else {
            console.log("Extension not active");
        }
    }
});