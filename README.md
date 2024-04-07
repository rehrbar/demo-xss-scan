# Demo XSS Scanner

## Build and Start Server

```sh
podman build -t demo-xss-scan .
podman run --rm -p 3000:3000 --name demo-xss demo-xss-scan
```