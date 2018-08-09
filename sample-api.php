<?php  
$a = shell_exec('/bin/bash /var/www/html/webcam.sh 2>&1');
echo $a;

echo "string";

//$output = shell_exec('/usr/bin/fswebcam -S 1 -r 640x480 -q /var/www/html/foto.jpg');
//echo $output;
//shell_exec("ssocr crop 583 494 456 157 -t 30 image.jpg");
//echo $read_image;
?>
