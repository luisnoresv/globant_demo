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
                using (var reader = new StreamReader("../API/Persistence/Data/Presidents.csv", Encoding.Default))
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