var tipuesearch = {"pages": [{'title': 'about', 'text': '四設計二甲 41023110 紀宜馨 \n github倉儲 : \n https://github.com/mdecad2022/site-41023110/actions/runs/3710773631 \n 個人網站 : \n https://mdecad2022.github.io/site-41023110/content/w15.html/ \n \n', 'tags': '', 'url': 'about.html'}, {'title': 'Brython', 'text': "https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:['./../cmsimde/static/','./../downloads/py/']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n", 'tags': '', 'url': 'Brython.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'W2', 'text': '建立 Github 與倉儲。 \n 建立 Replit 帳號。 \n 建立 Onedrive帳號，並且使用 Team 程式進入班級課程及課程會議。 \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '建立課程import以及 Replit 帳號。將動態網站與倉儲同步。 \n 透過organization建立個人可管理倉儲。 \n 利用動態網頁管理內容，將動態網頁轉為靜態網站後進行與Github倉儲同步。 \n \n 在 \xa0 https://exam.cycu.org \xa0 建立考試帳號. \n \n \n \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4-5', 'text': '1.(登入 stud.cycu.org)利用 @nfu 電子郵箱收到的帳號與密碼, 登入 stud.cycu.org: 在命令列視窗, 以 ssh cad學號@stud.cycu.org , 輸入對應密後, 可以登入系統 \n 2.請到 excel 檔案 查詢 stud.cycu.org 中與帳號對應的近端 (給 127.0.0.1 使用) 與遠端 (給 stud.cycu.org) 埠號 \n 3.(透過 sftp 建立近端目錄與 stud.cycu.org 帳號下的對應) 開啟另一個命令列, 執行 sftp 帳號@stud.cycu.org 輸入對應密碼, 即可建立近端目錄與遠端系統目錄間的對應. \n 4.與在近端(Windows)利用 SSH 建立 public/private keys 流程相同, 必須在 Linux (Ubuntu) 利用 ssh-keygen 建立 keys. 所產生的 id_rsa 為 private key, 而 id_rsa.pub 為 public key, 都位於 .ssh 目錄下. \n 5.利用 sftp 進入 stud.cycu.org 後, cd 到 .ssh, 以 get id_rsa.pub 將 public key 取至 Windows 後, 送到 Github -> Settings -> SSH and GPG 設定區, 透過 new key 登錄公鑰. \n 6.接下來要下載 config 設定檔案, 以 sftp 放入 stud.cycu.org 主機的 .ssh 目錄中. \n 7.上面的 config 主要設定 SSH 協定對 github.com 連線時的代理主機, 但取下 cmsimde 子模組使用的是 https, 因此執行下列 git clone 時將會同時用到 SSH 與 https 協定, 因此除了 .ssh 目錄下要有 config 設定檔案外, 也必須同時在 .gitconfig 檔案中設定 http.proxy, 也就是以 git config --global http.proxy http://p42.cycu.org:3128 設定供 https 連線使用的代理主機, 並且以 git config --global user.name 以及 git config --global user.email 設定提交用的身分註記. \n 8.在 stud.cycu.org 中, 以 git clone --recurse-submodules git@github.com:mdecad2022/site-個人github帳號.git 取下個人倉儲.', 'tags': '', 'url': 'W4-5.html'}, {'title': 'W6', 'text': '1.零件一 \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n', 'tags': '', 'url': 'W14.html'}, {'title': 'w15', 'text': 'solvespace1216.7z \n 零件一 \n \n \n \n \n \n \n \n 組合件 \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w15.html'}]};