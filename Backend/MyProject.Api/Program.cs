using Microsoft.EntityFrameworkCore;
using ProductBackend.Data;
using ProductBackend.Repositories;
using ProductBackend.Services;
using FluentValidation;
using FluentValidation.AspNetCore;
using AutoMapper;
using ProductBackend.Mappings;
using ProductBackend.Validations;
using ProductBackend.Models;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();

// Configurar Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Registrar el DbContext con MySQL
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection")))
);

// Registrar el Repository
builder.Services.AddScoped<IRepository<Product>, ProductRepository>();

// Registrar el Service
builder.Services.AddScoped<IProductService, ProductService>();

// Configurar AutoMapper
builder.Services.AddAutoMapper(typeof(MappingProfile));

// Configurar FluentValidation
builder.Services.AddFluentValidationAutoValidation();
builder.Services.AddScoped<IValidator<Product>, ProductValidator>();

// Configurar CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder =>
        {
            builder.AllowAnyOrigin() 
                   .AllowAnyMethod() 
                   .AllowAnyHeader(); 
        });
});

var app = builder.Build();

// Configurar el pipeline de solicitudes HTTP.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Usar CORS
app.UseCors("AllowAllOrigins");

app.UseAuthorization();
app.MapControllers();

app.Run();