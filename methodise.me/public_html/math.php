<html>
    <head>
        <script src="/S/big.min.js"></script>
    </head>
    <body>
        Q:
        <textarea id="question"></textarea>
        <button id="calculate">=</button>
        <br>
        A:
        <div id="answer"></div>
        <script>
            document.getElementById('calculate').onclick=function(){
                var numbers=document.getElementById('question').value.replace(/\,/g,'.').split("\n");
                var whole=0;
                for(var i=0,length=numbers.length;i<length;i+=1){
                    whole=Big(parseFloat(whole)).plus(parseFloat(numbers[i])).toFixed(2);
                    }
                document.getElementById('answer').innerHTML=whole;
                };
        </script>
    <body>
</html>
