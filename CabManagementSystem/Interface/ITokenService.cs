using CabManagementSystem.Entities;

namespace CabManagementSystem.Interface
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);

    }
}
