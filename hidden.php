<?php
date_default_timezone_set('UTC');
$time = date('H: i, j, F ');
$user = 'Михаил';
echo '
<form action = "hidden_handler.php" method = "POST">
  <fieldset>
    <legend>Оставьте комментраий</legend>
    <textarea name="comment" cols="20" rows="5">
    </textarea>
    <input type="hidden" name = "user", value = " '. $user .' ">
    <input type="hidden" name = "time", value = " '. $time .' ">
   </fieldset>
   <p><input type="submit"></p>
</form> ';


