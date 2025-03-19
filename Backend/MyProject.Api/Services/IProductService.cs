using System.Collections.Generic;
using System.Threading.Tasks;
using ProductBackend.DTOs;
using ProductBackend.Models;

namespace ProductBackend.Services
{
    public interface IProductService
    {
        Task<IEnumerable<ProductDTO>> GetAllProductsAsync();
        Task<ProductDTO> GetProductByIdAsync(int id);
        Task<ProductDTO> AddProductAsync(ProductDTO productDTO);
        Task UpdateProductAsync(ProductDTO productDTO);
        Task DeleteProductAsync(int id);
    }
}