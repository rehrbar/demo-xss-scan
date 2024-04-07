# Demo XSS Scanner

## Build and Start Server

```sh
podman build -t demo-xss-scan .
podman run --rm -p 3000:3000 --name demo-xss demo-xss-scan
```

## Injection Examples

Following urls trigger a reflected xss injection. There are a lot more, but this showcases the potential.

```
http://localhost:3000/?name=%3Cscript%3Ealert%281%29%3C%2Fscript%3E&theme=
http://localhost:3000/?name=world&theme=%22%3E%3Cscript%3Ealert(1)%3C/script%3E
```

Note how the `theme` parameter can also be misused, even if it is a select element.

## Mitigate Attribute Injection
```js
let html=`<h1 data-text="${theme.replaceAll('"',"&quot;")}">Hello world</h1>`
```

## Test with [XSStrike](https://github.com/s0md3v/XSStrike)

```sh
podman run --rm -ti --net container:demo-xss docker.io/femtopixel/xsstrike -u 'http://localhost:3000/?name=world3&theme='
```