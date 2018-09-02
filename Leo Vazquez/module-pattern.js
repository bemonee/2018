const fibonacciModule = (function () {
         // private function
        function privateRecursiveFibonacci(value){
            if(value == 0 || value==1)
               return value;
            else
               return privateRecursiveFibonacci(value-1) + privateRecursiveFibonacci(value-2);
        }            
        //another private function
        function doFibonacci(value){
            for( i = 0; i<value; i++){
               console.log(privateRecursiveFibonacci(i))
          }
        }
        
        // the module return the public function to be called
       return {
            fibo: doFibonacci
        };
    })();

    fibonacciModule.fibo(10);
