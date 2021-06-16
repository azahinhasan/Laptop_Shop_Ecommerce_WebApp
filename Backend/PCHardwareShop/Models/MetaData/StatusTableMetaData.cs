using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.Xml.Serialization;

namespace PCHardwareShop.Models.MetaData
{
    public partial class StatusTableMetaData
    {
        public int ID { get; set; }
        public Nullable<int> OrderId { get; set; }
        public string FailedReason { get; set; }
        public string Status { get; set; }
        [JsonIgnore, XmlIgnore]
        public virtual OrderdUserInfo OrderdUserInfo { get; set; }
    }
}//    