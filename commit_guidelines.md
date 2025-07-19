# Guía de Estándares para Mensajes de Commits

Esta guía define los estándares para escribir mensajes de commits en este proyecto. Siguiendo estas convenciones se mejora la legibilidad del historial de cambios, se facilita la generación de changelogs y se optimiza la colaboración entre desarrolladores.

---

## ✨ Estructura Requerida (Conventional Commits)

```
<tipo>[alcance opcional]: <mensaje corto>
```

### Ejemplos:
```
feat: agregar funcionalidad de login con JWT
fix(auth): corregir error en validación de email
refactor: reorganizar lógica de autenticación
```

---

## 🏠 Tipos de Commit Permitidos

| Tipo       | Uso                                                          |
|------------|--------------------------------------------------------------|
| `feat`     | Agregar nueva funcionalidad                                  |
| `fix`      | Corrección de errores o bugs                                 |
| `docs`     | Cambios en documentación                                     |
| `style`    | Formato de código (espaciado, comas, etc.) sin afectar lógica |
| `refactor` | Cambios de código que no agregan ni corrigen funcionalidad   |
| `test`     | Agregado o mejora de pruebas                                 |
| `chore`    | Cambios en herramientas, configuraciones o tareas rutinarias |
| `perf`     | Mejora de rendimiento                                         |
| `ci`       | Cambios en integración continua o pipelines                   |
| `build`    | Cambios en sistema de build o dependencias externas          |
| `revert`   | Reversión de un commit anterior                              |

---

## ✍️ Reglas de Escritura

- Usar modo imperativo ("agregar", "corregir", no "agregado").
- No exceder 72 caracteres en el mensaje corto.
- Escribir el mensaje extendido (opcional) tras una línea en blanco.

### Ejemplo de mensaje extendido:
```
feat: agregar validación de contraseña

Se agregó validación para asegurar que la contraseña
cumpla con requisitos de seguridad mínimos.
```

---

## 🔧 Comandos úciles

Alias recomendado:
```bash
git config --global alias.cm "commit -m"
```

Uso:
```bash
git cm "feat: agregar componente de dashboard"
```

---

## 📄 Archivos Relacionados

Este archivo debe mantenerse en la raíz del proyecto como `COMMIT_GUIDELINES.md` y puede ser referenciado por nuevos contribuidores o integrado en el archivo `CONTRIBUTING.md`.

---

¡Gracias por seguir estas pautas y ayudar a mantener un historial de commits limpio y comprensible!

