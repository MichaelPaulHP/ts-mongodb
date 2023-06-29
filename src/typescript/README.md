
# TypeScript
# ¿Qué es TypeScript?
 - lenguaje de programación que esencialmente añade tipado estático a JavaScript,

# Beneficios sobre Javascript
- Tipado estático
- Detección de errores temprana
- Mejor experiencia de desarrollo
  - Autocompletado
  - Refactorización
  - Navegación
  - Documentación
  - Validación de errores
  - Mejor soporte para IDEs
- Mantenibilidad y legibilidad:
   - Definir los typos explícitamente ayuda a entender el código
   - 
- Mejora la productividad
  - Al definir los tipos sabemos
    - que esperar de una función
    - que esperar de una variable
    - que esperar de un objeto
    - que esperar de un array
    - que esperar de un callback
    - que esperar de un evento
    - que esperar de una promesa

- Mejor experciencia con paquetes de terceros
  - Ver la documentación de los paquetes de terceros
  - Ver los tipos de los paquetes de terceros
 
- Orientado a objetos
  - Metodos o atributos
    - Public
    - Private
    - Protected
    - Static
- Controlar la mutabilidad de los objetos
  - Readonly
  - as const
  - ReadonlyArray
- Manipular tipos de Datos (utility types)
  - Pick
  - Omit
  - Partial
  - Required
  - etc.
# Configuración básica de un proyecto TypeScript
## Instalación de TypeScript
- Instalación global
```bash
npm install -g typescript
```
- Instalación local
```bash
npm install typescript
```

## Transpiler de TypeScript
- Compilación global
```bash
tsc <archivo.ts>
```
- Compilación local
```bash
npx tsc <archivo.ts>
```
## Configuración de TypeScript
 - Creación de archivo de configuración tsconfig.json
    ```bash
    tsc --init
    ```
 # Codigo
- [Ejemplos](https://github.com/MichaelPaulHP/ts-mongodb/blob/main/src/typescript/info.ts)  
     