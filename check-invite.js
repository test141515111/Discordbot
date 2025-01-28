const { PermissionsBitField } = require('discord.js');

// URLからクライアントIDと権限を抽出
function parseInviteUrl(url) {
    const params = new URLSearchParams(url.split('?')[1]);
    return {
        clientId: params.get('client_id'),
        permissions: BigInt(params.get('permissions')),
        scope: params.get('scope')
    };
}

// 権限の詳細を表示
function checkPermissions(permissions) {
    const permissionsBitField = new PermissionsBitField(permissions);
    console.log('\n付与される権限:');
    
    const enabledPermissions = [
        'ViewChannel',
        'SendMessages',
        'ReadMessageHistory'
    ].filter(perm => permissionsBitField.has(perm));

    enabledPermissions.forEach(perm => {
        console.log(`✓ ${perm}`);
    });
}

// インバイトURLの解析
const inviteUrl = 'https://discord.com/api/oauth2/authorize?client_id=123456789012345678&permissions=68608&scope=bot';
const details = parseInviteUrl(inviteUrl);

console.log('インバイトリンクの詳細:');
console.log('------------------------');
console.log(`クライアントID: ${details.clientId}`);
console.log(`スコープ: ${details.scope}`);
checkPermissions(details.permissions);