using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using API.Application.Abstract;
using API.Application.Mappers;
using API.Domain;
using CsvHelper;

namespace API.Infrastructure.Repository
{
    public class PresidentRepository : IPresidentRepository
    {
        public List<President> GetPresidents()
        {
            try
            {
                var repositoryPath = Path.Combine(Directory.GetCurrentDirectory(), "Data", "Presidents.csv");
                using (var reader = new StreamReader(repositoryPath, Encoding.Default))
                {
                    using (var csv = new CsvReader(reader, System.Globalization.CultureInfo.InvariantCulture))
                    {
                        csv.Configuration.RegisterClassMap<PresidentMap>();
                        // csv.Configuration.Delimiter = ";";
                        var records = csv.GetRecords<President>().ToList();
                        return records;
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}