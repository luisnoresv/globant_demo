using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Application.Abstract;
using API.Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PresidentsController : ControllerBase
    {
        private readonly IPresidentRepository _repository;
        public PresidentsController(IPresidentRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<President> List([FromQuery]string order)
        {
            var presidents = _repository.GetPresidents();
            if (order == "ASC")
                presidents = presidents.OrderBy(x => x.Name).ToList();
            else presidents = presidents.OrderByDescending(x => x.Name).ToList();

            return presidents;
        }
    }
}