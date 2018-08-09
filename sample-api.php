<?php  
$capture_image = shell exec("fswebcam -r 1920x1080 image.jpg");
$read_image = shell_exec("ssocr crop 583 494 456 157 -t 30 image.jpg");
echo $read_image;
?>