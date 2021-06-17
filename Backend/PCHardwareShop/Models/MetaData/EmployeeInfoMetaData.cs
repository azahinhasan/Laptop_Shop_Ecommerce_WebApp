using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.Xml.Serialization;

namespace PCHardwareShop.Models.MetaData
{
    public class EmployeeInfoMetaData
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Gender { get; set; }
        public int LoginTableID { get; set; }
        public Nullable<int> RankTableID { get; set; }

        public virtual EmployeeRank EmployeeRank { get; set; }

        [JsonIgnore, XmlIgnore]
        public virtual UserLoginTable UserLoginTable { get; set; }
    }
}