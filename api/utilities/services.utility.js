const consul = require('consul')();

const utility = {};

// ==================================================

utility.register = (ip, port, _name, _notes) => {
    const check = {
        name: _name,
        tcp: `${ip}:${port}`,
        notes: _notes
    };
    consul.agent.check.register(check, err => {
        if (err) throw err;
    });
};

utility.deregister = name => {
    consul.agent.check.deregister(name, err => {
        if (err) throw err;
    });
};

utility.findByName = svcName => {
    consul.agent.members((err, results) => {
        if (err) throw err;
        return results.map((svc) => {
            return svc.name === svcName;
        });
    });
};

// ==================================================

module.exports = utility;