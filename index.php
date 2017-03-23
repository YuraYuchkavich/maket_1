<?php

define('DB_NAME','main');
define('DB_LOGIN','admin');
define('DB_PASS','admin');
define('DB_LOCAL','loalhost');


$link = mysqli_connect(DB_LOCAL,DB_LOGIN,DB_PASS,DB_NAME);
mysqli_set_charset($link,'utf8');
$name='Yra';
mysqli_query(&link,
"
INSERT INTO `eweiv` SET
`name` = '".mysqli_real_escape_string($link,$name)."',
`email` = 'name',
`position` = 'name',
`comment` = 'name',
`foto` = 'name'
");

?>