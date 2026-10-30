/* Original couplets written for this demo. Five moods, five couplets each. */
const SHAYARI = {
  tanhai: {
    label: "तन्हाई", en: "lonely",
    lines: [
      {d1:"रात भर जागती हैं ये खिड़कियाँ भी तन्हा,", d2:"शहर बड़ा है मगर अपना कोई यहाँ नहीं।",
       r:"raat bhar jaagti hain ye khiRkiyaan bhi tanha, shahar baRa hai magar apna koi yahaan nahin.",
       g:"Even the windows stay awake, alone. The city is big, but no one here is mine."},
      {d1:"चाँद से कहा, तू भी अकेला है आसमाँ में,", d2:"कहने लगा - अकेला हूँ, पर रोशनी बाँटता हूँ।",
       r:"chaand se kaha, tu bhi akela hai aasmaan mein; kehne laga - akela hoon, par roshni baantta hoon.",
       g:"I told the moon: you are alone too. It said: alone, yes - but I share my light."},
      {d1:"भीड़ में भी जो खो जाए, वो शहर अजनबी है,", d2:"दिल जिसे पुकारे, वो गली यहाँ नहीं।",
       r:"bheeR mein bhi jo kho jaaye, wo shahar ajanabi hai; dil jise pukaare, wo gali yahaan nahin.",
       g:"A city you can get lost in even in a crowd stays a stranger; the lane your heart calls out to is not here."},
      {d1:"आँसू बहता नहीं, बस आँखों में रहता है,", d2:"कुछ ग़म ऐसे हैं जो बिन कहे सहते हैं।",
       r:"aansu behta nahin, bas aankhon mein rehta hai; kuch gham aise hain jo bin kahe sehte hain.",
       g:"The tear does not fall, it just stays in the eyes. Some griefs are borne in silence."},
      {d1:"फ़ोन में सौ नाम हैं, पर इस घड़ी,", d2:"जिसे पुकारूँ, वो एक नाम नहीं।",
       r:"phone mein sau naam hain, par is ghaRi, jise pukaaroon, wo ek naam nahin.",
       g:"A hundred names in the phone, but at this hour, not the one I would call."}
    ]
  },
  ummeed: {
    label: "उम्मीद", en: "hopeful",
    lines: [
      {d1:"सुबह ने फिर से दरवाज़ा खटखटाया है,", d2:"उदास रात भी अब जाने लगी है।",
       r:"subah ne phir se darwaaza khatkhataaya hai; udaas raat bhi ab jaane lagi hai.",
       g:"Morning has knocked again. Even the sad night is leaving now."},
      {d1:"हर अँधेरी रात के बाद सवेरा आता है,", d2:"बुझे हुए दिये भी फिर जल उठते हैं।",
       r:"har andheri raat ke baad savera aata hai; bujhe hue diye bhi phir jal uthte hain.",
       g:"After every dark night comes dawn. Even snuffed-out lamps light up again."},
      {d1:"उम्मीद की एक किरण काफ़ी है जीने को,", d2:"सूखे पत्तों में भी बहार बसती है।",
       r:"ummeed ki ek kiran kaafi hai jeene ko; sookhe patton mein bhi bahaar bastī hai.",
       g:"One ray of hope is enough to live on. Even dry leaves hold a spring."},
      {d1:"जो टूटा था कभी, वो फिर से जुड़ता है,", d2:"वक़्त हर ज़ख्म को धीरे-धीरे भुलाता है।",
       r:"jo toota tha kabhi, wo phir se juRta hai; waqt har zakhm ko dheere-dheere bhulaata hai.",
       g:"What broke once mends again. Time slowly makes every wound fade."},
      {d1:"कल का सूरज तेरे नाम लिखा है,", d2:"आज की थकान कल काम आएगी।",
       r:"kal ka suraj tere naam likha hai; aaj ki thakaan kal kaam aayegi.",
       g:"Tomorrow's sun has your name on it. Today's tiredness will serve you tomorrow."}
    ]
  },
  yaadein: {
    label: "यादें", en: "missing someone",
    lines: [
      {d1:"तेरी यादों का शोर इस कदर है रात में,", d2:"चुप्पी भी अब तेरा नाम लेती है।",
       r:"teri yaadon ka shor is qadar hai raat mein; chuppi bhi ab tera naam leti hai.",
       g:"Your memories are so loud at night that even the silence speaks your name."},
      {d1:"दूर होकर भी तू पास सा लगता है,", d2:"हर हवा की सरसराहट तेरी आहट लगती है।",
       r:"door hokar bhi tu paas sa lagta hai; har hawa ki sarsaraahat teri aahat lagti hai.",
       g:"Far away, yet you feel near. Every rustle of wind sounds like your footsteps."},
      {d1:"पुरानी चिट्ठियों में अब भी महक बाक़ी है,", d2:"कुछ लोग जाने के बाद भी नहीं जाते।",
       r:"puraani chitthiyon mein ab bhi mahak baaqi hai; kuch log jaane ke baad bhi nahin jaate.",
       g:"Old letters still hold their fragrance. Some people never really leave."},
      {d1:"वही गली, वही चाय की दुकान,", d2:"बस तू नहीं - और सब कुछ वैसा ही है।",
       r:"wahi gali, wahi chaai ki dukaan; bas tu nahin - aur sab kuch waisa hi hai.",
       g:"Same lane, same tea shop. Only you are missing - everything else is the same."},
      {d1:"त्योहार की रोशनी घर तक जाती है,", d2:"यहाँ मैं हूँ, और वहाँ मेरी कुर्सी खाली है।",
       r:"tyohaar ki roshni ghar tak jaati hai; yahaan main hoon, aur wahaan meri kursi khaali hai.",
       g:"The festival lights reach all the way home. I am here, and my chair there sits empty."}
    ]
  },
  sukoon: {
    label: "सुकून", en: "calm",
    lines: [
      {d1:"ठंडी हवा, गर्म चाय, और खामोशी,", d2:"कुछ शामें खुद को गले लगा लेती हैं।",
       r:"thandi hawa, garam chaai, aur khaamoshi; kuch shaamein khud ko gale laga leti hain.",
       g:"Cold air, warm tea, and silence. Some evenings simply hug themselves."},
      {d1:"शोर से दूर, खुद से मुलाक़ात हुई,", d2:"आज दिल ने धीरे से सुकून पाया।",
       r:"shor se door, khud se mulaqaat hui; aaj dil ne dheere se sukoon paaya.",
       g:"Away from the noise, I met myself. Today the heart quietly found peace."},
      {d1:"चाँदनी रात में सब ठहरा-ठहरा सा है,", d2:"जैसे वक़्त भी आज आराम कर रहा है।",
       r:"chaandni raat mein sab thehra-thehra sa hai; jaise waqt bhi aaj aaraam kar raha hai.",
       g:"In the moonlit night everything is still, as if time itself is resting tonight."},
      {d1:"धीमी साँसें, हल्के ख़्याल, हल्का मन,", d2:"आज कुछ नहीं चाहिए, बस यही पल।",
       r:"dheemi saansein, halke khayaal, halka man; aaj kuch nahin chahiye, bas yahi pal.",
       g:"Slow breaths, light thoughts, a light mind. Today I want nothing but this moment."},
      {d1:"पानी जैसा गहरा और शांत रहना,", d2:"मन भी आज बिन लहरों के मुस्कुराता है।",
       r:"paani jaisa gehra aur shaant rehna; man bhi aaj bin lahron ke muskuraata hai.",
       g:"Be deep and still like water. Today the mind smiles without a single ripple."}
    ]
  },
  jashn: {
    label: "जश्न", en: "celebrating",
    lines: [
      {d1:"आज दिल ने बिन वजह नाचने को कहा,", d2:"खुशियाँ भी कभी अनायास आती हैं।",
       r:"aaj dil ne bin wajah naachne ko kaha; khushiyaan bhi kabhi anaayaas aati hain.",
       g:"Today the heart said: dance for no reason. Happiness sometimes arrives uninvited."},
      {d1:"मेहनत की मिठास आज ही तो मिलती है,", d2:"मिली है कामयाबी तो गले लगा ले यार।",
       r:"mehnat ki meethaas aaj hi to milti hai; mili hai kaamyaabi to gale laga le yaar.",
       g:"The sweetness of hard work arrives on a day like this. Success is here - embrace it, friend."},
      {d1:"दीये जलाओ, गली-गली रोशनी कर दो,", d2:"आज का दिन खुद जश्न में ढलता है।",
       r:"diye jalaao, gali-gali roshni kar do; aaj ka din khud jashn mein dhalta hai.",
       g:"Light the lamps, light up every lane. Today turns into a celebration by itself."},
      {d1:"दोस्तों की महफ़िल, हँसी की फुहारें,", d2:"ये पल जेब में भर लो, कल काम आएँगे।",
       r:"doston ki mehfil, hansi ki fuhaarein; ye pal jeb mein bhar lo, kal kaam aayenge.",
       g:"Friends, laughter raining down. Pocket these moments - they will serve you later."},
      {d1:"खुशी बाँटने से बढ़ती है, ये सच है,", d2:"आज अपनी हँसी सब पर लुटा दो।",
       r:"khushi baantne se baRhti hai, ye sach hai; aaj apni hansi sab par luta do.",
       g:"It is true: joy grows when shared. Today, spend your laughter on everyone."}
    ]
  }
};

const CHECKINS = {
  lateNight: "Itni der raat? The quiet hours are exactly why I am here. Koi baat nahi - let us sit with it together.",
  evening: "Shaam ho gayi. The day is done - however it went, you made it through.",
  morning: "A new day. Chai bana li? Let us begin gently.",
  afternoon: "Dopahar ka wajood bhi kabhi bhaari lagta hai. A pause is allowed."
};
