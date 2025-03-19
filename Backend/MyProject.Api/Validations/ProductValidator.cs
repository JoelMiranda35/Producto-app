using FluentValidation;
using ProductBackend.Models;

namespace ProductBackend.Validations
{
    public class ProductValidator : AbstractValidator<Product>
    {
        public ProductValidator()
        {
            RuleFor(p => p.Name).NotEmpty().WithMessage("El nombre es obligatorio.");
            RuleFor(p => p.Price).GreaterThan(0).WithMessage("El precio debe ser mayor que 0.");
            RuleFor(p => p.Description).MaximumLength(500).WithMessage("La descripción no puede exceder los 500 caracteres.");
        }
    }
}