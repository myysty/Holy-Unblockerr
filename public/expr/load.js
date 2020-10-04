function px() {
    $('url').focus();
}

function $(id) {
    return document.getElementById(id);
};

$('nprox').onclick = function() {
    document.cookie = 'nu_auth=yes; expires=' + (Date.now() + 259200) + '; sameSite=none; domain=.' + auth + '; path=/; secure;';
    return true;
};

$('pdprox').onclick = function() {
    document.cookie = 'pd_auth=yes; expires=' + (Date.now() + 259200) + '; sameSite=none; domain=.' + auth + '; path=/; secure;';
    return true;
};

$('pmprox').onclick = function() {
    document.cookie = 'pm_auth=yes; expires=' + (Date.now() + 259200) + '; sameSite=none; domain=.' + auth + '; path=/; secure;';
    return true;
};

// AL Auth
$('al').onclick = function() {
    document.cookie = 'al_auth=yes; expires=' + (Date.now() + 259200) + '; sameSite=none; domain=.' + auth + '; path=/; secure;';
    return true;
};

// Cookie Auth
var host = location.hostname.split('.');
var auth = location.hostname;
if (host.length == 3) {
    auth = `${host[1]}.${host[2]}`;
}

Array.from(document.getElementById('auth')).forEach(e => {
    e.addEventListener('click', () => {
        document.cookie = 'session; max-age=259200; sameSite=lax; domain=' + auth + '; path=/; secure;';
    });
});


function on() {
    window.onbeforeunload = function() {
        return true;
    };
}