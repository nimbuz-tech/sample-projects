# Dotnet8MySqlCrud

A minimal **.NET 8 Web API** with **MySQL** and **EF Core** providing full CRUD for `Product`.

## Quick start

1. Update `appsettings.json` connection string.
2. Restore & run:

```bash
dotnet restore
dotnet run
```

Open Swagger at `https://localhost:5001/swagger`.

## Endpoints
- `GET /api/products`
- `GET /api/products/{id}`
- `POST /api/products`
- `PUT /api/products/{id}`
- `PATCH /api/products/{id}/stock?value=10`
- `DELETE /api/products/{id}`
