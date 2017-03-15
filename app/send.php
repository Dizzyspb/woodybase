<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="info@woodybase.com";  // e-mail админа 
 
 
$date=date("d.m.y"); // число.месяц.год 
 
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl="http://woodybase.com/completed";  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
  
 
// Принимаем данные с формы 
 
$name=$_POST['name']; 
 
$email=$_POST['email']; 

$tel=$_POST['tel']; 
 
$msg=$_POST['message']; 
 
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: Письмо от Колобашкин.ru <from_site@woodybase.com>\r\n";
$headers .= "Reply-To: info@woodybase.com\r\n";
 
// Проверяем валидность e-mail 
 
if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is", 
strtolower($email))) 
 
 { 
 
  echo 
"<center>Вернитесь <a 
href='javascript:history.back(1)'><B>назад</B></a>. Вы 
указали неверные данные!"; 
 
  } 
 
 else 
 
 { 



  $msg="<font size=+1><b>Данные:</b><br><br></font>

  Имя: $name<br>

  E-mail: $email<br>

  Телефон: $tel<br><br>

  <font size=+1><b>Сообщение:</b><br><br></font>

  $msg";
 
  
 
 // Отправляем письмо админу  
 
mail("$adminemail", "$date $time Сообщение 
от $name, телефон: $tel", "$msg", $headers); 
 
mail("$email", "$date $time Сообщение 
от $name, телефон: $tel", "$msg", $headers); 
 
// Сохраняем в базу данных 
 
$f = fopen("message.txt", "a+"); 
 
fwrite($f," \n $date $time Сообщение от $name, телефон: $tel"); 
 
fwrite($f,"\n $msg "); 
 
fwrite($f,"\n ---------------"); 
 
fclose($f); 
 
  

header('Location: http://woodybase.com/successful');
exit;
 
 
 
 } 
 
?>