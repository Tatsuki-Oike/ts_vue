# 1 バックエンド起動

## 1.1 仮想環境の作成

```sh
cd ./10_crud/backend # ディレクトリ移動
python3 -m venv venv # 仮想環境作成
source venv/bin/activate # 環境の中にはいる
python3 -m pip install --upgrade pip # pip upgrade
pip3 install -r requirements.txt # ライブラリインストール
```

## 1.2 API実行

```sh
python api.py # Flaskサーバー起動
```

## 1.3 テスト

新しいターミナルを開く

```sh
cd ./10_crud/backend
source venv/bin/activate
python test/allTasksTest.py # APIテスト
python test/oneTaskTest.py # APIテスト
```

<br>

# 2 フロントエンド

新しいターミナルを開く

## 2.1 １から作成する場合

```sh
cd ./10_crud
npm init vue@latest
cd ./frontend
npm install
npm install axios
npm install uuid
npm run dev
```

## 2.2 作成済みの場合

```sh
cd ./10_crud/frontend
npm install
npm run dev
```