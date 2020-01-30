using API.Application.Constants;
using CsvHelper.Configuration.Attributes;

namespace API.Domain
{
    public class President
    {
        [Name(Constants.CsvHeaders.PRESIDENT)]
        public string Name { get; set; }

        [Name(Constants.CsvHeaders.BIRTHDAY)]
        public string Birthday { get; set; }

        [Name(Constants.CsvHeaders.BIRTHPLACE)]
        public string Birthplace { get; set; }

        [Name(Constants.CsvHeaders.DEATHDAY)]
        public string Deathday { get; set; }

        [Name(Constants.CsvHeaders.DEATHPLACE)]
        public string Deathplace { get; set; }
    }
}