const Service = require('egg').Service

class UserService extends Service {
    async signup() {
        const ctx = this.ctx;
    }
}

module.exports = UserService;
