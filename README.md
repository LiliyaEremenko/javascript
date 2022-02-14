# Типы данных

## Число
>let n = 123;
>
>n = 12.3456;

Числовой тип ('number') представляет как целочисленные значения, так и числа с плавающей запятой.

Существует множество операций над числами, например '*', '/', '-' и т.д.

Кроме обычных чисел, существуют еще и специальные числовые значения, которые относятся к числам: 'Infinity', '-Infinity' и 'NaN'.

* 'Infinity' представляет математическую бесконечность. Это особое значение, которое больше любого числа.
Мы можем получить его в результате деления на ноль.
> console.log(1 / 0);
* 'NaN' означает вычислительную ошибку. Это результат неправильной или неопределенной математической операции, например
> console.log('строка' / 2);

Если где-то в математическом выражении есть 'NaN', то результатом вычислений с его участием будет 'NaN'.

## BigInt
Тип 'number' не может содержать числа больше чем 2^53-1. Для большинства случаев это достаточно, но не всегда.
Для этого можно использовать тип 'BigInt'.

Чтобы создать значение типа 'BigInt', необходимо добавить 'n' в конец числового литерала:
> const big = 123456789123456789n;

## Строка
