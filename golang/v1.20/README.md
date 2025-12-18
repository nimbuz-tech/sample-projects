# Go Static Webapp (zip package)

Files included:
- main.go      → tiny Go server using `embed` to serve `static/`
- go.mod
- static/index.html
- Dockerfile

## Requirements
- Go 1.20+ (recommended)
- Docker (if using container)
- Git (optional)

## Run locally (quick)
```bash
cd go-webapp
go run .
# then open http://localhost:8080
```

## Build binary
```bash
go build -o go-webapp .
./go-webapp
```

## Build & run with Docker (local)
```bash
docker build -t vidya/go-webapp:latest .
docker run -p 8080:8080 vidya/go-webapp:latest
# open http://localhost:8080
```

## Push to Docker Hub (example)
```bash
# login once
docker login
docker build -t <your-dockerhub-username>/go-webapp:latest .
docker push <your-dockerhub-username>/go-webapp:latest
```

## Deploy options (short)
- Any container host: ECS, GCP Cloud Run, Azure Container Instances, DigitalOcean App Platform, Render, etc. Push the Docker image to a registry (Docker Hub, GHCR, GCR) and point the service to that image.
- Deploy from source on Render / Heroku (container mode) by connecting the repo and letting the platform build the image.

## GitHub Actions (example) - builds image and pushes to Docker Hub
Create `.github/workflows/ci.yml` with a secret `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN`.
```yaml
name: CI
on: [push]
jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build image
        run: docker build -t ${{ secrets.DOCKERHUB_USERNAME }}/go-webapp:${{ github.sha }} .
      - name: Login to DockerHub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}
      - name: Push
        run: docker push ${{ secrets.DOCKERHUB_USERNAME }}/go-webapp:${{ github.sha }}
```

## Notes
- `embed` is used so the static files are compiled into the binary — no external volume required.
- Adjust ports and environment variables as required by your deployment target.
