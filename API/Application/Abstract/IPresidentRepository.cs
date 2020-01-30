using System.Collections.Generic;
using API.Domain;

namespace API.Application.Abstract
{
    public interface IPresidentRepository
    {
        List<President> GetPresidents();
    }
}