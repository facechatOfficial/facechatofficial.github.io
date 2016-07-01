string = json_decode(file_get_contents('php://input'));
    
    function objectToArray( $object )
    {
        if( !is_object( $object ) && !is_array( $object ) )
        {
            return $object;
        }
        if( is_object( $object ) )
        {
            $object = get_object_vars( $object );
        }
        return array_map( 'objectToArray', $object );
    }
    
    $result = objectToArray($string);
    $user_id = $result['message']['from']['id'];
    $text = $result['message']['text'];
    $token = '248306916:AAEaMia6IyKgO8a4vTm8ZAkeSHGBxMlywhM';
    $text_reply = 'پیام شما دریافت شد.';
    
    $url = 'https://api.telegram.org/bot'.$token.'/sendMessage?chat_id='.$user_id;
    $url .= '&text=' .$text_reply;
    
    
    $res = file_get_contents($url);
if($text == 'سلام')
	$text_reply = 'سلام';
if($text == 'اسم تون')
	$text_reply = 'ربات تست';
if($text == 'خوبی؟')
	$text_reply = 'ممنون';
