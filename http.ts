const url = Deno.args[0];
const res = await fetch(url);
const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);

// コマンド例
// deno run --allow-net=greenry.jp http.ts https://greenry.jp
