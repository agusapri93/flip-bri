<?php  
$run_webcam = shell_exec('/bin/bash /var/www/html/webcam.sh 2>&1');
$display_ssocr = shell_exec("ssocr -t 20 image.jpg");
$upload_s3 = shell_exec('/bin/bash /var/www/html/upload_s3.sh 2>&1');

echo $display_ssocr;

?>
