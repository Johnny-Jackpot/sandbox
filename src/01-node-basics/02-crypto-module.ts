import crypto from "node:crypto";

const uuid = crypto.randomUUID();
console.log(uuid);

const resetToken = crypto.randomBytes(16).toString("hex");
console.log(resetToken);

const data = {foo: 'bar'};
const hash = crypto.createHash('sha256').update(JSON.stringify(data)).digest('hex');
console.log(hash);

const signature = crypto.createHmac('sha256', 'secret').update(JSON.stringify(data)).digest('hex');
console.log(signature);

const signatureVerify = crypto.createHmac('sha256', 'secret').update(JSON.stringify(data)).digest('hex');
console.log(signatureVerify === signature);