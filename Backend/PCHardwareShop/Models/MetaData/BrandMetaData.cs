using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.Xml.Serialization;

namespace PCHardwareShop.Models.MetaData
{
    public class BrandMetaData
    {
        public int ID { get; set; }
        public string bName { get; set; }
        [JsonIgnore, XmlIgnore]
        public virtual Product Product { get; set; }
    }
}