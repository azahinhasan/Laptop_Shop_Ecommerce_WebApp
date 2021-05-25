using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.Xml.Serialization;

namespace PCHardwareShop.Models.MetaData
{
    public class AllOrderMetaData
    {
        public int ID { get; set; }
        public Nullable<int> OrderdUserID { get; set; }
        public Nullable<int> ProductCatagoryLinkedID { get; set; }
        public Nullable<int> Quantity { get; set; }
        [JsonIgnore, XmlIgnore]
        public virtual OrderdUserInfo OrderdUserInfo { get; set; }
        [JsonIgnore, XmlIgnore]
        public virtual ProductCategoryLink ProductCategoryLink { get; set; }
    }
}