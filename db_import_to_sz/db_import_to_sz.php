<?php
/**
  * jen pro import debilniho retezce do wordpressu
 *
 * @author Vlahovic
 * @since 26.3.12 12:37
  */

// nezbytnosti
require_once('../core/include.php');
debuger::set_enable_report(true);
$core=new Core;
$core->site->setTitle('import do databaze spektra zdravi');
$core->site->addHeader('<style type="text/css">'.debuger::get_css().'</style>');
$core->db->setMysqlDatabase('spektrum-zdravi')->connect();

$query='INSERT INTO `wp_options` (`option_id`, `blog_id`, `option_name`, `option_value`, `autoload`) VALUES
$core->db->query(mysql_real_escape_string($query));

echo $core->site;
?>