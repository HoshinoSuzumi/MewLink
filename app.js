const jwt = require('jsonwebtoken');
const uuidv4 = require('uuid').v4;

module.exports = app => {
    //注意:user是github返回的授权用户信息,有user.provider和user.id属性,user.accessToken属性
    app.passport.verify(async (ctx, user) => {
        try {
            const existsUser = await ctx.service.oauth.getOAuth(user);
            const token = jwt.sign(existsUser, app.config.keys, {expiresIn: '7 days'});
            ctx.cookies.set('token', token, {
                path: '/',
                maxAge: 24 * 60 * 60 * 1000,
                httpOnly: false,
                signed: false,
            });
            return existsUser;
        } catch (e) {
            console.error(e)
            /*
                unique_id: STRING,
                provider: STRING,
                user_id: {type: INTEGER, primaryKey: true, autoIncrement: true},
                user_name: STRING,
                user_email: STRING,
                user_avatar: STRING,
                register_at: DATE
            */
            const userInfo = {
                unique_id: user.id,
                provider: 'github',
                user_name: user.profile.displayName,
                user_email: user.profile._json.email,
                user_avatar: user.profile._json.avatar_url,
            };
            const newUser = await ctx.service.user.createUser(userInfo);
            console.log(newUser, newUser.user_id);
            const oauthInfo = {
                access_token: user.accessToken,
                provider: user.provider,
                uid: user.id,
                user_id: newUser ? newUser.user_id : -1
            };
            await ctx.service.oauth.createOAuth(oauthInfo);
            const token = jwt.sign(newUser, app.config.keys, {expiresIn: '7 days'});
            ctx.cookies.set('token', token, {
                path: '/',
                maxAge: 24 * 60 * 60 * 1000,
                httpOnly: false,
                signed: false,
            });
            return newUser;
        }
    });
};
