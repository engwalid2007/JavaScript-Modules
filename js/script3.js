define(['./script1','./script2'], function(myscript1,myscript2) {
    
    function function31() {
        myscript1.function11();
    }
    function function32() {
        myscript2.function22();
    }
    return{
        function31:function31,function32:function32
    }
});
