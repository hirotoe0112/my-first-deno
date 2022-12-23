import { copy } from "https://deno.land/std@0.168.0/streams/conversion.ts"

const filenames = Deno.args
filenames.forEach(async (filename) => {
    const file = await Deno.open(filename)
    await copy(file, Deno.stdout)
    file.close()
})

// コマンド例
// deno run --allow-read readfile.ts ./.vscode/settings.json

// 公式サンプルにはasyncなしの例が載っていたがasyncをつけないとエラーになる。なぜ？