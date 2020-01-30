using API.Domain;
using CsvHelper.Configuration;

namespace API.Application.Mappers
{
    public sealed class PresidentMap : ClassMap<President>
    {
        public PresidentMap()
        {
            Map(m => m.Name).Name(Constants.Constants.CsvHeaders.PRESIDENT);
            Map(m => m.Birthday).Name(Constants.Constants.CsvHeaders.BIRTHDAY);
            Map(m => m.Birthplace).Name(Constants.Constants.CsvHeaders.BIRTHPLACE);
            Map(m => m.Deathday).Name(Constants.Constants.CsvHeaders.DEATHDAY);
            Map(m => m.Deathplace).Name(Constants.Constants.CsvHeaders.DEATHPLACE);
        }
    }
}