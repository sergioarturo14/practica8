  var valores = [true, 5, false, "hola", "adios", 2];
  var resultado = valores[3] > valores[4];
    document.write("Resultado 1: " + resultado + "<br>");
//colocar document.writte () en cada uno de los alert para que se muestre como resultado
  // Combinar valores booleanos
  var valor1 = valores[0];
  var valor2 = valores[2];

  // Obtener un resultado TRUE
  var resultado1 = valor1 || valor2;
  document.write("Resultado 2: " + resultado1 + "<br>"); 

  // Obtener un resultado FALSE
  resultado2 = valor1 && valor2;
    document.write("Resultado 3: " + resultado2 + "<br>");

  // Operaciones matemáticas
  var num1 = valores[1];
  var num2 = valores[5];

  var suma = num1 + num2;
    document.write("El resultado de la suma es: " +suma + " <br>");

  var resta = num1 - num2;
  document.write("El resultado de la resta es: " +resta + " <br>");

  var multiplicacion = num1 * num2;
  document.write("El resultado de la multiplicacion es: " +multiplicacion + " <br>");

  var division = num1 / num2;
  document.write("El resultado de la division es: " +division + " <br>");

  var modulo = num1 % num2;
  document.write("El resultado del modulo es: " +modulo + " <br>");
