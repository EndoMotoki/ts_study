// 値としてのオブジェクト
const mail1 = {
    name: "通常はがき",
    price: 85,
};

// 型エイリアスを使ったオブジェクトの型定義
type MailType = {
    name: string;
    price: number;
};

// 型アノテーションされた変数を宣言してオブジェクトを代入
const mail2: MailType = {
    name: "定形郵便物",
    price: 110,
};