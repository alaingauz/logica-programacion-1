const boton = document.getElementById('botonPedirNumeros');
        const resultadoDiv = document.getElementById('resultado');

        function iniciarProceso() {
            const num1_str = prompt("Primer número:");
            const num2_str = prompt("Segundo número:");
            const num3_str = prompt("Tercer número:");

            const num1 = parseInt(num1_str);
            const num2 = parseInt(num2_str);
            const num3 = parseInt(num3_str);

            if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
                const mensajeError = "Error: Debes ingresar solo números.";
                console.error(mensajeError);
                resultadoDiv.innerHTML = `<p style="color: red;">${mensajeError}</p>`;
                return;
            }

            if (num1 === num2 && num2 === num3) {
                const mensajeIguales = "Los tres números son iguales: " + num1;
                console.log(mensajeIguales);
                resultadoDiv.innerText = mensajeIguales;
            
            } else {
                const numeros = [num1, num2, num3];
                
                const mayorMenor = [...numeros].sort((a, b) => b - a);
                
                const menorMayor = [...numeros].sort((a, b) => a - b);
                
                console.log("Mayor a menor:", mayorMenor.join(', '));
                console.log("Menor a mayor:", menorMayor.join(', '));
                
                resultadoDiv.innerHTML = `
                    <p>Orden de mayor a menor: <b>${mayorMenor.join(', ')}</b></p>
                    <p>Orden de menor a mayor: <b>${menorMayor.join(', ')}</b></p>
                `;
            }
        }
        
boton.addEventListener('click', iniciarProceso);
