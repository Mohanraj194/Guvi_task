var msg_div = document.getElementById('main-div');
setTimeout(function(){
        msg_div.innerHTML=10
            setTimeout(function(){
            msg_div.innerHTML=9
            setTimeout(function(){
                msg_div.innerHTML=8
                setTimeout(function(){
                    msg_div.innerHTML=7
                    setTimeout(function(){
                        msg_div.innerHTML=6
                        setTimeout(function(){
                            msg_div.innerHTML=5
                            setTimeout(function(){
                                msg_div.innerHTML=4
                                setTimeout(function(){
                                    msg_div.innerHTML=3
                                    setTimeout(function(){
                                        msg_div.innerHTML=2
                                        setTimeout(function(){
                                            msg_div.innerHTML=1
                                            setTimeout(function(){
                                                msg_div.innerHTML='Happy Indepedence day'
                                                
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
        })