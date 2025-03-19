using AutoMapper;
using ProductBackend.DTOs;
using ProductBackend.Models;

namespace ProductBackend.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Mapeo de Product a ProductDTO y viceversa
            CreateMap<Product, ProductDTO>().ReverseMap();
        }
    }
}