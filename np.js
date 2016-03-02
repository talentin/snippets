// возвращает текущие дату и день недели
function getDateNow(){
    var now = new Date();
	var e =  now.getDate();
	var month = new Array('','января', 'февраля',+
    'марта', 'апреля', 'мая', 'июня', 'июля', 'августа'+
    'сентября', 'октября', 'ноября', 'декабря');
	var day = new Array('воскресенье', 'пенедельник'+
    'вторник', 'среда', 'четверг', 'пятница', 'суббота');
	nday=day[now.getDay()];
	nmonths =month[(now.getMonth() + 1)];
	return '<h3 style="margin:0;">Сегодня:</h3>' +
    '<h5 class="subheader" style="margin:0">' + e + ' ' +
    nmonths + '</h5><h5 class="subheader" style="margin:0;">' +
    nday + '</h5>';
}
document.write(getDateNow());
