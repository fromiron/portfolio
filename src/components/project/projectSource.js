import React from "react";
import todo from "../../images/todo.PNG";
import jobScrapper from "../../images/jobscraper.PNG";
import hana from "../../images/hana.PNG";
import amelie from "../../images/amelie.PNG";

import {
    faCss3 as css,
    faHtml5 as html,
    faJsSquare as javascript,
    faPython as python,
    faReact as react,
    faJava as java
} from "@fortawesome/free-brands-svg-icons";

import colors from "../colors";

export const todoList = {
    title: "To Do List",
    type: "APP",
    image: todo,
    view: "https://fromiron.github.io/ToDo_Weather_App",
    code: "https://github.com/fromiron/ToDo_Weather_App",
    icons: [[javascript, colors.javascript], [html, colors.html], [css, colors.css]],//2次元配列でiconと色を伝送
    text: "緯度・經度獲得し、OpenWeatherMapの天気apiから天気情報をロード、表示するTo Do App。 local storageにTo do Listと完了リストを保存し、リフレシュしてもデーターを残す。",
    use: ["OpenWeatherMap API", "Local storage", "Geolocation"],
    gist: [
        {
            title: "weather.js",
            id: "30522750f7b43c9aa3fd1a4b440445a9",
            label: ["OpenWeatherMap API", "Geolocation"],
            review: "navigator.geolocationでlatitude・longitude情報を獲得し、そのデーターをOpenWeatherMap APIへ転送して天気情報を受け取る。" +
                "受け取る情報は都市名・湿度・気温などでそのうち「weather.id」を利用、韓国語変換Functionに代入して翻訳する。"
        },
        {
            title: "name.js",
            id: "f58d2f765aee621af249fa25aa82880c",
            label: ["LocalStorage"],
            review: "localStorageを利用した簡易ログイン機能。ページがローディングされるとlocalStorageの'name'キーを確認する。"
        },
        {
            title: "todo.js",
            id: "45ca7481aeeeb6609e8f67ba6bcdc522",
            label: ["LocalStorage", "JSON.stringify"],
            review: "各個体は「Date.now()」でidを生成し、localStorageに保存する。配列で保存するため「JSON.stringify()」メソッドを利用した。リストの追加、削除をするidをチェックして各機能を行う。"
        },
    ]
}

export const jobScraper = {
    title: "Job scraper",
    type: "APP",
    image: jobScrapper,
    view: "https://repl.it/@Fromiron/jobscraper#main.py",
    code: "https://repl.it/@Fromiron/jobscraper#main.py",
    icons: [[python, colors.python], [html, colors.html], [css, colors.css]],//2次元配列でiconと色を伝送
    text: "RequestsのHTTP通信、BeautifulSoupのParsing機能を利用したJob scraper 検索語を入力するとStackoverflow.com, weworkremotely.com, remoteok.ioの 最新求人情報を獲得する。Pandasを利用したCSVの保存やダウンロードも出来る。",
    use: ["Flask", "Requests", "BeautifulSoup", "Pandas"],
    gist: [
        {
            title: "Fake DB",
            id: "3ddc7fc032c66965cf2220798c91cb50",
            label: ["Dictionary"],
            review: "検索時にWeb crawlingを行うため、同じキーワードでも時間がかかるとこを防ぐ装置。検索データーをDicに保存しする。検索するたびに「keys()」でdic内のデーターを確認し、一致するデーターがあれはdicをリターンする。なければクローリングを始める。"
        },
        {
            title: "Pandas",
            id: "2e776ae6fb468da79a796aefcfd1429c",
            label: ["CSV"],
            review: "検索したデーターをCSVで保存する。ファイル名はサイト名+検索語。最新情報のみ保存するよう上書きする。"
        },
        {
            title: "Send file",
            id: "164e55f9edaf38f2ced7471b62b697ea",
            label: ["Flask"],
            review: "FlaskのPOST通信でデーターを受け取って検索時サーバーに保存したCSVファイルをダウンロードする。"
        },
    ]
}


export const rabbitSitterHana = {
    title: "Rabbit sitter HANA",
    type: "WEB",
    image: hana,
    view: "https://rabbithana.com",
    code: "https://github.com/fromiron/hana_react",
    icons: [[react, colors.react], [javascript, colors.javascript], [html, colors.html], [css, colors.css]],//2次元配列でiconと色を伝送
    text: "札幌うさぎ向けペットシッターサービスRabbit sitter HANAのOfficial website。 React routerでページラフティング、変わる可能性が高い価格ページの全ElementをComponent化した。 デスクトップ・タブレット・スマホなど全デバイスに対応出来るよう、Media queryを適用した。 Let's EncryptでSSLを適用、Nginx 301 Redirectを設定、http接続をhttpsにredirectionする。",
    use: ["React router", "Styled Components", "AWS Lightsail", "Nginx"],
    gist: [
        {
            title: "Fake DB",
            id: "3ddc7fc032c66965cf2220798c91cb50",
            label: ["Dictionary"],
            review: "検索時にWeb crawlingを行うため、同じキーワードでも時間がかかるとこを防ぐ装置。検索データーをDicに保存しする。検索するたびに「keys()」でdic内のデーターを確認し、一致するデーターがあれはdicをリターンする。なければクローリングを始める。"
        },
        {
            title: "Pandas",
            id: "2e776ae6fb468da79a796aefcfd1429c",
            label: ["CSV"],
            review: "検索したデーターをCSVで保存する。ファイル名はサイト名+検索語。最新情報のみ保存するよう上書きする。"
        },
        {
            title: "Send file",
            id: "164e55f9edaf38f2ced7471b62b697ea",
            label: ["Flask"],
            review: "FlaskのPOST通信でデーターを受け取って検索時サーバーに保存したCSVファイルをダウンロードする。"
        },
    ]


}


export const restoranteAmelie = {
    title: "Restorante Amelie",
    type: "WEB",
    image: amelie,
    view: "http://54.150.6.14:8080/amelie/home.jsp",
    code: "http://54.150.6.14:8080/amelie/home.jsp",
    icons: [[java, colors.java], [javascript, colors.javascript], [html, colors.html], [css, colors.css]],//2次元配列でiconと色を伝送
    text: "Group work(3人)。JAVA訓練校の最終ProjectでFront-end、最終訂正、AWSサーバーを担当した。 データーベース連動するメニューシステム、Modal window、ギャラリー、マップ、会員登録、退会、予約システムなどを構築した。\n",
    use: ["Jsp", "MySql", "Google Maps api", "AWS EC2(ubuntu, tomcat)"],
    gist: [
        {
            title: "Fake DB",
            id: "3ddc7fc032c66965cf2220798c91cb50",
            label: ["Dictionary"],
            review: "検索時にWeb crawlingを行うため、同じキーワードでも時間がかかるとこを防ぐ装置。検索データーをDicに保存しする。検索するたびに「keys()」でdic内のデーターを確認し、一致するデーターがあれはdicをリターンする。なければクローリングを始める。"
        },
        {
            title: "Pandas",
            id: "2e776ae6fb468da79a796aefcfd1429c",
            label: ["CSV"],
            review: "検索したデーターをCSVで保存する。ファイル名はサイト名+検索語。最新情報のみ保存するよう上書きする。"
        },
        {
            title: "Send file",
            id: "164e55f9edaf38f2ced7471b62b697ea",
            label: ["Flask"],
            review: "FlaskのPOST通信でデーターを受け取って検索時サーバーに保存したCSVファイルをダウンロードする。"
        },
    ]
}