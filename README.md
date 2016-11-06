# responsive_ux_template

#Описание проекта.
	Верстка responsive_ux_template.

#Файловая структура
* **css** - каталог содержащий CSS стили проекта. Каталог **css** содержит следующие файлы:
	- **каталог components** содержит файлы отвечающие за основные компоненты страницы. 
		Он включает в себя следующией файлы:
		+ menu.less отвечает за стили всех меню;
		+ posts.less отвечает за стили новостных постов;
		+ progress-bars.less отвечает за стили прогресса;
		
	- **каталог helpers** содержит файлы упрощающие работу при верстке.
		В нем содержатся следующие файлы:
		+ sprite.less отвечает за спрайт с иконками на странице(создается при использовании команды в gulp).
		+ clearfix.less отвечает за предотвращение схлопываний.
		+ functions.less отвечает за миксины используемые при работе.
		
	- **каталог layout** содержит файлы отвечающие за размеры основных блоков страницы.
		Он включает в себя следующие файлы:
		+ section.less отвечает за стили секций страницы;
		+ footer.less отвечает за стили "подвала";
		+ header.less отвечает за стили header;
		+ grid.less отвечает за основные блоки страницы.
		
	- **каталог typography**. Содержит следующие файлы:
		+ link.less отвечает за ссылки на странице.
		+ title.less отвечает за заголовки на странице.
		+ paragraf.less отвечает за параграфы на странице.
		+ ul_and_ol.less отвечает за стили списков.
		
	- **seting.less** отвечает за общие стили на странице.
	- **style.less** отвечает за сборку основного css файла style.css.
	- **style.css** основной css файл, который собирается из остальных.
		
* **images** - каталог содержащий изображения используемые в проекте. 
	Содержит следующие каталоги:
	- icons папка для спрайтов.
	
* **js** - каталог, который содержит JS-файлы.
	- map.js отвечает за карту на странице.
	- preloader.js отвечает за preloader на странице.
	- menu.js отвечает за мобильную версию меню на странице.
	- jquery-min.js отвечает за jquery.

* **index.html** - файл содержащий разметку веб-страницы.

#Поддерживаемые браузеры
	* IE 11;
	* Google Chrome;
	* Firefox;
	* Opera;
	* Yandex Browser;
	* Firefox(мобильная версия);
	* Google Chrome(мобильная версия).
