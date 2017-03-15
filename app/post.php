<?
// ----------------------------конфигурация-------------------------- //

$adminemail="info@woodybase.com";  // e-mail админа
//$adminemail=$_POST['adminemail']; // e-mail для теста

$date=date("d.m.y"); // число.месяц.год

$time=date("H:i"); // часы:минуты:секунды

$backurl="http://woodybase.com/completed";  // На какую страничку переходит после отправки письма

//---------------------------------------------------------------------- //



// Принимаем данные с формы

$name=$_POST['name'];

$email=$_POST['email'];

$tel=$_POST['tel'];

$address=$_POST['address'];

$promo=$_POST['promo'];

$comment=$_POST['comment'];

$style=$_POST['style'];

$top=$_POST['top'];

$summary=$_POST['summary'];


$count=$_POST['count'];

for ($i=0; $i<=$count; $i++)
  {
    $msg_value[$i]=$_POST[$i];
    $msg_all = implode("", $msg_value);
  }

  $msg=$style.$msg_all.$summary;

  $headers  = "Content-type: text/html; charset=utf-8 \r\n";
  $headers .= "From: Order from Woodybase.com <from_site@woodybase.com>\r\n";
  $headers .= "Reply-To: info@woodybase.com\r\n";



  // Проверяем валидность e-mail

  if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is",
  strtolower($email)))

   {

    echo
  "<center>Turn back <a
  href='javascript:history.back(1)'><B>back</B></a>. Invalid Data!";

    }

   else

   {


  $msg="<font size=+1><b>Data:</b><br><br></font>

  Name: $name<br>

  E-mail: $email<br>

  Telephone: $tel<br><br>

  Address: $address<br><br>

  Comment: $comment<br><br>

  Promocode: $promo<br><br>

  <font size=+1><b>Order</b><br><br></font>

  $msg";


   // Отправляем письмо админу

  mail("$adminemail", "$date $time Message from $name, telephone: $tel, address: $address, promocode: $promo", "$msg", $headers);

  mail("$email", "$date $time Message from $name, telephone: $tel, address: $address, promocode: $promo", "$msg", $headers);

  // Сохраняем в базу данных

  $f = fopen("message.txt", "a+");

  fwrite($f," \n $date $time Message from $name, telephone: $tel");

  fwrite($f,"\n $msg ");

  fwrite($f,"\n ---------------");

  fclose($f);



  // Выводим сообщение пользователю

  print "<script language='Javascript'><!--
  function reload() {location = \"$backurl\"}; setTimeout('reload()', 7000);
  --></script>

  $msg

  <p>Your order has been sent to manager!</p>";
  exit;

  }




?>
