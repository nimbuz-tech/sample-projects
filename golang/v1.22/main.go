package main

import (
    "embed"
    "fmt"
    "log"
    "net/http"
    "io/fs"
)

//go:embed static/*
var staticFiles embed.FS

func main() {
    // Use only the contents inside "static"
    content, err := fs.Sub(staticFiles, "static")
    if err != nil {
        log.Fatal(err)
    }

    fileServer := http.FileServer(http.FS(content))
    http.Handle("/", fileServer)

    addr := ":8080"
    fmt.Println("Serving static files at http://localhost" + addr)
    log.Fatal(http.ListenAndServe(addr, nil))
}
